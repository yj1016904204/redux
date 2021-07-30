import React, { Component } from 'react'
import { Button, Grid, Badge } from 'antd-mobile';
import { connect } from 'react-redux'
import { queding } from '../redux/actions';

export class Mos extends Component {
  state = {
    isWrite: false,
    newList: []
  }
  initFirt = () => {
    const llist = JSON.parse(JSON.stringify(this.props.list))
    this.setState({
      newList: llist
    })
  }
  componentDidMount() {
    this.initFirt()
  }
  changeHanle = (value, boole) => {
    return () => {
      if (value === "quxiao") {
        this.initFirt()
      }
      if (value === "queding") {
        const { newList } = this.state
        this.props.queding(newList)
      }
      let newIsWrite = boole
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
          icon: <Badge text={'+'} onClick={this.changeItem(_val)} ><i className={"iconfont icon-" + _val.icon} ></i></Badge>,
          text: _val.text,
        }))} />
          : <Grid data={newList.filter(item => !item.is).map((_val, i) => ({
            icon: <i className={"iconfont icon-" + _val.icon}></i>,
            text: _val.text,
          }))} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.list
})

const mapDispatchToProps = {
  queding,

}

export default connect(mapStateToProps, mapDispatchToProps)(Mos)
