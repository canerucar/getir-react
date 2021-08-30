const { default: Campaigns } = require('components/Campaigns');
const { default: Cards } = require('components/Cards');
const { default: Categories } = require('components/Categories');
const { default: Favorites } = require('components/Favorites');
const { default: Footer } = require('components/Footer');
const { default: Header } = require('components/Header');
const { default: HeroSection } = require('components/HeroSection');
const { default: MobileApp } = require('components/MobileApp');

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
