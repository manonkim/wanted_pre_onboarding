import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";

export default function Carousel() {
  const TotalSlides = 9;
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TotalSlides) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(TotalSlides);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5 ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SlideContainer ref={slideRef}>
        {ImgData.map((item) => {
          return <Slide src={item.src} alt={item.alt} />;
        })}
      </SlideContainer>
      <BtnL onClick={PrevSlide}>&#60;</BtnL>
      <BtnR onClick={NextSlide}>&#62;</BtnR>
    </Container>
  );
}

const Container = styled.div`
  margin: 75px auto;
  width: 100%;
  /* overflow: hidden; */
  /* background-color: red; */
`;

const SlideContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
  /* background-color: black; */
`;

const BtnL = styled.div`
  position: absolute;
  top: 200px;
  left: 120px;
  height: 60px;
  width: 30px;
  padding-top: 17px;
  padding-left: 9px;
  border-radius: 15px;
  background-color: #ffffff;
  color: #555555;
  opacity: 60%;
  cursor: pointer;
`;

const BtnR = styled(BtnL.withComponent("div"))`
  left: 1285px;
  z-index: 0;
`;

const ImgData = [
  {
    id: 0,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "성과를 내는 마케팅",
  },
  {
    id: 1,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "개발자 되고싶은 분들!?",
  },
  {
    id: 2,
    src: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    alt: "성장하는 개발자가 되려면?",
  },
  {
    id: 3,
    src: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
    alt: "2022년 달라지는 노동법령",
  },
  {
    id: 4,
    src: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
    alt: "마케팅 주니어를 찾습니다",
  },
  {
    id: 5,
    src: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
    alt: "포트폴리오를 부탁해!",
  },
  {
    id: 6,
    src: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
    alt: "개발자 성장 비결 공개!",
  },
  {
    id: 7,

    src: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
    alt: "해, 커리어 EP 02 공개",
  },
  {
    id: 8,
    src: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
    alt: "UX 디자이너의 커리어 설계",
  },
  {
    id: 9,
    src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    alt: "성과를 내는 마케팅",
  },
  {
    id: 10,
    src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    alt: "개발자 되고싶은 분들!?",
  },
];
