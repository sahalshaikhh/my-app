import React from 'react'
import guessingGame from '../Images/guessingGame.png'
import Flipkart from '../Images/Flipkart.png'
import Portfolio from '../Images/Portfolio.png'
import ShananPortfolio from '../Images/ShananPortfolio.png'
import ToDoList from '../Images/ToDoList.png'
import TextUtiles from '../Images/TextUtiles.png'



export default function Card() {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={guessingGame} class="card-img-top mb-[23px]" alt="img" />
                        <div class="card-body">
                            <h5 class="card-title font-bold">Guessing Game</h5>
                            <p class="card-text">This Game let's User guess the Number anywhere between 0-100 and on right guess User gets a Congratulation</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/Guessing-Game/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Flipkart} class="card-img-top" alt="Flipkart" />
                        <div class="card-body">
                            <h5 class="card-title font-bold">FlipKart-Clone</h5>
                            <p class="card-text">This Website is a Clone front-end of well known E-Commerce website FlipKart.</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/Flipkart_Clone/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Portfolio} class="card-img-top" alt="Portfolio" />
                        <div class="card-body">
                            <h5 class="card-title font-bold ">Portfolio-Website</h5>
                            <p class="card-text">This Website is Laptop Friendly only it's a portfolio Website of my Own.</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/silveroak-uni-profile-/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ToDoList} class="card-img-top mb-[15px]" alt="List" />
                        <div class="card-body">
                            <h5 class="card-title font-bold">To-Do List</h5>
                            <p class="card-text">Here User can Note their ToDo's of the Day or can make any Notes as per their Need.</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/Guessing-Game/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ShananPortfolio} class="card-img-top" alt="ShananPortfolio" />
                        <div class="card-body">
                            <h5 class="card-title font-bold">Shanan's Portfolio</h5>
                            <p class="card-text">Shanan is one of my School Friend Currently Persuing IMBA from Sreyarth Collage and this website is for him.</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/Shanan_Portfolio/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={TextUtiles} class="card-img-top mb-[15px]" alt="TextUtiles" />
                        <div class="card-body">
                            <h5 class="card-title font-bold">TextUtiles</h5>
                            <p class="card-text">TextUtils let's you Change you sentences into LowerCase | UpperCase | Underline... and Manymore.</p>
                            <a target="_blank" without rel="noreferrer" href="https://sahalshaikhh.github.io/Guessing-Game/" class="btn btn-outline-primary sm:btn-sm md:btn-sm text-center">Try Now</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
