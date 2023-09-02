import G6 from '@antv/g6'
import insertCss from 'insert-css'
const { getLabelPosition, transform } = G6.Util

export default class G6Creator {
  constructor(wrap, height, nodeClickFun) {
    if (!wrap) return
    this.onNodeClick = nodeClickFun

    this.container = document.getElementById(wrap)
    this.opts = {
      width: this.container.scrollWidth,
      height: this.container.scrollHeight || height,
      animateCfg: { duration: 200, easing: 'easeCubic' },
    }
    this.registerComps()
    this.init()
  }
  // 注册组件
  registerComps() {
    // 插入css
    insertCss(`
      .g6-minimap-wrap {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #fff;
        box-shadow: 0 0 0 1px #e2e2e2;
      }
      .g6-minimap-viewport {
        border: 2px solid rgb(25, 128, 255);
      }
      .g6-component-toolbar li i {
        font-size: 20px;
      }
    `)

    // 注册节点
    G6.registerNode(
      'card-node',
      {
        drawShape(cfg, group) {
          const r = 2
          const shape = group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: 140,
              height: 45,
              stroke: cfg.color,
              radius: r,
              fill: '#FFF',
              cursor: 'pointer',
            },
            name: 'main-box',
            draggable: true,
          })
          group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: 140,
              height: 20,
              fill: cfg.headerColor,
              stroke: cfg.color,
              radius: [r, r, 0, 0],
              cursor: 'pointer',
            },
            name: 'title-box',
          })

          // left icon
          group.addShape('image', {
            attrs: {
              x: 4,
              y: 4,
              height: 12,
              width: 12,
              cursor: 'pointer',
              img: cfg.icon,
            },
            name: 'node-icon',
          })

          const textShape = group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              y: 5,
              x: 24,
              text: cfg.name,
              fill: 'rgba(0, 0, 0, 0.85)',
              cursor: 'pointer',
              width: 100,
              title: cfg.name
            },
            name: 'name',
          })
          const textBBox = textShape.getBBox() // 获取文字的边界框
          const { text, width } = textShape.attrs
          if (textBBox.width > width) {
            const ellipsisText = text.slice(0, 10) + '...' // 使用省略样式代替超出部分
            textShape.attr('text', ellipsisText) // 更新文字内容
          }

          //  连接类型
          // group.addShape('text', {
          //   attrs: {
          //     textBaseline: 'top',
          //     y: 28,
          //     x: 4,
          //     fontSize: 11.5,
          //     text: '连接类型',
          //     fill: 'rgba(0, 0, 0, 0.85)',
          //     cursor: 'pointer',
          //   },
          //   name: 'link-type-text',
          // })
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              y: 28,
              x: 6,
              text: cfg.linkType,
              fontSize: 11,
              fill: 'rgba(0, 0, 0, 0.65)',
              cursor: 'pointer',
            },
            name: 'link-type-text',
          })

          return shape
        },

        setState(name, value, item) {
          const shape = item.get('keyShape')
          if (name === 'hover') {
            if (value) {
              shape.attr('lineWidth', 2)
            } else {
              shape.attr('lineWidth', 1)
            }
          }
        },
      },
      'single-node',
    )
    // 注册边线
    G6.registerEdge(
      'arrow-running',
      {
        afterDraw(cfg, group) {
          const shape = group.get('children')[0]

          const arrow = group.addShape('marker', {
            attrs: {
              x: 16,
              y: 0,
              r: 8,
              lineWidth: 2,
              stroke: '#3370ff',
              fill: '#fff',
              symbol: (x, y, r) => {
                return [
                  ['M', x - 6, y - 4],
                  ['L', x - 2, y],
                  ['L', x - 6, y + 4],
                ]
              },
            },
          })

          // animation for the red circle
          arrow.animate(
            ratio => {
              const tmpPoint = shape.getPoint(ratio)
              const pos = getLabelPosition(shape, ratio)
              let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]
              matrix = transform(matrix, [
                ['t', -tmpPoint.x, -tmpPoint.y],
                ['r', pos.angle],
                ['t', tmpPoint.x, tmpPoint.y],
              ])
              return {
                x: tmpPoint.x,
                y: tmpPoint.y,
                matrix,
              }
            },
            {
              repeat: true,
              duration: 3000,
            },
          )
        },
      },
      'cubic', // extend the built-in edge 'cubic'
    )
    // 注册工具栏
    this.toolbar = new G6.ToolBar({
      position: { x: 10, y: 10 },
      getContent: () => `
        <ul class='g6-component-toolbar'>
          <li code='zoomOut'>
            <i class="f-iconfont f-icon-zoomin"></i>
          </li>
          <li code='zoomIn'>
            <i class="f-iconfont f-icon-zoomout"></i>
          </li>
          <li code='realZoom'>
            <i class="f-iconfont f-icon-icon-test"></i>
          </li>
          <li code='autoZoom'>
            <i class="f-iconfont f-icon-expend"></i>
          </li>
        </ul>`,
      handleClick: (code, graph) => {
        switch (code) {
          case 'zoomOut':
            graph.zoom(1.2, undefined, true, this.opts.animateCfg)
            break
          case 'zoomIn':
            graph.zoom(0.8, undefined, true, this.opts.animateCfg)
            break
          case 'realZoom':
            graph.zoomTo(1, undefined, true, this.opts.animateCfg)
            break
          case 'autoZoom':
            graph.fitView(20, undefined, true, this.opts.animateCfg)
            break
        }
      },
    })

    this.tooltip = new G6.Tooltip({
      // offsetX and offsetY include the padding of the parent container
      offsetX: 10,
      offsetY: 10,
      // the types of items that allow the tooltip show up
      // 允许出现 tooltip 的 item 类型
      itemTypes: ['node'],
      // custom the tooltip's content
      // 自定义 tooltip 内容
      getContent: e => {
        const outDiv = document.createElement('div')
        const model = e.item.getModel()
        const name = `${model.name}`
        const linkType = `${model.linkType}`
        outDiv.style.width = 'fit-content'
        outDiv.innerHTML = `<div>${name}<br>${linkType}</div>`
        return outDiv
      },
    })

    // 注册minimap
    this.minimap = new G6.Minimap({
      className: 'g6-minimap-wrap',
      size: [150, 100],
    })
  }
  // 初始化工作
  init() {
    const { width, height } = this.opts
    this.graph = new G6.Graph({
      container: this.container,
      width,
      height,
      // 节点在默认状态下的样式配置（style）和其他配置
      defaultNode: { type: 'card-node' },
      plugins: [this.minimap, this.toolbar, this.tooltip],
      modes: { default: ['drag-canvas', 'zoom-canvas'] },
      defaultEdge: {
        type: 'arrow-running',
        style: {
          lineWidth: 2,
          stroke: '#bae7ff',
        },
      },
    })

    this.graph.on('node:mouseenter', e => {
      const node = e.item
      this.graph.setItemState(node, 'hover', true)
    })

    this.graph.on('node:mouseleave', e => {
      const node = e.item
      this.graph.setItemState(node, 'hover', false)
    })

    this.graph.on('node:click', e => {
      const model = e.item.getModel()
      this.onNodeClick && this.onNodeClick(model)
    })
  }
  render(data) {
    this.graph.data(data)
    this.graph.render()
    this.graph.fitView()
  }
  destroy() {
    this.graph.clear()
    this.graph.destroy()
  }
  resize() {
    if (!this.graph || this.graph.get('destroyed')) return
    if (!this.container || !this.container.clientWidth || !this.container.clientHeight) return
    this.graph.changeSize(this.container.clientWidth, this.container.clientHeight)
  }
}
