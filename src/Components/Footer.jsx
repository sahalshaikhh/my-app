import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    let CurrYear = new Date().getFullYear();
    return (
        <>
            <div className="container ">
                <hr className=' bottomHr container w-20 m-6 md:mx-4' />
                <footer className=''>
                    <div className="Socials">
                        <p className='EndMsg text-center font-[DynaPuff,serif]'>This Website is Created with Love 💖</p>
                        <h5 className='gettingSocial  text-center text-purple-700 font-extrabold'> Let's get Social </h5>
                        <div className="Logos_Social flex items-center justify-center mx-2 my-4">
                            <LinkedInIcon className="LinkedIn" /> &nbsp;<a href='https://www.linkedin.com/in/sahal-shaikh-62942b217' rel="noreferrer" target="_blank"> Linkedin |</a>&nbsp;
                            <GitHubIcon className="Github" /> &nbsp;<a href='https://github.com/sahalshaikhh?tab=repositories' rel="noreferrer" target="_blank"> Github | </a>&nbsp;
                            <InstagramIcon className="Instagram" /> &nbsp;<a href='https://www.instagram.com/accounts/login/' rel="noreferrer" target="_blank">Instagram </a>
                        </div>
                        <p className='text-xs text-center text-gray-600'>Mail us on : shaikhsahal4@gmail.com</p>
                    </div>
                    <p className='year my-2' >All &copy;opyrights reserved for year {CurrYear} 🤞</p>
                </footer>
            </div >
        </>
    )
}
