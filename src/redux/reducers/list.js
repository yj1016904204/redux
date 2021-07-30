

const initState = [
  {
    icon: "dianying",
    text: "电影",
    is: true,
  },
  {
    icon: "fabiao",
    text: "发表",
    is: true,
  },
  {
    icon: "caogaoxiang",
    text: "草稿箱",
    is: true,
  },
  {
    icon: "fasong",
    text: "发送",
    is: true,
  },
  {
    icon: "anquan",
    text: "安全",
    is: true,
  },
  {
    icon: "faxian",
    text: "发现",
    is: true,
  },
  {
    icon: "bianji",
    text: "编辑",
    is: true,
  },
  {
    icon: "loufang",
    text: "楼房",
    is: true,
  },
  {
    icon: "diannao",
    text: "电脑",
    is: false,
  },
  {
    icon: "paizhao",
    text: "拍照",
    is: false,
  },
  {
    icon: "redu",
    text: "热度",
    is: false,
  },
  {
    icon: "gouwu",
    text: "购物",
    is: false,
  },
  {
    icon: "dianzan",
    text: "点赞",
    is: false,
  },
  {
    icon: "rili",
    text: "日历",
    is: false,
  },
  {
    icon: "gengduo",
    text: "更多",
    is: false,
  },
  {
    icon: "laji",
    text: "垃圾",
    is: false,
  },
  {
    icon: "hezuo",
    text: "合作",
    is: false,
  },
  {
    icon: "qingli",
    text: "清理",
    is: false,
  },
]

export default function changeItem(preState = initState, actions) {
  const { type, data } = actions
  switch (type) {
    case "queding":
      let llist = JSON.parse(JSON.stringify(data))
      console.log(llist);
      return llist
    default:
      return preState
  }
}