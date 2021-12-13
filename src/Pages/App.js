import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
import WhatWeDo from "../Components/WhatWeDo"
import LatestNews from "../Components/LatestNews"
import JoinUsItems from "../Components/JoinUsItems";
import Footer from "../Components/Footer"
function App() {
  return (
   <div className="bg-primary-white">
      <Container>
        <Navbar />

        <Hero />

        <WhatWeDo />
        
        <LatestNews/>

        <JoinUsItems/>
      </Container>
      <Footer/>
      </div>
  );
}

export default App;
