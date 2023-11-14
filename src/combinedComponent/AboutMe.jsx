import SidebarComponent from "../sideBarComponent/SideBarComponent";
import HeaderComponent from "../headComponent/HeaderComponent";
import MainComponent from "../mainPageComponent/MainPageComponent";
import React from "react";
import FooterContainer from "../footerComponent/FooterConponent";
import RightSideBarComponent from "../rightSideBarComponenet/RightSideBarComponent";
import "../css/AboutMe.css"
function AboutMe() {
    
  return (
      <>
        <MainComponent>
        <div className="about-me-container">
        <div className="profile-photo10" style={{ backgroundImage: '../../public/cute-mouse.png'}}>
      </div>
      <div className="about-me-content">
        <h1>안녕하세요, 저는 임직찬 입니다.</h1>
        <p>
          백엔드 개발자로 일하고 있으며, 스프링부트에 대한 경험이 있습니다.
          저는 탐구하는것에 대한 열정을 가지고 있으며, 더 좋은 개발자가 되기위해 노력하고 있습니다.
        </p>
        <p>
          저는 끈기있는 성격을 가지고 있으며, 이러한 성격을 바탕으로 부족한 부분을 채워 나가고 있습니다.
          더 많은 탐구를 바탕으로 더 심도 있는 기술을 다루고 싶습니다. 
        </p>
        <div className="contact-info">
          <p>연락처: pocard0117@gachon.ac.kr</p>
          <p>깃허브 주소: https://github.com/jickDo</p>
          <p>전화번호: 010-xxxx-xxxx</p>
        </div>
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


export default AboutMe;
  