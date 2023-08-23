import React from 'react';
import Image from 'next/image';
import style from '@/styles/banner.module.css'
import bannerBg from '@/assets/banner-img.png'

const Banner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner__img}>
                <Image 
                src={bannerBg} 
                layout='fill'
                sizes='100vw'
                quality={100} 
                alt='banner' 
                className={style.image}>
                </Image>
            </div>
            <div className={style.banner__content}>
                <h2>HAIR - BUILDING FIBRE FOR <span>THICKER, FULLER</span> HAIR</h2>
                <p>Achieve safe and effective coverage for sparse, thinning hair for men and women, and a fuller looking scalp in 30 seconds with our safe, natural, easy to apply hair fibers</p>
                <button className='button'>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;