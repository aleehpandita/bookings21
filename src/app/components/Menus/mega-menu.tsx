import React from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AirportTerminal } from '../../assets/icons/airport-terminal';
import { Arrivals } from '../../assets/icons/arrivals';
import { Arrow } from '../../assets/icons/arrow';
import { BusBlue } from '../../assets/icons/bus-blue';
import { Coronavirus } from '../../assets/icons/coronavirus';
import { Custom } from '../../assets/icons/custom';
import { Departures } from '../../assets/icons/departures';
import { Exchange } from '../../assets/icons/exchange';
import { Ferry } from '../../assets/icons/ferry';
import { Globe } from '../../assets/icons/globe';
import { Lounge } from '../../assets/icons/lounge';
import { Plane } from '../../assets/icons/plane';
import { Travel } from '../../assets/icons/travel';
import { Visa } from '../../assets/icons/visa';
import { Weather } from '../../assets/icons/weather';
import {
  FindButton,
  FindClass,
  MegaMenuHeading,
  MegaMenuHref,
  MegaMenuLi,
  navbarClass,
  PText,
  py3Flex,
  UlMegaMenu,
} from '../../utils/Classes';

const MegaMenu: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const languageActive = router.locale;
  // const path = router.pathname;
  return (
    <nav className={navbarClass}>
      <div className="container mx-auto flex ">
        <ul className="flex  justify-between w-full">
          {/* MENU 1 */}
          <li className={MegaMenuLi}>
            <a className={MegaMenuHref}>{t('ground')}</a>

            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white z-10">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ">
                <div className="w-full text-gray-900 mb-8">
                  <h2 className="font-bold text-2xl">{t('airport')}</h2>
                  <p>
                    {' '}
                    {t('needride')}
                  </p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center ">
                    <BusBlue />
                    <h3 className={MegaMenuHeading}>{t('cancun')}</h3>
                  </div>
                  <p className="text-gray-900 text-sm text-justify">{t('cancuninfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/transportation" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center px-2 ">
                    <BusBlue />
                    <h3 className={MegaMenuHeading}>{t('playa')}</h3>
                  </div>
                  <p className={PText}>{t('playainfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/transportation-playa-del-carmen" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ..
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className={UlMegaMenu}>
                  <div className="flex items-center px-2">
                    <BusBlue />
                    <h3 className={MegaMenuHeading}>{t('tulum')}</h3>
                  </div>
                  <p className={PText}>{t('tuluminfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/transportation-tulum" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-900 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center px-2">
                    <BusBlue />
                    <h3 className={MegaMenuHeading}>{t('akumal')}</h3>
                  </div>
                  <p className={PText}>{t('cancuninfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/transportation-akumal" locale={languageActive}>
                      <a className={FindClass}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          {/* MENU 2 */}
          <li className={MegaMenuLi}>
            <a href="#" className={MegaMenuHref}>
              {t('flight')}
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white z-10">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ">
                <div className="w-full text-gray-900 mb-8">
                  <h2 className="font-bold text-2xl">{t('flighttitle')}</h2>
                  <p>{t('flightinfo')}</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center ">
                    <Arrivals />
                    <h3 className={MegaMenuHeading}>
                      {' '}
                      {t('arrival')}
                      {' '}
                    </h3>
                  </div>
                  <p className={PText}>{t('flightinfo2')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/arrivals" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Departures />
                    <h3 className={MegaMenuHeading}>{t('departure')}</h3>
                  </div>
                  <p className={PText}>{t('departureinfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/departures" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className={UlMegaMenu}>
                  <div className="flex items-center">
                    <Globe />
                    <h3 className={MegaMenuHeading}>{t('flightsearch')}</h3>
                  </div>
                  <p className={PText}>{t('track')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/flight-search" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-900 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Plane />
                    <h3 className={MegaMenuHeading}>{t('airlinesdir')}</h3>
                  </div>
                  <p className={PText}>
                    {t('airlinesdirinfo')}
                    {' '}
                  </p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/airlines-directory" locale={languageActive}>
                      <a className={FindClass}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </li>

          {/* MENU 3  */}
          <li className={MegaMenuLi}>
            <a href="#" className={MegaMenuHref}>
              {' '}
              {t('terminal')}
              {' '}
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white z-10">
              <div className="container w-full flex flex-wrap justify-between mx-2 ">
                <div className="w-full text-gray-900 mb-8">
                  <h2 className="font-bold text-2xl">{t('cunterminal')}</h2>
                  <p>{t('terminalinfo')}</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <AirportTerminal />
                    <h3 className={MegaMenuHeading}>Terminal 2</h3>
                  </div>
                  <p className={PText}>{t('terminal2')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/terminal-2-cancun-airport" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <AirportTerminal />
                    <h3 className={MegaMenuHeading}>Terminal 3</h3>
                  </div>
                  <p className={PText}>{t('terminal3')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/terminal-3-cancun-airport" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className={UlMegaMenu}>
                  <div className="flex items-center">
                    <AirportTerminal />
                    <h3 className={MegaMenuHeading}>Terminal 4</h3>
                  </div>
                  <p className={PText}>{t('terminal4')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/terminal-4-cancun-airport" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-900 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <AirportTerminal />
                    <h3 className={MegaMenuHeading}>{t('fbotitle')}</h3>
                  </div>
                  <p className={PText}>{t('fbo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/fbo-cancun-airport" locale={languageActive}>
                      <a href="#" className={FindClass}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </li>

          {/* MENU 4  */}
          <li className={MegaMenuLi}>
            <a href="#" className={MegaMenuHref}>
              {' '}
              {t('pax')}
              {' '}
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white z-10">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ">
                <div className="w-full text-gray-900 mb-8">
                  <h2 className="font-bold text-2xl">
                    {t('paxinfo')}
                    {' '}
                  </h2>
                  <p>{t('paxdesc')}</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Lounge />
                    <h3 className={MegaMenuHeading}>{t('viplounge')}</h3>
                  </div>
                  <p className={PText}>{t('vip-lounge-info')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/vip-lounge" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Ferry />
                    <h3 className={MegaMenuHeading}>{t('ferry')}</h3>
                  </div>
                  <p className={PText}>{t('ferry-info')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/ferry" locale={languageActive}>
                      <a href="#" className={FindButton}>
                        {t('find')}
                        ..
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className={UlMegaMenu}>
                  <div className="flex items-center">
                    <Exchange />
                    <h3 className={MegaMenuHeading}>{t('money')}</h3>
                  </div>
                  <p className={PText}>{t('moneyinfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/money-exchange" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-900 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Travel />
                    <h3 className={MegaMenuHeading}>{t('traveltip')}</h3>
                  </div>
                  <p className={PText}>{t('tipinfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/travel-tips" locale={languageActive}>
                      <a href="#" className={FindClass}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </li>

          {/* MENU 5  */}
          <li className={MegaMenuLi}>
            <a href="#" className={MegaMenuHref}>
              {' '}
              {t('travel')}
              {' '}
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white z-10">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ">
                <div className="w-full text-gray-900 mb-8">
                  <h2 className="font-bold text-2xl">{t('travelin')}</h2>
                  <p>{t('travelinfo')}</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Weather />
                    <h3 className={MegaMenuHeading}>{t('cunweather')}</h3>
                  </div>
                  <p className={PText}>{t('weatherinfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <a href="#" className={FindButton}>
                      {t('find')}
                      ...
                    </a>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Custom />
                    <h3 className={MegaMenuHeading}>{t('custom')}</h3>
                  </div>
                  <p className={PText}>{t('custominfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <a href="/customs" className={FindButton}>
                      {t('find')}
                      {' '}
                      ...
                    </a>
                  </div>
                </ul>
                <ul className={UlMegaMenu}>
                  <div className="flex items-center">
                    <Visa />
                    <h3 className={MegaMenuHeading}>{t('visa')}</h3>
                  </div>
                  <p className={PText}>{t('visainfo')}</p>
                  <div className={py3Flex}>
                    <Arrow />
                    <Link href="/visa" locale={languageActive}>
                      <a className={FindButton}>
                        {t('find')}
                        ...
                      </a>
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-900 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <Coronavirus />
                    <h3 className={MegaMenuHeading}>{t('covid')}</h3>
                  </div>
                  <p className={PText}>
                    {t('covid-info')}
                    .
                  </p>
                  <div className={py3Flex}>
                    <Arrow />
                    <a href="#" className={FindClass}>
                      {t('find')}
                      ...
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MegaMenu;
