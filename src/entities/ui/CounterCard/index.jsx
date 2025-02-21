import CountUp from 'react-countup';

import s from './index.module.sass';

export const CounterItem = ({ end, suffix, label }) => (
  <div className={s.countCard}>
    <CountUp
      end={end}
      duration={2.75}
      suffix={suffix}
      enableScrollSpy
      className={s.text}
    />
    <p className={s.label}>{label}</p>
  </div>
)