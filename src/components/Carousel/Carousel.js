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

  const AutoPlay = () => {
    setInterval(() => {
      NextSlide();
    }, 5000);
  };
  AutoPlay();

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
    alt: "UX ??????????????? ????????? ??????",
  },
  {
    id: 1,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "????????? ?????? ?????????",
  },
  {
    id: 2,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "????????? ???????????? ??????!?",
  },
  {
    id: 3,
    src: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    alt: "???????????? ???????????? ??????????",
  },
  {
    id: 4,
    src: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
    alt: "2022??? ???????????? ????????????",
  },
  {
    id: 5,
    src: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
    alt: "????????? ???????????? ????????????",
  },
  {
    id: 6,
    src: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
    alt: "?????????????????? ?????????!",
  },
  {
    id: 7,
    src: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
    alt: "????????? ?????? ?????? ??????!",
  },
  {
    id: 8,

    src: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
    alt: "???, ????????? EP 02 ??????",
  },
  {
    id: 9,
    src: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
    alt: "UX ??????????????? ????????? ??????",
  },
  {
    id: 10,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "????????? ?????? ?????????",
  },
  {
    id: 11,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "????????? ???????????? ??????!?",
  },
  {
    id: 12,
    src: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    alt: "???????????? ???????????? ??????????",
  },
];
