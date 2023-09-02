import img1 from '@/assets/images/db/001.svg'
import img2 from '@/assets/images/db/002.svg'
import img3 from '@/assets/images/db/003.svg'
import img4 from '@/assets/images/db/004.svg'
import img5 from '@/assets/images/db/001.png'
import img6 from '@/assets/images/db/002.png'
import img7 from '@/assets/images/db/003.png'
import img8 from '@/assets/images/db/004.png'
import { Utils } from 'f-ui-one'

const { alpha } = Utils.color

// 图标
export const ICON_MAP = {
  QZ: img1,
  CS: img2,
  ZX: img3,
  OTHER: img4,
}

// 图片
export const IMG_MAP = {
  QZ: img5,
  CS: img6,
  ZX: img7,
  OTHER: img8,
}

// 颜色
export const COLOR_MAP = {
  QZ: '#9fb1ec',
  CS: '#a4d3ff',
  ZX: '#aef0f1',
  OTHER: '#caece0',
}

export const TEXT_COLOR_MAP = {
  QZ: '#4165da',
  CS: '#49a7ff',
  ZX: '#41ddde',
  OTHER: '#7cd7b8',
}

export const LIBRAY_MAP = {
  QZ: '前置库',
  CS: '贴源库',
  ZX: '中心库',
  OTHER: '专题库',
}

// 扩展设置位置信息
function setPosition(list, left, distance) {
  let top = 60
  list.forEach((item, i) => {
    item.x = left
    item.y = top * (i + 1) + distance
    item.anchorPoints = [
      [0, 0.5],
      [1, 0.5],
    ]
  })
}

export function getMockData(data) {
  // 前置库,贴源,中心,
  const commonLibray = ['QZ', 'CS', 'ZX']

  const relationMap = {
    QZ: [],
    CS: [],
    ZX: [],
    OTHER: [],
  }

  data.nodeList.forEach(item => {
    // 取第一个逗号前的内容,如有的话
    const index = item.groupCode.indexOf(',')
    const groupCode = index === -1 ? item.groupCode : item.groupCode.slice(0, index)

    // 如果当前节点是有关系连接的内容,那么取对应值的内容去进行填充
    if (item.existRelation) {
      const includedKey = commonLibray.includes(groupCode)
      // 判断是否是其他库
      const nodeType = includedKey ? groupCode : 'OTHER'
      const category = LIBRAY_MAP[nodeType]
      relationMap[nodeType]?.push({
        id: item.id,
        name: item.name,
        linkType: item.linkType,
        icon: ICON_MAP[nodeType],
        color: COLOR_MAP[nodeType],
        // headerColor: alpha(COLOR_MAP[nodeType], 0.13),
        headerColor: COLOR_MAP[nodeType],
        nodeType,
        category,
      })
    }
  })

  // 扩展计算节点位置
  setPosition(relationMap.QZ, 0, 0)
  setPosition(relationMap.CS, 250, 0)
  setPosition(relationMap.ZX, 500, 0)
  setPosition(relationMap.OTHER, 750, 0)

  // 需要返回4个库,分别喂前置,贴源,中心,其他库
  const all = [...relationMap.QZ, ...relationMap.CS, ...relationMap.ZX, ...relationMap.OTHER]

  const mapData = {
    nodes: all,
    edges: data.lineList.map(i => ({ source: i.from, target: i.to })),
  }

  console.log(mapData)

  return mapData
}
