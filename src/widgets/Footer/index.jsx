import s from './index.module.sass';

export const Footer = () => (
  <footer className={s.footer}>
    <div className="container">
      <div className={s.wrapper}>
        <p className={s.label}>© 2023 Ideapeel Inc. All Rights Reserved</p>
        <ul className={s.list}>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)