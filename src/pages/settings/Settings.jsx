import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitel">Update Your Account</span>
                <span className="settingsDeleteTitel">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingspp">
                <img className="settingsImg" src={require('../img/settings1.jpg')} alt="" />
                <label htmlFor="fileinput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileinput" style={{display:'none'}}/>
                </div>
                  <label >Username</label>
                  <input type="text" placeholder="asdf" />

                  <label >Emali</label>
                  <input type="email" placeholder="asdf@gmail.com" />

                  <label >Password</label>
                  <input type="password"  />
                  <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
