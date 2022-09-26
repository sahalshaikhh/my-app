import React from 'react'
import Footer from './Footer'
import "./About.css"
import Card from './Card'
// import Common from './Common'

export default function About() {
    return (
        <>
            <div className="text-center">
                <h1 className='Heading my-4 font-bold text-purple-700 inline-block'><span>👽</span> My Other Projects <span>👽</span></h1>
            </div>
            <div className="m-6">
                <Card />
            </div>
            <Footer />
        </>
    )
}
