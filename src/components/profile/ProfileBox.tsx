import { Component } from 'react';
import '../../styles/ProfileBox.css';

class ProfileBox extends Component {
  render () {
    return (
      <div id="profile_box">
        {this.props.children}
      </div>
    )
  }
}

export default ProfileBox
