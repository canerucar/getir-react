import { useWindowWidth } from '@react-hook/window-size';
const { default: Campaigns } = require('components/Campaigns');
const { default: Cards } = require('components/Cards');
const { default: Categories } = require('components/Categories');
const { default: Favorites } = require('components/Favorites');
const { default: Footer } = require('components/Footer');
const { default: Header } = require('components/Header');
const { default: HeroSection } = require('components/HeroSection');
const { default: MobileApp } = require('components/MobileApp');

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      <Campaigns />
      {windowWidth > 768 && <Campaigns />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
