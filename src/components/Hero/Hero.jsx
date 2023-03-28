import React from "react"
import "./hero.scss"
import bike from "../../assets/hero.png"
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai"

const Hero = () => {
  return (
    <section class='hero'>
      <div class='container'>
        <div class='hero__items'>
          <div class='hero__item'>
            <h1 class='hero__title'>
              LAMERE <span>cYCLES</span>
            </h1>
            <p class='hero__text'>
              We build only the best, customized to your exacting demands
            </p>
            <a href='#' class='hero__link'>
              SHOP NOW
            </a>
          </div>
          <div class='hero__image'>
            <img src={bike} alt='img' class='hero__img img' />
          </div>
        </div>
        <div class='hero__social'>
          <a href='#' class='social__link'>
            <AiFillInstagram size={25} color={"white"} />
          </a>
          <a href='#' class='social__link'>
            <AiOutlineGoogle size={25} color={"white"} />
          </a>
          <a href='#' class='social__link'>
            <AiFillLinkedin size={25} color={"white"} />
          </a>
          <a href='#' class='social__link'>
            <AiOutlineTwitter size={25} color={"white"} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
