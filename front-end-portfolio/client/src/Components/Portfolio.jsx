import React, { Component, memo } from "react";
import PortfolioPic from '../images/pf_02.png';

export class Portfolio extends Component {
  render() {
    return (
      // Portfolio
      <>
      <section id="portfolio">
        <div className="inner-container">
          <div className="title-wrap">
            <h2 className="title">Portfolio</h2>
          </div>
          <div className="portfolio-list clearfix">
            <img
              className="portfolio-img"
              src={PortfolioPic}
              alt="포트폴리오"
            />
            <div className="portfolio-info">
              <span className="portfolio-num">01</span>
              <h3 className="portfolio-name">포트폴리오 랜딩페이지 구축</h3>
              <p className="portfolio-dsc">
                포트폴리오를 소개하는 웹페이지 long scroll형 사이트 입니다.
              </p>
              <ul className="portfolio-list">
                <li>2020.01 - 2020.02</li>
                <li>웹 표준, 웹 접근성, 반응형 웹</li>
                <li>HTML/CSS/JS/jQuery/Bootstrap</li>
                <li>React/Node.js/Mysql/Firebase</li>
                <li>기획/디자인/개발</li>
                <br/>
                <li id="todo"> [ TODO ] </li>
                <li id="todo">개발 버전 - 댓글 등록 및 삭제 구현 완료</li>
                <li id="todo">배포 빌드 - 서버 연동 작업 정체중</li>
              </ul>

              <a className="btn-view" href="#home" target="_blank">
                View
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default memo(Portfolio);
