import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
return (
    <div className='bodyhome'>
    <div className='main-image'>
        <div className='containerhome'>
            <h1 data-aos="fade-up" data-aos-duration="2500"><span className='king'>KING OF <span className='gamingg'>GAMING</span></span></h1>
            <Link to='/categoria/procesadores'style={{ textDecoration: 'none' }}>    
                <button className="btt draw-border" data-aos="fade-down" data-aos-duration="3000">CPU</button>
            </Link>
            <Link to='/categoria/placasdevideo' style={{ textDecoration: 'none' }}>
                <button className="btt draw-border" data-aos="fade-down" data-aos-duration="3000">GPU</button>
            </Link>
            <Link to='/categoria/motherboards' style={{ textDecoration: 'none' }}>
                <button className="btt draw-border" data-aos="fade-down" data-aos-duration="3000">MOBO</button>
            </Link>
        </div>
    </div>
    </div>
)
}

export default Home