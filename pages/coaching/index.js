import React, { useEffect } from "react";
import Router from "next/router";
import Layout from "../layout";
import {redirectNonMobile} from '../../utils/redirectNonMobile'

const CoachingPage = ({ isMobile }) => {
  return (
    <Layout>
      <div className="px-60 pt-48">cos</div>
    </Layout>
  );
};

export default CoachingPage;


// prevent desktop to see this page
CoachingPage.getInitialProps = async (ctx) => {
    return redirectNonMobile(ctx);
  };
  
 