import React from "react";
import styled, { css } from "styled-components";

export default function Nav() {
  return (
    <NavBar>
      <MainBar>
        <LogoWrap>
          <MenuImg />
          <LogoImg />
        </LogoWrap>
        <Wrap>
          <MenuWrap>
            {category.map((a) => {
              return <Menu>{a}</Menu>;
            })}
          </MenuWrap>
          <AsideMenuWrap>
            <Search />
            <Alert />

            <Profile />
            <SideBar>|</SideBar>
            <Dashboard>기업 서비스</Dashboard>
          </AsideMenuWrap>
        </Wrap>
      </MainBar>
    </NavBar>
  );
}

const NavBar = styled.div`
  @media only screen and (max-width: 990px) {
    height: 110px;
  }
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 /0.1);
  z-index: 3;
`;

const MainBar = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  @media only screen and (max-width: 990px) {
    flex-direction: column;
    display: block;
  }
  display: flex;
  justify-content: space-between;
  width: 1060px;
  height: 50px;
  margin: auto;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 106px;
  height: 50px;
`;

const MenuImg = styled.img.attrs({
  src: "https://static.wanted.co.kr/images/icon-menu.png",
  alt: "hamberger menu",
})`
  margin-right: 17px;
  width: 17px;
  height: 14px;
  cursor: pointer;
`;

const LogoImg = styled.img.attrs({
  src: "/images/logo.png",
  alt: "logo",
})`
  width: 77px;
  height: 18px;
  cursor: pointer;
`;

const MenuWrap = styled.div`
  @media only screen and (max-width: 990px) {
    margin-left: 0;
  }
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

const Menu = styled.a`
  font-size: 14px;
  cursor: pointer;
`;

const AsideMenuWrap = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 200px;
  }
  @media only screen and (max-width: 990px) {
    width: 99px;
    margin-right: 0px;
  }
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;

const Search = styled.img.attrs({
  src: "/images/search.png",
  alt: "search",
})`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

const Alert = styled.img.attrs({
  src: "/images/alert.png",
  alt: "alert",
})`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

const Profile = styled.img.attrs({
  src: "/images/profile.png",
  alt: "alert",
})`
  @media only screen and (max-width: 990px) {
    src: "/images/dot.png";
  }
  width: 36px;
  cursor: pointer;
`;

const SideBar = styled.div`
  @media only screen and (max-width: 990px) {
    display: none;
  }
  color: #e1e2e3;
  font-size: 13px;
`;

const Dashboard = styled.a`
  @media only screen and (max-width: 990px) {
    display: none;
  }
  padding: 0 10px;
  height: 30px;
  width: 81px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  line-height: 30px;
  font-size: 12.8px;
  color: #666666;
  cursor: pointer;
`;

const Wrap = styled.div`
  @media only screen and (max-width: 990px) {
    height: 60px;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const category = [
  "채용",
  "이벤트",
  "직군별 연봉",
  "이력서",
  "커뮤니티",
  "프리랜서",
  "AI 합격예측",
];
