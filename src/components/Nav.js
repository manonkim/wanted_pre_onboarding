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
            {category.map((a, id) => {
              return <Menu key={id}>{category[id].category}</Menu>;
            })}
            {category2.map((a, id) => {
              return <Menu2 key={id}>{category2[id].category}</Menu2>;
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
  width: 500px;
  height: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 990px) {
    margin-left: 0;
    width: 450px;
  }
  @media only screen and (max-width: 767px) {
    width: 150px;
  }
`;

const Menustyle = css`
  margin: auto 0;
  padding: 0 9px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  cursor: pointer;
`;

const Menu = styled.a`
  ${Menustyle}
  :hover {
    border-bottom: 2px solid lightgray;
  }
  @media only screen and (max-width: 990px) {
    font-size: 13px;
    :hover {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Menu2 = styled.a`
  ${Menustyle}
  @media only screen and (min-width: 767px) {
    display: none;
  }
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
  { id: 1, category: "채용" },
  { id: 2, category: "이벤트" },
  { id: 3, category: "직군별 연봉" },
  { id: 4, category: "이력서" },
  { id: 5, category: "커뮤니티" },
  { id: 6, category: "프리랜서" },
  { id: 7, category: "AI 합격예측" },
];

const category2 = [
  { id: 1, category: "홈" },
  { id: 2, category: "채용" },
  { id: 3, category: "이벤트" },
];
