import React from 'react';

const PageWrapper = ({ children, noPadding }) => {
  const className = noPadding ? 'bg-[#F8F3F0]' : 'bg-[#F8F3F0] px-8 xl:px-32';

  return <div className={className}>{children}</div>;
};

export default PageWrapper;
