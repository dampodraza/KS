import React from "react";
import Layout from "../layout";
import Joga from '../../components/Joga/joga.component'
import PakietyJoga from '../../components/Pakiety/pakietyJoga.component';
import DlaJasnosciJoga from '../../components/DlaJasnosci/Joga/joga.component'
const JogaPage = () => {
  return (
    <Layout>
      <div className="grid gap-12 mt-[-125px] md:mt-0 md:pt-16 md:grid md:grid-cols-1 md:gap-20 md:pb-32">
        <Joga />
        <PakietyJoga />
        <DlaJasnosciJoga />
      </div>
    </Layout>
  );
};

export default JogaPage;
