/* import React, { Component } from 'react'

import { Grid, Badge } from 'antd-mobile';


const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: <Badge text={'3'}><i className="iconfont icon-dianying"></i></Badge>,
  // text: <Badge text={'3'}>你好呀</Badge>,
  text: `name${i}`,
}));

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="sub-title">首页 </div>
        <Grid data={data} />
      </div>
    )
  }
}
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'antd-mobile';
export class Home extends Component {
  state = {
    newList: []
  }
  initFirt = () => {
    const llist = JSON.parse(JSON.stringify(this.props.list))
    llist.push(
      {
        icon: "arrow-right",
        text: "加载更多",
        is: true,
      })

    this.setState({
      newList: llist
    })
  }
  changRouter = (val) => {
    if (val.text === "加载更多") {
      this.props.history.push("/mos")
    }
  }
  componentDidMount() {
    this.initFirt()
  }
  render() {
    const { newList } = this.state
    return (
      <div>
        <div className="sub-title">首页 </div>
        <Grid data={newList.filter(item => item.is).map((_val, i) => {

          return {
            icon: <i className={"iconfont icon-" + _val.icon}></i>,
            text: _val.text,
          }
        })} onClick={this.changRouter} />


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.list
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
