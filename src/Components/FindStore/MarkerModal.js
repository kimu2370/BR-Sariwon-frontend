import React, { Component } from "react";
import "Components/FindStore/markerModal.scss";

/*
 * 마커 모달
 */
class MarkerModal extends Component {
  render() {
    const { modalClicked } = this.props;
    console.log("MarkerModal modalClicked: ", modalClicked);

    return (
      <>
        <div
          className={`marker-modal-wrapper${modalClicked ? " on" : ""}`}
        ></div>
        <div className={`container${modalClicked ? " on" : ""}`}>
          <div className="content">
            <header className="header">
              <h3>매장 이름</h3>
            </header>
            <body className="body">
              <div className="img">
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/dummy/img_mybr_store.png"
                  alt=""
                />
              </div>
              <dl className="info">
                <div className="info-inner-wrapper">
                  <dt>매장주소</dt>
                  <dd>서울 서초구 남부순환로 지하 2585 (서초동, 양재역)</dd>
                </div>
                <div className="info-inner-wrapper">
                  <dt>전화번호</dt>
                  <dd>02-529-3120</dd>
                </div>

                <div className="info-inner-wrapper">
                  <dt>운영시간</dt>
                  <dd>AM 10~PM 11</dd>
                </div>

                <div className="info-service-wrapper">
                  <dt>Cafe Bris</dt>
                  <dd>
                    <ul>
                      <li>
                        <span>브리즈</span>
                      </li>
                    </ul>
                  </dd>
                </div>

                <div className="info-service-wrapper">
                  <dt>매장 서비스</dt>
                  <dd>
                    <ul>
                      <li>
                        <span>해피포인트 적립가능</span>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </body>
            <div className="wrap">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <img
                        src="http://www.baskinrobbins.co.kr/assets/images/store/icon_praise.png"
                        alt=""
                      />
                    </dt>
                    <dd>
                      고객 BEST 칭찬 점포를 <br /> 소개합니다!
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt>
                      <img
                        src="http://www.baskinrobbins.co.kr/assets/images/store/icon_customer.png"
                        alt=""
                      />
                    </dt>
                    <dd>
                      고객의 소리를 <br /> 귀기울여 듣겠습니다.
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>

          <div className="close" onClick={() => this.props.closeModal(false)}>
            <img
              src="http://www.baskinrobbins.co.kr/assets/images/common/btn_pop_close.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default MarkerModal;
