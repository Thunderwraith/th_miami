import Quotation from 'src/assets/svg/quotation.svg';
import Star from 'src/assets/svg/rateStar.svg';

import s from './index.module.sass';

export const TestimonialsCard = ({ id, description, rate, customer }) => (
  <div className={s.testimonialsCard}>
    <svg width="40" height="40" viewBox="0 0 40 40">
      <use href={`${Quotation}#quotation`} />
    </svg>
    <p className={s.label}>{description}</p>
    <div className={s.footer}>
      <div className={s.customer}>
        <img
          src={customer.image}
          className={s.customerImage}
          alt={customer.firstName + ' ' + customer.lastName}
        />
        <p className={s.name}>{customer.firstName + ' ' + customer.lastName}</p>
      </div>
      <div className={s.rateWrapper}>
        <svg width="22" height="21" viewBox="0 0 22 21">
          <use href={`${Star}#star`} />
        </svg>
        <p className={s.rate}>{rate}</p>
      </div>
    </div>
  </div>
)