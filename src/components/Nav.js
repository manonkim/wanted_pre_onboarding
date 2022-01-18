import React from "react";
import styled, { css } from "styled-components";

export default function Nav() {
  const category = [
    "채용",
    "이벤트",
    "직군별 연봉",
    "이력서",
    "커뮤니티",
    "프리랜서",
    "AI 합격예측",
  ];
  return (
    <NavBar>
      <MainBar>
        <LogoWrap>
          <MenuImg />
          <LogoImg />
        </LogoWrap>
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
      </MainBar>
    </NavBar>
  );
}

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 /0.1);
  z-index: 3;
`;

const MainBar = styled.div`
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
  width: 245px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const btn = css`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

const Search = styled.img.attrs({
  src: "/images/search.png",
  alt: "search",
})`
  ${btn}
`;

const Alert = styled.img.attrs({
  src: "/images/alert.png",
  alt: "alert",
})`
  ${btn}
`;

const Profile = styled.img.attrs({
  src: "/images/profile.png",
  alt: "alert",
})`
  width: 36px;
  cursor: pointer;
`;

const SideBar = styled.div`
  color: #e1e2e3;
  font-size: 13px;
`;

const Dashboard = styled.a`
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
