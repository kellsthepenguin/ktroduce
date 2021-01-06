import { Component } from 'react';
import Navigation from './navigation/Navigation'
import '../styles/App.css'
import ProfileImg from './profile/ProfileImg';
import ProfileBox from './profile/ProfileBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <ProfileBox>
          <ProfileImg />
          <strong id="kells">Kells</strong>
          <br />
          <a href="https://github.com/jwkim101201" className="community_btn">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </ProfileBox>
        <p id="imgFromTenor">
          <a href="https://media.tenor.com/images/34738954f4a5629a60cb5a55d125cbcc/tenor.gif">Image</a> from Tenor
        </p>
      </div>
    )
  }
}

export default App
