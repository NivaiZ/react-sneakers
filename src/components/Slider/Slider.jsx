import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./Slider.module.scss";

export default function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                <SwiperSlide className="slide__1">
                    <picture>
                        <source srcSet="./img/slider1.png" media="(min-width: 1000px)" />
                        <img src="./img/slider__1.png" alt="slider-1" />
                    </picture>
                    <ul className={styles.slider__list}>

                        <li className={styles.slider__item}>
                            <p className={styles.slider__text}>
                                <span className={styles.slider__text__green}>Stan Smith,</span>
                                <br />Forever!
                            </p>
                        </li>
                        <li className={styles.slider__item}>
                            <a className="button-order" href="#">
                                Купить
                            </a>
                        </li>
                    </ul>
                </SwiperSlide>
                
                <SwiperSlide className="slide__2"><img src="./img/slider1.png" alt="slider__1" />
                    <picture>
                        <source srcSet="./img/slider1.png" media="(min-width: 1000px)" />
                        <img src="./img/slider__1.png" alt="slider-1" />
                    </picture>
                    <ul className={styles.slider__list}>

                        <li className={styles.slider__item}>
                            <p className={styles.slider__text}>
                                <span className={styles.slider__text__green}>Stan Smith,</span>
                                <br />Forever!
                            </p>
                        </li>
                        <li className={styles.slider__item}>
                            <a className="button-order" href="#">
                                Купить
                            </a>
                        </li>
                    </ul>
                </SwiperSlide>

                <SwiperSlide className="slide__3"><img src="./img/slider1.png" alt="slider__1" />
                    <picture>
                        <source srcSet="./img/slider1.png" media="(min-width: 1000px)" />
                        <img src="./img/slider__1.png" alt="slider-1" />
                    </picture>
                    <ul className={styles.slider__list}>

                        <li className={styles.slider__item}>
                            <p className={styles.slider__text}>
                                <span className={styles.slider__text__green}>Stan Smith,</span>
                                <br />Forever!
                            </p>
                        </li>
                        <li className={styles.slider__item}>
                            <a className="button-order" href="#">
                                Купить
                            </a>
                        </li>
                    </ul>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
