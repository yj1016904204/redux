import React from "react"
import "./item.css"

export default class Item extends React.Component {
  state = {
    items: [
      { id: "001", name: "Menu1", prop: [] },
      { id: "002", name: "Menu2", prop: [] },
      { id: "003", name: "Menu3", prop: [{ MenuItem: "MenuItem1" }, { MenuItem: "MenuItem2" }, { MenuItem: "MenuItem3" }] },
      { id: "004", name: "Menu4", prop: [{ MenuItem: "MenuItem1" }, { MenuItem: "MenuItem2" }, { MenuItem: "MenuItem3" }] },
      { id: "005", name: "Menu5", prop: [] },
    ],
    isActive: "001"
  }
  changeActive = (index) => {
    return () => {
      this.setState({ isActive: index })
    }
  }
  render() {
    const { items, isActive } = this.state
    return (
      <div className="wrap">
        {
          items.map(item => {
            return <div key={item.id} onClick={this.changeActive(item.id)} className={isActive === item.id ? "active box" : "box"}>{item.name}{item.prop.map((item1, index) => { return <div key={index} className="list">{item1.MenuItem}</div> })}</div>
          })
        }
      </div>
    )
  }
}