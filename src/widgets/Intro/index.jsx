import { ActionButton } from 'src/shared/ui/ActionButton';

import s from './index.module.sass';

export const IntroBlock = () => (
  <div className="container">
    <div className={s.wrapper}>
      <div className={s.imageSection}>
        <img
          src="intro.png"
          alt="Miami Walker"
          className={s.image}
        />
      </div>
      <div className={s.contentSection}>
        <div className={s.title}>
          <p className={s.miami}>MIAMI</p>
          <p className={s.walker}>WALKE<span>R</span></p>
        </div>
        <p className={s.subtitle}>
          Award Wining product designer based in Georgia.
          We create user-friendly interfaces for fast-growing startups.
        </p>
        <ActionButton label='Book A Call' />
      </div>
    </div>
  </div>
)