import React from 'react'
import Slider from 'react-slick';
import Banners from 'api/banners.json'
import {useState, useEffect} from 'react';
import Title from './ui/Title';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function NextButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img
                  src={banner.image}
                  alt="banners img"
                  className="rounded-lg"
                />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns
