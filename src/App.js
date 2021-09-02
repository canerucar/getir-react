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
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
