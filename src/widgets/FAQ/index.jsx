import { Accordion } from '@szhsin/react-accordion';
import { AccordionItem } from 'src/shared/ui/AccordionItem';
import { questionsList } from './data';

import s from './index.module.sass';

export const FaqBlock = () => (
  <div className={s.faqBlock}>
    <div className='container'>
      <div className={s.wrapper}>
        <div className={s.part}>
          <p className={s.label}>FAQs</p>
          <p className={s.title}>Be Kind to Your Mind <br /> Question & Answer</p>
          <p className={s.text}>
            All Your Qustions are in A document, in question and answer format,
            that introduces newcomers to a topic or answers common questions.
          </p>
        </div>
        <div className={s.part}>
          <Accordion
            transition
            allowMultiple
            className={s.accordion}
            transitionTimeout={250}
          >
            {questionsList.map(item => (
              <AccordionItem
                key={item.id}
                header={item.title}
                className={s.accordionItem} 
              >
                <div className={s.content}>
                  <p>{item.description}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
)