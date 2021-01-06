import { Component } from 'react'
import NavItemProps from '../../props/NavItemProps'
import '../../styles/NavItem.css'

class NavItem extends Component<NavItemProps> {
    render () {
        return <li><a href={this.props.href}>{this.props.title}</a></li>
    }
}

export default NavItem
