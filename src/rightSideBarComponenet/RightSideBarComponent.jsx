import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'; // react-icons 사용 가정
import { SiStackoverflow } from 'react-icons/si';
import './RightSideBarStyles.css';

const RightSideBarComponent = () => {
    return (
      <aside className="right_sidebar">
          <div>
          <ul >
            <li>
              <a href="https://www.facebook.com/?locale=ko_KR">
                <AiOutlineFacebook size="20"/> 
                Facebook
              </a>
            </li>
            <li>
              <a href="https://github.com/jickDo">
                <AiOutlineGithub size="20" /> 
                GitHub
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com">
                <SiStackoverflow size="20" /> 
                Stack Overflow
              </a>
            </li>
          </ul>
          </div>
      </aside>
    );
};

export default RightSideBarComponent;
