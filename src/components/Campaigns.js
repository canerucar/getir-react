import React from 'react'
import Slider from 'react-slick';
import Banners from 'api/banners.json'
import {useState, useEffect} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowWidth } from '@react-hook/window-size';

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
  const width = useWindowWidth();

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="sm:container overflow-hidden md:overflow-visible mx-auto px-0"
        style={{ width: width < 640 ? width : '' }}
      >
        <h3 className="font-semibold hidden sm:block text-sm mb-3">
          Kampanyalar
        </h3>
        <Slider className="-mx-2 relative" {...settings}>
          {banners &&
            banners.map((banner) => (
              <div key={banner.id} className="px-2">
                <img src={banner.image} className="w-full sm:rounded-lg" alt="banner images" />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

export default Campaigns
