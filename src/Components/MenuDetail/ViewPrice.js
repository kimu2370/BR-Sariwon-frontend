import React, { Component } from "react";
import "Components/MenuDetail/viewPrice.scss";
class ViewPrice extends Component {
  render() {
    return (
      <div className="view-price">
        <section className="conecup">
          <h2>
            <img
              src="https://www.baskinrobbins.co.kr/assets/images/menu/tit_concup.gif"
              alt="cone&cup"
            ></img>
          </h2>
          <ul>
            <li className="cc1">
              <div className="title">싱글 레귤러</div>
              <div>한가지 맛을 센스있게</div>
              <div>즐길 수 있는 사이즈 (용기 무게 제외 중량115g)</div>
              <div className="price">3,200원</div>
            </li>
            <li className="cc2">
              <div className="title">싱글킹</div>
              <div>좋아하는 맛한가지만 듬뿍</div>
              <div>맛볼 수 있는 사이즈(중량 145g)</div>
              <div className="price">4,000원</div>
            </li>
            <li className="cc3">
              <div className="title">더블주니어</div>
              <div>두가지 맛을 조금씩 한번에</div>
              <div>즐기는 사이즈 (중량 150g)</div>
              <div className="price">4,300원</div>
            </li>
            <li className="cc4">
              <div className="title">더블레귤러</div>
              <div>아이스크림 매니아를 위한</div>
              <div>진정한 더블 사이즈 (중량 230g)</div>
              <div className="price">6,200원</div>
            </li>
          </ul>
        </section>
        <section className="handpack">
          <h2>
            <img
              src="https://www.baskinrobbins.co.kr/assets/images/menu/tit_concup.gif"
              alt="cone&cup"
            ></img>
          </h2>
          <ul>
            <li className="hp1">
              <div className="title">파인트</div>
              <div>3가지 맛을 골라먹는 재미가</div>
              <div>있는 사이즈 (중량320g)</div>
              <div className="price">8,200원</div>
            </li>
            <li className="hp2">
              <div className="title">쿼터</div>
              <div>4가지맛을 골라먹는 재미가</div>
              <div>있는 사이즈(중량 620g)</div>
              <div className="price">15,500원</div>
            </li>
            <li className="hp3">
              <div className="title">패밀리</div>
              <div>5가지 맛을 나눠먹는 재미가</div>
              <div>있는 사이즈 (중량 960g)</div>
              <div className="price">22,000원</div>
            </li>
            <li className="hp4">
              <div className="title">하프갤런</div>
              <div>6가지 맛을 나눠먹는 재미가</div>
              <div>있는 사이즈 (중량 1200g)</div>
              <div className="price">26,500원</div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ViewPrice;
