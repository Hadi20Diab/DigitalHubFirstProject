"use client";

import ChooseUs from "./components/ChooseUs/ChooseUs";
import OurMembers from "./components/OurMembers/OurMembers";
import QualityHealth from "./components/QualityHealth/QualityHealth";
import Specialist from "./components/Specialists/Specialist";
import Subscribe from "./components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Specialist />
      <ChooseUs />
      <OurMembers />      
      <QualityHealth />
      <Subscribe />
    </>
  );
}
