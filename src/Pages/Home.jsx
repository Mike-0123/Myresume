import React from "react";
import Navivgation from "../Components/Navivgation";
import ComputerCanvas from "../Components/ComputerCanvas";
import HelloSection from "../Components/HelloSection";
import Background from "../Components/Background";
import Skills from "../Components/Skills";

import Contact from "../Components/MapandForm";
import Footer from "../Components/Footer";
import Projects from "../Components/Project";
import WhatsAppButton from "../Components/Whatsapp";




export default function Home() {
  return (
  <>
<Navivgation/>
<HelloSection/>
<Background/>
<Projects/>
<Contact/>
<Footer/>
<WhatsAppButton/>

  </>
  )
}
