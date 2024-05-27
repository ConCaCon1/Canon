import React from 'react';
import './Sidebar.css';
import vtcnow from '../../images/vtcnow.png';
import vantung from '../../images/vantung.jpg';
import lamvlog from '../../images/lamvlog.jpg';
import pic from '../../img/aaaa.svg';
import pic1 from '../../img/img1.svg';
import pic2 from '../../img/img2.svg';
import pic3 from '../../img/img3.svg';
import pic4 from '../../img/img4.svg';
import pic5 from '../../img/img5.svg';
import pic6 from '../../img/img6.svg';
import pic7 from '../../img/img7.svg';
import pic8 from '../../img/img8.svg';
import pic9 from '../../img/img9.svg';
import pic10 from '../../img/img10.svg';
import pic11 from '../../img/img11.svg';
import pic12 from '../../img/img12.svg';
import pic13 from '../../img/img13.svg';
import pic14 from '../../img/img14.svg';
import pic15 from '../../img/img15.svg';
import pic16 from '../../img/img16.svg';
import pic17 from '../../img/img17.svg';
import pic21 from '../../img/img21.svg';
import pic22 from '../../img/img22.svg';
import pic23 from '../../img/img23.svg';
import pic24 from '../../img/img24.svg';
import pic25 from '../../img/img25.svg';
import pic26 from '../../img/img26.svg';
import pic28 from '../../img/img28.svg';
const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={pic7} alt="" /><p>Home</p>
        </div>
        <div className="side-link">
          <img src={pic} alt="" /><p>Shorts</p>
        </div>
        <div className="side-link">
          <img src={pic8} alt="" /><p>Subscriptions</p>
        </div>
        <hr />
        <h3 style={{ marginTop: "15px" }}>You<img style={{ marginLeft: "15px" }} src={pic28} alt="" /></h3>
        <br />
        <div className="side-link">
          <img src={pic1} alt="" /><p>Your channel</p>
        </div>
        <div className="side-link">
          <img src={pic2} alt="" /><p>History</p>
        </div>
        <div className="side-link">
          <img src={pic3} alt="" /><p>Playlists</p>
        </div>
        <div className="side-link">
          <img src={pic4} alt="" /><p>Your videos</p>
        </div>
        <div className="side-link">
          <img src={pic5} alt="" /><p>Watch later</p>
        </div>
        <div className="side-link">
          <img src={pic6} alt="" /><p>Like Videos</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscriptions</h3>
        <div className="side-link">
          <img src={vtcnow} alt="" /><p>VTC NOW</p>
        </div>
        <div className="side-link">
          <img src={vantung} alt="" /><p>Van Tung</p>
        </div>
        <div className="side-link">
          <img src={lamvlog} alt="" /><p>Lam Vlog</p>
        </div>
        <div className="side-link">
          <img src={pic9} alt="" /><p>All Subscriptions</p>
        </div>
        <div className="side-link">
          <img src={pic10} alt="" /><p>Show more</p>
        </div>
        <hr />
        <div className='subscribed-list'>
          <h3>Explore</h3>
        </div>
        <div className="side-link">
          <img src={pic11} alt="" /><p>Trending</p>
        </div>
        <div className="side-link">
          <img src={pic12} alt="" /><p>Music</p>
        </div>
        <div className="side-link">
          <img src={pic13} alt="" /><p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={pic14} alt="" /><p>News</p>
        </div>
        <div className="side-link">
          <img src={pic15} alt="" /><p>Sports</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>More from Youtube</h3>
        </div>
        <div className="side-link">
          <img src={pic16} alt="" /><p>Youtube Premium</p>
        </div>
        <div className="side-link">
          <img src={pic17} alt="" /><p>Youtube Studio</p>
        </div>
        <div className="side-link">
          <img src={pic21} alt="" /><p>Youtube Music</p>
        </div>
        <div className="side-link">
          <img src={pic22} alt="" /><p>Youtube Kids</p>
        </div>
        <hr />
        <br />
        <div className="side-link">
          <img src={pic23} alt="" /><p>Settings</p>
        </div>
        <div className="side-link">
          <img src={pic24} alt="" /><p>Report History</p>
        </div>
        <div className="side-link">
          <img src={pic25} alt="" /><p>Help</p>
        </div>
        <div className="side-link">
          <img src={pic26} alt="" /><p>Send feedback</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
