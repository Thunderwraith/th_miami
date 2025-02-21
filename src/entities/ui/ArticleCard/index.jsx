import ArrowIcon from 'src/assets/svg/arrows/arrows.svg';
import s from './index.module.sass';

export const ArticleItem = ({ id, image, title, description, tag, date }) => (
  <div className={s.article}>
    <img
      alt={tag}
      src={image}
      className={s.preview}
    />
    <div className={s.textBlock}>
      <div className={s.tagBlock}>
        <p>{tag}</p>
        <p>22 May 2023</p>
      </div>
      <p className={s.title}>{title}</p>
      <p className={s.text}>{description}</p>
      <a 
        className={s.link}
        href={`/article/${id}`}
      >
        read more
        <svg width="16" height="16" viewBox="0 0 16 16">
          <use href={`${ArrowIcon}#readArrow`} />
        </svg>
      </a>
    </div>
  </div>
)