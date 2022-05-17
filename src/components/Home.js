import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
return (
    <div className='bodyhome'>
    <div className='main-image'>
        <div className='containerhome'>
            <h1><span className='king'>KING OF <span className='gamingg'>GAMING</span></span></h1>
            <Link to='/categoria/procesadores'style={{ textDecoration: 'none' }}>    
                <button className="btt draw-border">CPU</button>
            </Link>
            <Link to='/categoria/placasdevideo' style={{ textDecoration: 'none' }}>
                <button className="btt draw-border">GPU</button>
            </Link>
            <Link to='/categoria/motherboards' style={{ textDecoration: 'none' }}>
                <button className="btt draw-border">MOBO</button>
            </Link>
        </div>
    </div>
    </div>
)
}

export default Home