import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import NavBarr from './NavBarr';
import Footer from './Footer';

export default function Common(props) {
    return (
        <>
            <div className="container flex lg:flex lg:justify-around " >
                <div className="Main-intro">
                    <div className='m-6 w-[8rem] md:w-auto lg:w-auto'>
                        <h1 className="mt-[3rem] text-sm lg:text-[3rem] lg:mt-[8rem]">{props.heading} <br />
                            <hr className='lg: my-6' />
                            <span>  I'm  <span className='Name text-justify font-extrabold text-purple-700'> Sahal Shaikh</span></span>
                        </h1>
                        <p className='text-start text-[#27271c] lg:my-12 lg:text-2xl lg:w-[34rem]'>{props.title}</p>
                        <div className="Know-More-BTN ">
                            <Button variant="contained" color="secondary" size="small" >
                                <Link className='LinkToAbout' to={"/about"}>
                                    Know More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img className='bg-white mt-44 lg:mt-[8rem] w-[34rem] md:w-[50vw] md:my-20 lg:w-[63vh]' src={props.pic} alt="Developer" />
                </div>
            </div >
            <Footer />
        </>
    )
}
