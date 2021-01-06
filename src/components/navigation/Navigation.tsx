import { Component } from 'react'
import NavBar from './NavBar'
import NavItem from './NavItem'

class Navigation extends Component {
  render () {
    return (
      <NavBar>
        <NavItem title="Kells" href="/"/>
        { // eslint-disable-next-line
        }<NavItem title="Project" href='javascript:alert("in construction")' />
      </NavBar>
    )
  }
}

export default Navigation
