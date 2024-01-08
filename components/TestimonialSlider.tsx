import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const lastonReview =
  "Peter Chinoko is a skilled and creative software developer. He delivers high-quality and user-friendly web and mobile applications using various technologies and tools.";
const clementsreview =
  "Peter Chinoko is a skilled and reliable software developer. He always delivers high-quality work on time and exceeds expectations.";
const preciousreview =
  "Peter Chinoko is a software developer who constantly learns new skills and technologies. He adapts to changing requirements and delivers excellent results.";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        name="Precious Maseko"
        role="Frontend Developer"
        image="/images/precious.png"
        review={preciousreview}
      />
      <ClientReview
        name="Laston Movirikana"
        role="UI/UX and Graphic Designer"
        image="/images/Laston.png"
        review={lastonReview}
      />
      <ClientReview
        name="Clement Mtete"
        role="Founder of RSA lawn Installation"
        image="/images/c2.jpg"
        review={clementsreview}
      />
    </Carousel>
  );
};

export default TestimonialSlider;
