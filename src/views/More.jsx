import React, { Component } from 'react'
import { Button, Grid, Badge } from 'antd-mobile';

export default class More extends Component {
  state = {
    isWrite: false,
    list: [
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
    ],
    newList: [
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
  }
  changeHanle = (value, boole) => {
    return () => {
      if (value === "queding") {
        const { newList } = this.state
        let llist = JSON.parse(JSON.stringify(newList))
        this.setState({ list: llist })
      }
      if (value === "quxiao") {
        const { list } = this.state
        let llist = JSON.parse(JSON.stringify(list))
        this.setState({ newList: llist })
      }
      let newIsWrite = boole
      console.log(newIsWrite);
      this.setState({ isWrite: newIsWrite })
    }
  }
  changeItem = (item) => {
    return () => {
      const { newList } = this.state
      item.is = !item.is
      let llist = JSON.parse(JSON.stringify(newList))
      this.setState({ newList: llist })
    }
  }

  render() {
    const { isWrite, newList } = this.state
    return (
      <div>
        <div >
          {!isWrite ? <Button className="btn-r" type="primary" size="small" onClick={this.changeHanle("edit", true)}>编辑</Button> :
            <div className="top-one"><Button className="btn-r" size="small" onClick={this.changeHanle("quxiao", false)}>取消</Button>
              <Button type="primary" size="small" className="btn-r" onClick={this.changeHanle("queding", false)}>确定</Button ></div>
          }</div>
        <div style={{ height: "40px", lineHeight: "40px", background: "#fff" }}>我的应用</div>
        {isWrite ? <Grid data={newList.filter(item => item.is).map((_val, i) => ({
          icon: <Badge text={'×'} onClick={this.changeItem(_val)}><i className={"iconfont icon-" + _val.icon}></i></Badge>,
          text: _val.text,
        }))} />
          : <Grid data={newList.filter(item => item.is).map((_val, i) => ({
            icon: <i className={"iconfont icon-" + _val.icon}></i>,
            text: _val.text,
          }))} />}

        <div style={{ height: "40px", lineHeight: "40px", background: "#fff" }}>添加应用</div>

        {isWrite ? <Grid data={newList.filter(item => !item.is).map((_val, i) => ({
          icon: <Badge text={'+'} onClick={this.changeItem(_val)}><i className={"iconfont icon-" + _val.icon} ></i></Badge>,
          text: _val.text,
        }))} />
          : <Grid data={newList.filter(item => !item.is).map((_val, i) => ({
            icon: <i className={"iconfont icon-" + _val.icon}></i>,
            text: _val.text,
          }))} />}



      </div >
    )
  }
}
