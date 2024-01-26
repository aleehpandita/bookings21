import React, {
  useState, useRef, useEffect,
} from 'react';

import { Transition } from '@tailwindui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import EnFlag from '../../assets/icons/en-flag';
import EsFlag from '../../assets/icons/es-flag';

export const LanguageDropdown: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const languageActive = router.locale;
  const [show, setShow] = useState(false);
  const container = useRef<any>(null);
  const esp = t('es');
  const ing = t('en');
  const rus = t('ru');
  const path = router.pathname;
  // const ChangeLanguage = () => {
  // const currentQuery = router.query
  // console.log(path + '/' + currentQuery)
  // router.push({
  //   pathname: '/product/[pid]',
  //   query: { pid: post.id },
  // })
  // };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (container && container !== null) {
        const cur = container.current;
        if (cur && !cur.contains(event.target)) {
          // close all dropdowns
          if (!show) return;
          setShow(false);
        }
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return (
    <div ref={container} className="w-full -mt-2 md:mt-0 py-auto text-white">
      <button
        className="flex  w-full "
        onClick={() => setShow(!show)}
      >
        { languageActive === 'en'
          ? (
            <div className="flex  lg:mt-0 md:mt-0 mt-2">
              <label className="flex-auto md:px-2 xl:px-2 px-3 lg:px-2 mt-1  sm:mt-1 lg:mt-1 xl:mt-1 md:mt-1">
                <EnFlag />
              </label>
              <label className="flex-auto">
                {' '}
                {ing}
                {' '}
              </label>
            </div>
          )
          : (
            <div className="flex  lg:mt-0 md:mt-0 mt-2">
              <label className="flex-auto md:px-2 xl:px-2 px-3 lg:px-2 mt-1 sm:mt-1 lg:mt-1 xl:mt-1 ">
                <EsFlag />
              </label>
              <label className="flex-auto ">
                Versión en:

                { ' ' }
                {esp}
                {' '}
              </label>
            </div>
          )}
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute  mt-2 origin-top-right rounded-md shadow-lg z-10"
      >

        <div className="bg-white rounded shadow-md">
          <Link
            href={path}
            locale="es"
          >
            <a className="block   py-3 px-10 text-gray-900">

              {'    '}
              {esp}
            </a>

          </Link>
          <Link
            href={path}
            locale="en"
          >
            <a className="block px-10 py-3 text-gray-900">
              {ing}
            </a>

          </Link>

          <Link
            href={path}
            locale="ru"
          >
            <a className="block px-10 py-3 text-gray-900">
              {rus}
            </a>

          </Link>

        </div>

      </Transition>
    </div>
  );
};
