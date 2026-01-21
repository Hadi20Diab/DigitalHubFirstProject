"use client";

import ChooseUs from "./components/ChooseUs/ChooseUs";
import OurMembers from "./components/OurMembers/OurMembers";
import QualityHealth from "./components/QualityHealth/QualityHealth";
import Specialist from "./components/Specialists/Specialist";

export default function Home() {
  return (
    <>
      <Specialist />
      <ChooseUs />
      <OurMembers />      
      <QualityHealth />
    </>
  );
}
