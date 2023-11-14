import SidebarComponent from "../sideBarComponent/SideBarComponent";
import HeaderComponent from "../headComponent/HeaderComponent";
import MainComponent from "../mainPageComponent/MainPageComponent";
import React from "react";
import FooterContainer from "../footerComponent/FooterConponent";
import RightSideBarComponent from "../rightSideBarComponenet/RightSideBarComponent";
import "../css/HomePage.css"

const StackImages = [
  '/spring.png',
  '/springboot.png',
  '/spring-security.png',
  '/data-jpa.png',
  '/kotlin.png',
];

function HomePage() {
    
  return (
      <>
        <MainComponent>
        <div className="main-container">
        <div className="homepage-container">
          <h1 className="font-size-40">기술 스택</h1>
          {StackImages.map((imageSrc, index) => (
            <div key={index} className="profile-photo" style={{ backgroundImage: `url('${imageSrc}')` }}></div>
          ))};
      </div>
      </div>
        </MainComponent>
        <HeaderComponent />
        <RightSideBarComponent />
        <SidebarComponent />
        <FooterContainer/>

      </>
    );
  }


export default HomePage;
  