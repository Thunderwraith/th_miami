import { Drawer } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Burger from 'src/assets/svg/burger.svg';
import Logo from 'src/assets/svg/logo.svg';
import LogoMobile from 'src/assets/svg/logo/mobileLogo.svg';
import { ActionButton } from 'src/shared/ui/ActionButton';
import { menuList } from './data';

import s from './index.module.sass';


export const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className={clsx(s.header, isScrolled && s.scrolled)}>
      <div className='container'>
        <div className={s.wrapper}>
          <a href="/" className={clsx(s.logoMobile, s.isActive)}>
            <svg width="58" height="42" viewBox="0 0 58 42">
              <use href={`${LogoMobile}#mobile-logo`} />
            </svg>
          </a>
          <a href="/" className={clsx(s.logoDesktop, s.isActive)}>
            <svg width="72" height="52" viewBox="0 0 72 52">
              <use href={`${Logo}#logo`} />
            </svg>
          </a>
          <button className={s.burger} onClick={toggleDrawer}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use href={`${Burger}#burger`} />
            </svg>
          </button>
          <ul className={s.list}>
            {menuList.map(({ title, href }, index) =>
              <li key={index}>
                <a className={s.menuLink} href={href}>{title}</a>
              </li>
            )}
            <li style={{ marginLeft: '18px' }}>
              <ActionButton
                label='Contact Me'
                isReversed={isScrolled}
              />
            </li>
          </ul>
        </div>
      </div>

      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div className={s.mobileMenuWrapper}>
          <a href="/" className={s.isActive}>
            <svg width="58" height="42" viewBox="0 0 58 42">
              <use href={`${LogoMobile}#mobile-logo`} />
            </svg>
          </a>
          <ul className={s.mobileMenu}>
            {menuList.map(({ title, href, icon }, index) =>
              <li key={index}>
                <a className={s.mobileLink} href={href}>
                  {icon}
                  {title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Drawer>

    </header>
  )
}