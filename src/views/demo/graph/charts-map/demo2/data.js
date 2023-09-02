import img0 from '@/assets/images/db/000.png'
import img1 from '@/assets/images/db/001.svg'
import img2 from '@/assets/images/db/002.svg'
import img3 from '@/assets/images/db/003.svg'
import img4 from '@/assets/images/db/004.svg'
import img5 from '@/assets/images/db/001.png'
import img6 from '@/assets/images/db/002.png'
import img7 from '@/assets/images/db/003.png'
import img8 from '@/assets/images/db/004.png'
import { Utils } from 'f-ui-one'
import { mixWhite } from 'f-ui-one/src/utils/color'

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
    const includedKey = commonLibray.includes(groupCode)
    // 判断是否是其他库
    const nodeType = includedKey ? groupCode : 'OTHER'
    const category = LIBRAY_MAP[nodeType]
    relationMap[nodeType]?.push({
      id: item.id,
      name: item.name,
      linkType: item.linkType,
      icon: ICON_MAP[nodeType],
      // color: mixWhite(COLOR_MAP[nodeType], 0.5),
      color: COLOR_MAP[nodeType],
      nodeType,
      category,
      isLeaf: true,
    })
  })

  // 扩展数据中台中间节点，和4个库的节点
  const mapData = {
    id: 'data-center',
    nodeType: 'root',
    name: '数据中台',
    img: img0,
    children: [
      {
        id: 'QZ',
        nodeType: 'group',
        name: LIBRAY_MAP.QZ,
        category: LIBRAY_MAP.QZ,
        color: TEXT_COLOR_MAP.QZ,
        img: IMG_MAP.QZ,
        children: [...relationMap.QZ],
      },
      {
        id: 'CS',
        nodeType: 'group',
        name: LIBRAY_MAP.CS,
        category: LIBRAY_MAP.CS,
        color: TEXT_COLOR_MAP.CS,
        img: IMG_MAP.CS,
        children: [...relationMap.CS],
      },
      {
        id: 'ZX',
        nodeType: 'group',
        name: LIBRAY_MAP.ZX,
        category: LIBRAY_MAP.ZX,
        color: TEXT_COLOR_MAP.ZX,
        img: IMG_MAP.ZX,
        children: [...relationMap.ZX],
      },
      {
        id: 'OTHER',
        nodeType: 'group',
        name: LIBRAY_MAP.OTHER,
        category: LIBRAY_MAP.OTHER,
        color: TEXT_COLOR_MAP.OTHER,
        img: IMG_MAP.OTHER,
        children: [...relationMap.OTHER],
      },
    ],
  }

  // 需要返回4个库,分别喂前置,贴源,中心,专题库
  // const all = [...relationMap.QZ, ...relationMap.CS, ...relationMap.ZX, ...relationMap.OTHER]

  // const mapData = {
  //   nodes: all,
  //   edges: data.lineList.map(i => ({ source: i.from, target: i.to })),
  // }

  console.log(mapData)

  return mapData
}
