import React, { useRef, useState } from 'react';
import style from '@/styles/features.module.css'
import Image from 'next/image';
import bottle1 from '@/assets/products/bottle1.png'
import bottle2 from '@/assets/products/bottle2.png'
import bottle3 from '@/assets/products/bottle3.png'
import bottle4 from '@/assets/products/bottle4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Features = () => {
    return (
        <div className={style.feature__container}>
          <div className={style.heading}>
            <h2>Featured Product</h2>
          </div>
          <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          660: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          990: {
            slidesPerView: 3,
            spaceBetween:30
          },
          1100: {
            slidesPerView: 3,
            spaceBetween:60
          },
          1200: {
            slidesPerView: 3,
            spaceBetween:80
          },
          1350: {
            slidesPerView: 4,
            spaceBetween:40
          },
          1500: {
            slidesPerView: 4,
            spaceBetween:80          },
        }}
        modules={[Pagination]}
        className={style.feature__slide}
      >
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle1}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle2}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle3}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle4}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle1}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle2}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle3}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
            <SwiperSlide className={style.feature}>
                <div className={style.image__wrapper}>
                <Image src={bottle4}
                quality={100} 
                alt='banner' className={style.image}></Image>
                </div>
                <h4>Fibre Pack</h4>
                <p>$30</p>
                <button className='button'>Shop Now</button>
            </SwiperSlide>
      </Swiper>
          {/* <div className={style.feature__wrapper}>
            
            
          </div> */}
        </div>
    );
};

export default Features;