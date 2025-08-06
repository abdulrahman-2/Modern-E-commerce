import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { products } from "../data/Data";
import ProductCard from "../common/ProductCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Custom arrow components to handle carousel props
const PrevArrow = (props: any) => {
  return <IoIosArrowRoundBack {...props} />;
};

const NextArrow = (props: any) => {
  return <IoIosArrowRoundForward {...props} />;
};

const TopProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-20">
      <Heading title="Best Sellers" />
      <div className="slider-container">
        <Slider {...settings}>
          {products.slice(0, 8).map((item) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProducts;
