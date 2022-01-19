import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Slide from "./Slide";

export default function Carousel() {
  const TotalSlides = 10;
  const [currentSlide, setCurrentSlide] = useState(2);
  const slideRef = useRef(null);
  const Refstyle = slideRef.current;

  const NextSlide = () => {
    if (currentSlide >= TotalSlides) {
      Refstyle.style.transition = `none`;
      Refstyle.style.transform = `translateX(-100%)`;
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 1) {
      Refstyle.style.transition = `none`;
      Refstyle.style.transform = `translateX(-1000%)`;
      setCurrentSlide(9);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // const AutoPlay = () => {
  //   setInterval(() => {
  //     NextSlide();
  //   }, 5000);
  // };
  // AutoPlay();

  // const ResizeWindow = () => {
  //   const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  //   const handleResize = () => {
  //     setWindowSize({ width: window.innerWidth });
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       //cleanup
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  // };
  // ResizeWindow();

  useEffect(() => {
    slideRef.current.style.transition = "transform .3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Main>
      <Container>
        <SlideContainer ref={slideRef}>
          {ImgData.map((item) => {
            return <Slide src={item.src} alt={item.alt} id={item.id} />;
          })}
        </SlideContainer>
        <BtnL onClick={PrevSlide}>&#60;</BtnL>
        <BtnR onClick={NextSlide}>&#62;</BtnR>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  margin: 70px auto;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    height: 183px;
  }
  @media only screen and (max-width: 990px) {
    margin-top: 60px;
  }

  width: 1080px;
  height: 300px;
  margin: 0 auto;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
`;

const Btn = css`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  position: absolute;
  top: 120px;
  height: 60px;
  width: 30px;
  padding-top: 17px;
  padding-left: 9px;
  border-radius: 15px;
  background-color: #ffffff;
  color: #555555;
  opacity: 60%;
  cursor: pointer;
  z-index: 200;
`;

const BtnL = styled.div`
  ${Btn}
  left : -5%
`;

const BtnR = styled.div`
  ${Btn}
  right: -5%;
`;

const ImgData = [
  {
    id: 0,
    src: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
    alt: "UX 디자이너의 커리어 설계",
  },
  {
    id: 1,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "성과를 내는 마케팅",
  },
  {
    id: 2,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "개발자 되고싶은 분들!?",
  },
  {
    id: 3,
    src: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    alt: "성장하는 개발자가 되려면?",
  },
  {
    id: 4,
    src: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
    alt: "2022년 달라지는 노동법령",
  },
  {
    id: 5,
    src: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
    alt: "마케팅 주니어를 찾습니다",
  },
  {
    id: 6,
    src: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
    alt: "포트폴리오를 부탁해!",
  },
  {
    id: 7,
    src: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
    alt: "개발자 성장 비결 공개!",
  },
  {
    id: 8,

    src: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
    alt: "해, 커리어 EP 02 공개",
  },
  {
    id: 9,
    src: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
    alt: "UX 디자이너의 커리어 설계",
  },
  {
    id: 10,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "성과를 내는 마케팅",
  },
  {
    id: 11,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "개발자 되고싶은 분들!?",
  },
  {
    id: 12,
    src: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    alt: "성장하는 개발자가 되려면?",
  },
];
