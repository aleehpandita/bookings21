import React from 'react';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  orangeDiv, serviceCard, serviceCardDiv, serviceCardSecondDiv,
} from 'utils/Classes';

export default function ServicesBanner() {
  const router = useRouter();
  const SuburbanImage = 'https://cancunairport.s3-us-west-2.amazonaws.com/cancun-transfers-suburban.jpg';
  const SprinterImage = 'https://cancunairport.s3-us-west-2.amazonaws.com/sprinter.jpg';
  const VanImage = 'https://cancunairport.s3-us-west-2.amazonaws.com/cancun-transfers-van.jpg';

  const handleClick = (href: string) => {
    router.push(href);
  };
  const { t } = useTranslation('common');
  return (
    <>
      <div className="md:flex lg:flex xl:flex w-full md:-mt-5 lg:-mt-5 xl:-mt-5 justify-center">
        <div
          role="button"
          tabIndex={0}
          className={serviceCard}
          onClick={() => {
            handleClick('/');
          }}
          onKeyDown={() => {
            handleClick('/');
          }}
        >
          <div className="absolute opacity-0  w-full  mx-auto fd-sh group-hover:opacity-1">
            <div className="pt-8 text-center">
              <button
                type="button"
                className="text-center rounded-lg p-4  text-gray-700 font-bold text-lg"
              >
                {t('learn')}
              </button>
            </div>
          </div>

          <div className={serviceCardDiv}>
            <div className={serviceCardSecondDiv} />
            <Image className="fd-cl relative" height="120" width="150" src={SuburbanImage} alt="" />
          </div>

          <div className="relative text-gray-900 px-6 pb-6">
            <span className="block opacity-75 -mb-1 whitehover">Airport to Hotel Zone</span>
            <div className="flex justify-between whitehover">
              <span className="block font-semibold text-xl">
                VIP
                <br />
                {' '}
                Transportation
              </span>
              <span className={orangeDiv}>$36.00</span>
            </div>
          </div>
        </div>

        <div
          role="button"
          className={serviceCard}
          tabIndex={0}
          onClick={() => {
            handleClick('/');
          }}
          onKeyDown={() => {
            handleClick('/');
          }}
        >
          <div className="absolute opacity-0 w-full mx-auto fd-sh group-hover:opacity-1">
            <div className="pt-8 text-center">
              <button
                type="button"
                className="text-center rounded-lg p-4 text-gray-700 font-bold text-lg"
              >
                {t('learn')}
              </button>
            </div>
          </div>
          <div className={serviceCardDiv}>
            <div className={serviceCardSecondDiv} />
            <Image className="relative fd-cl" height="120" width="150" src={SprinterImage} alt="" />
          </div>
          <div className="relative text-gray-900 px-6 pb-6">
            <span className="block opacity-75 -mb-1 whitehover">Airport to Hotel Zone</span>
            <div className="flex justify-between whitehover">
              <span className="block font-semibold text-xl">
                Shuttle
                <br />
                {' '}
                Transportation
              </span>
              <span className={orangeDiv}>$36.00</span>
            </div>
          </div>
        </div>

        <div
          role="button"
          className={serviceCard}
          tabIndex={0}
          onClick={() => {
            handleClick('/');
          }}
          onKeyDown={() => {
            handleClick('/');
          }}
        >
          <div className="absolute opacity-0 w-full mx-auto fd-sh group-hover:opacity-1">
            <div className="pt-8 text-center">
              <button
                type="button"
                className="text-center rounded-lg p-4  text-gray-700 font-bold text-lg"
              >
                {t('learn')}
              </button>
            </div>
          </div>
          <div className={serviceCardDiv}>
            <div className={serviceCardSecondDiv} />
            <Image className="relative fd-cl" height="120" width="150" src={VanImage} alt="" />
          </div>
          <div className="relative text-gray-900 px-6 pb-6 ">
            <span className="block opacity-75 -mb-1  whitehover">Airport to Hotel Zone</span>
            <div className="flex justify-between whitehover">
              <span className="block font-semibold text-xl">
                Standard
                <br />
                {' '}
                Transportation
              </span>
              <span className={orangeDiv}>$36.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
