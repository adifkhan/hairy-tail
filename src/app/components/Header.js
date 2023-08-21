'use client';

import React, { useState } from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import style from '@/styles/header.module.css';
import Link from 'next/link';
import { RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri';

const Header = () => {
  const [toggleSearch, setToggelSearch] = useState(false);
  console.log(toggleSearch);
  return (
    <header className={style.header}>
      <div className='header__img'>
        <Image src={logo} width={150} height={30} alt='logo'></Image>
      </div>
      <nav className={style.navbar}>
        <div className={style.links}>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Shop</Link>
          <Link href='/'>Salons</Link>
          <Link href='/'>FAQ</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={style.cart}>
          <RiShoppingCart2Line />
          <span className={style.badge}>2</span>
        </div>
        <div className={style.search__box}>
          <input
            type='text'
            name='search'
            placeholder='search...'
            className={toggleSearch ? `${style.active}` : `${style.input}`}
          />
          <div
            className={style.search}
            onClick={() => {
              setToggelSearch(!toggleSearch);
            }}
          >
            <RiSearchLine />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
