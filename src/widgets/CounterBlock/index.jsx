import { CounterItem } from 'src/entities/ui/CounterCard';
import { counterList } from './data';

import s from './index.module.sass';

export const CounterBlock = () => (
  <div className='container'>
    <div className={s.wrapper}>
      {counterList.map(item => 
        <CounterItem
          key={item.id}
          end={item.end}
          label={item.label}
          suffix={item.suffix}
        />
      )}
    </div>
  </div>
)