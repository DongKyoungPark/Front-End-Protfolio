import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      // About
      <>
      <section id="about">
        <div className="inner-container">
          <div className="title-wrap">
            <h2 className="title">About</h2>
          </div>
          <div className="profile-wrap clearfix">
            <div className="profile-info">
              <div className="profile clearfix">
                <h3 className="sub-title">Profile</h3>
                <img
                  className="profile-img"
                  src="../images/PDK.png"
                  alt="증명사진"
                />
                <ul className="personal-info">
                  <li className="name">박 동 경</li>
                  <li className="part">Front-End Developer [신입]</li>
                  <li>1988.03.04</li>
                  <li>서울특별시 서대문구</li>
                  <li>010-4554-0898</li>
                  <li>oe1lolo@nate.com</li>
                </ul>
                <ul className="character">
                  <li>. 어디에서든 잘 녹아드는 성격</li>
                  <li>. 업무에 있어서는 신중한 태도</li>
                  <li>
                    . 새로운 업무에 대한 두려움이 없으며 적극적으로 배우는 자세
                  </li>
                  <li>. 실패를 두려워 하지 않는 도전정신</li>
                </ul>
              </div>
              <div className="education">
                <h3 className="sub-title">Education</h3>
                <ul className="edu-list clearfix">
                  <li>
                    <p>울산대학교</p>
                    <p>컴퓨터정보통신공학과</p>
                    <p className="date">2007.03 - 2013.02</p>
                  </li>
                  <li>
                    <p>그린컴퓨터아트학원</p>
                    <p>프론트엔드 개발자과정</p>
                    <p className="date">2019.07 - 2019.12</p>
                  </li>
                  <li className="last">
                    <p>HTML5&CSS3, JavaScript, React Lecture</p>
                    <p>프론트엔드 유튜브 개발강의</p>
                    <p className="date">2019.07 - 2020.~~</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="skill">
              <h3 className="sub-title">Skill</h3>
              <ul className="skill-dsc">
                <li>. HTML5, CSS3 웹 표준 마크업</li>
                <li>. 웹 접근성 준수</li>
                <li>. Jquery 플러그인 활용</li>
                <li>. 알고리즘 이해</li>
                <li>. Bootstrap 사용 경험</li>
                <li>. React & Hooks 경험</li>
                <li>. Node.js 활용 경험</li>
                <li>. GitHub 오픈소스 활용</li>
                <li>. 커뮤니케이션 능력</li>
                <li>. 문서 작업능력</li>
              </ul>
              <ul className="skill-bar">
                <li>
                  <span>HTML5</span>
                  <div className="bar-wrap">
                    <div className="bar-basic"></div>
                    <div className="bar-move"></div>
                  </div>
                </li>
                <li>
                  <span>CSS3 & SASS</span>
                  <div className="bar-wrap">
                    <div className="bar-basic"></div>
                    <div className="bar-move"></div>
                  </div>
                </li>
                <li>
                  <span>JavaScript & JQuery</span>
                  <div className="bar-wrap">
                    <div className="bar-basic"></div>
                    <div className="bar-move"></div>
                  </div>
                </li>
                <li>
                  <span>Bootstrap</span>
                  <div className="bar-wrap">
                    <div className="bar-basic"></div>
                    <div className="bar-move"></div>
                  </div>
                </li>
                <li>
                  <span>React</span>
                  <div className="bar-wrap">
                    <div className="bar-basic"></div>
                    <div className="bar-move"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default About;
