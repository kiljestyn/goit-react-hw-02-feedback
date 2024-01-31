import css from "./notificiations.module.css"
import { Component } from "react"

class Notification extends Component {
    state = {};
    render() {
      return <h2 className={css.title}>{this.props.message}</h2>;
    }
  }
  
  export default Notification;