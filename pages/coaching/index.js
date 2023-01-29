import React from "react";
import Layout from "../../components/ui/layout";
import Coaching from "../../components/Coaching/coaching.component";
import DlaJasnosciCoaching from "../../components/DlaJasnosci/Coaching/coaching.component";
import PakietyCoaching from "../../components/Pakiety/pakietyCoaching.component";

const CoachingPage = () => {
  return (
    <Layout>
      <div className="grid gap-12 mt-[-125px] md:mt-0 md:pt-16 md:grid md:grid-cols-1 md:gap-20 md:pb-32">
        <Coaching />
        <PakietyCoaching />
        <DlaJasnosciCoaching />
      </div>
    </Layout>
  );
};

export default CoachingPage;
