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
            <h1
              class='hero__title'
              data-aos='fade-right'
              data-aos-duration='2000'
            >
              LAMERE{" "}
              <span data-aos='fade-right' data-aos-duration='1500'>
                cYCLES
              </span>
            </h1>
            <p class='hero__text'>
              We build only the best, customized to your exacting demands
            </p>
            <a href='#' class='hero__link'>
              SHOP NOW
            </a>
          </div>
          <div class='hero__image'>
            <img
              src={bike}
              alt='img'
              class='hero__img img'
              data-aos='fade-left'
              data-aos-duration='2000'
            />
          </div>
        </div>
        <div class='hero__social'>
          <AiFillInstagram size={25} color={"white"} />

          <AiOutlineGoogle size={25} color={"white"} />

          <AiFillLinkedin size={25} color={"white"} />

          <AiOutlineTwitter size={25} color={"white"} />
        </div>
      </div>
    </section>
  )
}

export default Hero
