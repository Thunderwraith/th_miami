import { useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { ArticleItem } from 'src/entities/ui/ArticleCard';
import { ActionButton } from 'src/shared/ui/ActionButton';
import { articlesList } from './data';

import s from './index.module.sass';

export const ArticlesBlock = () => {

  const isDesktop = useMediaQuery('(min-width: 1440px)')

  const displayedList = useMemo(() => articlesList.slice(0, isDesktop ? 6 : 2), [isDesktop])

  return (
    <div className={s.articlesBlock}>
      <div className='container'>
        <div className={s.heading}>
          <div>
            <p className={s.label}>LATEST BLOG</p>
            <p className={s.title}>Check Some of Latest <br /> News & Articles</p>
          </div>
          <ActionButton isReversed label='Load More' />
        </div>
        <div className={s.content}>
          {displayedList.map((article) => <ArticleItem key={article.id} {...article} />)}
        </div>
      </div>
    </div>
  );
}