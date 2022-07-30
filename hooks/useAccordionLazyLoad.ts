import React, { useState } from 'react'

const useAccordionLazyLoad = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (exp) => {
      setExpanded(exp);
    };
    return {
      handleChange,
      expanded,
    };
  };

  export default useAccordionLazyLoad;