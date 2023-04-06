import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          {/* <h2 className="sidebarTitle">ABOUT ME</h2> */}
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="about" src={require('../img/about.jpg')} alt=""  />

           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid odio, 
             magni quam dolore harum ipsa ad fugiat placeat earum id    </p> 
        
        </div>
        <div className="sidebarItem">
          {/* <h2 className="sidebarTitle">CATEGORIES</h2> */}
          <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
             <li className="sidebarListItem">Life </li>
             <li className="sidebarListItem">Music </li>
             <li className="sidebarListItem">Style </li>
             <li className="sidebarListItem">Sport</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">Cinema</li>
           </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle"> FOLLOW US</span>
          <div className="sidebarSocial">
              <i className="sidebarIcon  fa-brands fa-square-facebook"></i>
              <i className="sidebarIcon  fa-brands fa-square-twitter"></i>
              <i className="sidebarIcon  fa-brands fa-square-pinterest"></i>
              <i className="sidebarIcon  fa-brands fa-square-instagram"></i>
          </div>
        </div>

    </div>
  )
}
