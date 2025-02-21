import { FeatureCard } from 'src/entities/ui/FeatureCard';
import { ActionButton } from 'src/shared/ui/ActionButton';
import { featuresList } from './data';

import s from './index.module.sass';

export const FeaturesBlock = () => (
  <div className="container">
    <div className={s.wrapper}>
      <div>
        <p className={s.label}>FEATURES</p>
        <p className={s.title}>Giving Your Business <br /> Some Great Ideas</p>
        <p className={s.subtitle}>
          Every designer needs the right tools to do the perfect job. <br />
          Thankfully, we can do that. I design products that are <br />
          more than pretty. I make them shippable and usable.
        </p>
        <ActionButton label='Contact US' />
      </div>
      <div className={s.cardsWrapper}>
        {featuresList.map((card, index) => 
          <FeatureCard
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        )}
      </div>
    </div>
  </div>
)