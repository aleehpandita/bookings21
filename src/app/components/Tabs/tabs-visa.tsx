import React from 'react';

import { useTranslation } from 'next-i18next';

export default function TabsVisa() {
  const { t } = useTranslation('visa');
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 1 ? 'text-white bg-yellow-600' : 'text-yellow-600 bg-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {t('iam')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 2 ? 'text-white bg-yellow-600' : 'text-yellow-600 bg-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {t('iamex')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 3 ? 'text-white bg-yellow-600' : 'text-yellow-600 bg-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {t('iamtou')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 4 ? 'text-white bg-yellow-600' : 'text-yellow-600 bg-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                {t('iamex2')}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p className="font-sans font-bold text-xl">{t('question1')}</p>
                  <p className="font-sans text-justify text-sm">{t('text')}</p>
                  <p className="font-sans font-bold text-xl">{t('question2')}</p>
                  <p className="font-sans text-justify text-sm">{t('text1')}</p>
                  <p className="font-sans text-justify text-sm">{t('text2')}</p>
                  <p className="font-sans font-bold text-xl">{t('question3')}</p>
                  <p className="font-sans text-justify text-sm">{t('text4')}</p>
                  <p className="font-sans text-justify text-sm">{t('text5')}</p>
                  <p className="font-sans font-bold text-xl">{t('question4')}</p>
                  <p className="font-sans text-justify text-sm">{t('text6')}</p>
                  <p className="font-sans text-justify text-sm">{t('text7')}</p>
                  <p className="font-sans font-bold text-xl">{t('question5')}</p>
                  <p className="font-sans text-justify text-sm">{t('text8')}</p>
                  <p className="font-sans text-justify text-sm">{t('text9')}</p>
                  <p className="font-sans text-justify text-sm">{t('text10')}</p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p className="font-sans font-bold text-xl">{t('question6')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text1')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text2')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text3')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text4')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text5')}</p>
                  <p className="font-sans font-bold text-xl">{t('question7')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text6')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text7')}</p>
                  <p className="font-sans font-bold text-xl">{t('question8')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text8')}</p>
                  <p className="font-sans text-justify text-sm">{t('2text9')}</p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p className="font-sans font-bold text-xl">{t('question9')}</p>
                  <p className="font-sans text-justify text-sm">{t('3text1')}</p>
                  <p className="font-sans text-justify text-sm">{t('3text2')}</p>
                  <p className="font-sans font-bold text-xl">{t('question10')}</p>
                  <p className="font-sans text-justify text-sm">{t('3text3')}</p>
                  <p className="font-sans text-justify text-sm">{t('3text4')}</p>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <p className="font-sans font-bold text-xl">{t('question11')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text1')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text2')}</p>

                  <p className="font-sans font-bold text-xl">{t('question12')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text3')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text4')}</p>
                  <p className="font-sans font-bold text-xl">{t('question13')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text5')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text6')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text7')}</p>
                  <p className="font-sans font-bold text-xl">{t('question14')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text8')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text9')}</p>
                  <p className="font-sans text-justify text-sm">{t('4text10')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
