import React from 'react';

// import Akumal from './akumal';
import Cancun from './cancun';
// import Pdc from './pdc';
// import Tulum from './tulum';

// import { useTranslation } from 'next-i18next';

type TabProps = {
  tab: string;
  place: any;
};

const Tab = (props: TabProps) => {
  const tabP = props.tab;
  const p = props.place;
  
  // const tabs = {
  //   information:<Cancun tab="information" />,
  //   rates:
  // }
  if (p.place === 'cancun') {
    switch (tabP) {
      case 'information':
        return <Cancun tab="information" />;
      case 'rates':
        return <Cancun tab="rates" />;
      case 'faqs':
        return <Cancun tab="faqs" />;
      default:
        return <p>holiii</p>;
    }
  } else {
    return <p>si return</p>;
  }
};
export default Tab;
