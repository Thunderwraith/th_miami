import ArrowIcon from 'src/assets/svg/arrows/arrows.svg';
import Logo from 'src/assets/svg/logo.svg';
import SocialIcon from 'src/assets/svg/socials/socials.svg';
import s from './index.module.sass';

export const Cooperation = () => {
  return (
    <div className={s.cooperationBlock}>
      <div className='container'>
        <div className={s.content}>
          <p className={s.label}>Have you project in mind?</p>
          <p className={s.title}>Let’s Make Something <br /> Great Together!</p>
          <button className={s.contact}>
            <p>contact with us</p>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              className={s.contactArrow}
            >
              <use href={`${ArrowIcon}#contact-arrow`} />
            </svg>
          </button>
          <a className={s.logo} href="/">
            <svg width="72" height="52" viewBox="0 0 72 52"><use href={`${Logo}#logo`} /></svg>
          </a>
          <div className={s.socials}>
            <a href="https://facebook.com">
              <svg className={s.socialIcon} width="18" height="36" viewBox="0 0 18 36">
                <use href={`${SocialIcon}#facebook`} />
              </svg>
              <svg className={s.socialIconMobile} width="14" height="26" viewBox="0 0 14 26">
                <use href={`${SocialIcon}#facebook-mobile`} />
              </svg>
            </a>
            <a href="https://linkedin.com">
              <svg className={s.socialIcon} width="38" height="36" viewBox="0 0 38 36">
                <use href={`${SocialIcon}#linkedin`} />
              </svg>
              <svg className={s.socialIconMobile} width="30" height="26" viewBox="0 0 30 26">
                <use href={`${SocialIcon}#linkedin-mobile`} />
              </svg>
            </a>
            <a href="https://instagram.com">
              <svg className={s.socialIcon} width="36" height="36" viewBox="0 0 36 36">
                <use href={`${SocialIcon}#instagram`} />
              </svg>
              <svg className={s.socialIconMobile} width="29" height="26" viewBox="0 0 29 26">
                <use href={`${SocialIcon}#instagram-mobile`} />
              </svg>
            </a>
            <a href="https://bereal.com">
              <svg className={s.socialIcon} width="58" height="36" viewBox="0 0 58 36">
                <use href={`${SocialIcon}#bereal`} />
              </svg>
              <svg className={s.socialIconMobile} width="45" height="26" viewBox="0 0 45 26">
                <use href={`${SocialIcon}#bereal-mobile`} />
              </svg>
            </a>
            <a href="https://dribbble.com">
              <svg className={s.socialIcon} width="36" height="36" viewBox="0 0 36 36">
                <use href={`${SocialIcon}#dribbble`} />
              </svg>
              <svg className={s.socialIconMobile} width="29" height="26" viewBox="0 0 29 26">
                <use href={`${SocialIcon}#dribbble-mobile`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}