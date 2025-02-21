import clsx from 'clsx';
import s from './index.module.sass';

export const ActionButton = ({ isReversed, label, ...other }) => (
  <button
    {...other}
    className={clsx(s.actionBtn, isReversed && s.reversed)}
  >
    <div className={s.layer1}>
      <p className={s.label}>{label}</p>
    </div>
    <div className={s.layer2} />
  </button>
)