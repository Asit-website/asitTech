import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img.jpg";
import Comm from './Comm';
const Home = () => {
    return (
        <>
            <Comm
               name='Grow your business'
                imgsrc={web}
                visit="/search"
                 btnName='search image'
            />
        </>
    )
}

export default Home;