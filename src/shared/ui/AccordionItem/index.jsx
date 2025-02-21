import { AccordionItem as Item } from '@szhsin/react-accordion';
import ArrowIcon from 'src/assets/svg/arrows/arrows.svg';

import s from './index.module.sass';

export const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <svg className={s.accordionArrow} width="24" height="24" viewBox="0 0 24 24">
          <use href={`${ArrowIcon}#accordion-arrow`} />
        </svg>
        <svg className={s.accordionArrowMobile} width="8" height="5" viewBox="0 0 8 5">
          <use href={`${ArrowIcon}#accordion-mobile-arrow`} />
        </svg>
      </>
    }
    buttonProps={{
      className: ({ isEnter }) => `${isEnter && s.btnExpanded}`,
    }}
  />
)