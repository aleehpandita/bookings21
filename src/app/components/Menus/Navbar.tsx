import React from 'react';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Bus } from '../../assets/icons/bus';
import LogoIcon from '../../assets/icons/logo';
import { Facebook, Instagram } from '../../assets/icons/social-icons';
import { Whatsapp } from '../../assets/icons/whatsapp';
import { LanguageDropdown } from '../Dropdowns/language-dropdown';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();
  const languageActive = router.locale;
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between md:px-2 py-5 lg:py-1 xl:py-1 md:py-1 sm:py-1  navbar-expand-lg bg-blue-900">
        <div className="container px-4  mx-auto flex flex-wrap items-center justify-between  flex-col lg:flex-row ">
          <div className="hidden xl:block md:block lg:block w-3/12  text-white">
            <div className="flex flex-row">
              <span>
                <Facebook />
              </span>
              <span className="px-3">
                <Instagram />
              </span>
            </div>
          </div>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="block md:hidden lg:hidden xl:hidden">
              <Link href="/" locale={languageActive}>
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-white p-2 flex">
                  <LogoIcon />

                  <span className="mx-2 ">CANCUN TRANSFERS VIP</span>
                </a>
              </Link>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="menuIcon">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:opacity-75 md:text-white lg:text-white px-3 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/transportation"
                >
                  <Bus />

                  <span className="ml-2">{t('hotel')}</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <Whatsapp />
                  {' '}
                  <span className="ml-2"> Whatsapp</span>
                </a>
              </li>
              <li className="nav-item">
                <LanguageDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="relative flex items-center justify-around  navbar-expand-lg bg-blue-700">
        <div className="md:block lg:block xl:block">
          <Link href="/" locale={languageActive}>
            <a>
              <Image src="/assets/images/logo-vip.png" height="80" width="230" />
            </a>
          </Link>
        </div>
        <div className="hidden   md:block lg:block xl:block text-yellow-600">
          <span className="text-yellow-500 text-lg font-bold">
            {' '}
            {t('need')}
          </span>
          <span className="text-white text-lg "> 1-888-644-7803 | +52 (998) 848-7200 </span>
        </div>
      </header>
    </>
  );
}
