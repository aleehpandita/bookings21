import React from 'react';

import FAQ from 'components/faq';
import Rates from 'components/rates';
import { useTranslation } from 'next-i18next';

import FacilitiesIncluded from '../facilities';

type TabProps = {
  tab: string;
};

const Cancun = (props: TabProps) => {
  const { t } = useTranslation('cancun');
  const tabP = props.tab;
  switch (tabP) {
    case 'information':
      return (
        <div>
          <h1 className="text-xl font-bold">
            {' '}
            {t('title')}
          </h1>
          <p className="mb-2">{t('title2')}</p>
          <p className="text-justify mb-2">{t('text1')}</p>
          <p className="text-justify mb-2">
            <span className="font-bold">
              {' '}
              {t('bold1')}
            </span>
            {' '}
            {t('text2')}
          </p>
          <FacilitiesIncluded />
          <p className="text-justify mb-2 mt-4">
            {' '}
            {t('text3')}
          </p>
          <p className="text-justify mb-2 mt-4">
            {' '}
            {t('text4')}
          </p>
          <p className="text-justify mb-2 mt-4">
            {' '}
            {t('text5')}
          </p>
        </div>
      );
    case 'rates':
      return <Rates place="cancun" />;
    case 'faqs':
      return <FAQ />;
    default:
      return <p>holiii</p>;
  }
};
export default Cancun;
