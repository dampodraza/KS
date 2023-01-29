import React from "react";
import Layout from "../../components/ui/layout";
import Wsparcie from "../../components/Wsparcie/wsparcie.component";
import DlaJasnosciWsparcie from "../../components/DlaJasnosci/Wsparcie/wsparcie.component";
import PakietyWsparcie from "../../components/Pakiety/pakietyWsparcie.component";

const WsparciePage = () => {
  return (
    <Layout>
      <div className="grid gap-12 mt-[-125px] md:mt-0 md:pt-16 md:grid md:grid-cols-1 md:gap-20 md:pb-32">
        <Wsparcie />
        <PakietyWsparcie />
        <DlaJasnosciWsparcie />
      </div>
    </Layout>
  );
};

export default WsparciePage;
