import React from 'react';

import { Star } from 'assets/icons/star';
import { useTranslation } from 'next-i18next';
// import Image from 'next/image';
// import { serviceCard, serviceCardDiv, serviceCardSecondDiv } from 'utils/Classes';

export default function TransportationBanner() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mx-auto w-full px-5">
          <div className="bg-white flex flex-col rounded-xl shadow-lg">
            <div className="px-12 py-1">
              <h2 className="text-gray-800 text-3xl font-semibold">
                {' '}
                {t('cheaper')}
              </h2>

              <span className="text-lg text-gray-800">{t('well')}</span>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-lg text-gray-800">{t('transp')}</span>
                <p className="tracking-wide">
                  <span className="text-gray-500">$ </span>
                  <span className="text-3xl font-semibold">24.00usd</span>
                  <span className="text-gray-500 font-medium">
                    {' '}
                    {t('upto')}
                  </span>
                </p>
                <p className="text-gray-700 dark:text-gray-700">{t('the1')}</p>
                <div className="flex space-x-3">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="w-3/4 flex flex-col">
                <button
                  type="button"
                  className="py-3 my-2 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white"
                >
                  {t('experience')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
