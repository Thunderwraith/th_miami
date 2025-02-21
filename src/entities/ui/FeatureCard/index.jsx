import s from './index.module.sass';

export const FeatureCard = ({ title, subtitle, image }) => {
  return (
    <div className={s.card}>
      <img className={s.picture} src={image} alt={title} />
      <p className={s.title}>{title}</p>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  );
};