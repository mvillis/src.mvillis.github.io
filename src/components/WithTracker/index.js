import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-102226093-1');

const WithTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  const HOC = (props) => {
    const page = props.location.pathname;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };

  return HOC;
};

export default WithTracker;
