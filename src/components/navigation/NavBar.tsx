import { Component } from 'react'
import '../../styles/NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <ul id="navbar">
        {this.props.children}
      </ul>
    )
  }
}

export default NavBar
