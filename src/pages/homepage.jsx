import { useState } from "react";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import Taboptions from "../components/common/taboptions/taboptions";
import Delivery from "../components/common/delivery/delivery";
import Dinning from "../components/Dinning";
import Nightlife from "../components/nightlife/nightlife";

function Homepage() {
 const [activeTab,setactiveTab] = useState("Delivery")
 console.log('here');
  return (
    <>
      <Header />
     < Taboptions activeTab={activeTab}  setactiveTab={setactiveTab} />
      {getcurrentscreen(activeTab)}
      <Footer/>

    </>
  );
}

const getcurrentscreen = (tab) =>{
  switch (tab) {
    case "Delivery": return <Delivery />;
    case "Dinning" : return <Dinning />
    case "nightlife": return <Nightlife />
    default: return <Delivery/>;
      
  }
}

export default Homepage;
