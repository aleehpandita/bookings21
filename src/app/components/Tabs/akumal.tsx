import React from 'react';

type TabProps = {
  tab: string;
};

const Akumal = (props: TabProps) => {
  const tabP = props.tab;
  switch (tabP) {
    case 'information':
      return <p>infor</p>;
    default:
      return <p>holiii</p>;
  }
};
export default Akumal;
