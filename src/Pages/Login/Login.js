import React, { Component } from "react";
import Layout from "Pages/Layout/Layout";
import LoginBox from "Components/Login/LoginBox";
import Benefit from "Components/Login/Benefit";
import "./login.scss";

class Login extends Component {
  // ----------------------render----------------------
  render() {
    return (
      <Layout>
        <div className="Login">
          <div className="content">
            <div className="header-content">
              <span>
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/sso/h_login.png"
                  alt="Login"
                />
              </span>
              <p>배스킨 라빈스 홈페이지에 오신 것을 환영합니다</p>
            </div>
            <div className="inner-content">
              <div className="login-container">
                <LoginBox />
                <div className="right-login">
                  <div className="service">
                    <h3>SPC 통합회원서비스</h3>
                    <p>
                      하나의 ID/Password로 SPC가 운영하는 사이트(배스킨라빈스,
                      던킨도너츠, 해피포인트카드, 파리바게뜨, 파리크라상,
                      파스쿠찌, SPC그룹,우리밀愛)를 한번에!! 간단한 동의 절차만
                      거치면 하나의 ID/Password로 제휴사이트를 로그인 하실 수
                      있습니다.
                    </p>
                  </div>
                  <div className="center">
                    <h3>고객센터</h3>
                    <dl>
                      <dt>운영시간</dt>
                      <dd>월~금 09:00~17:30 토/일요일 휴무</dd>
                    </dl>
                    <dl>
                      <dt>Tel.</dt>
                      <dd>080-555-3131(수신자부담)</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bottom-container">
                <div className="text">
                  <p>
                    배스킨라빈스 회원이 아니시라면 지금 배스킨라빈스에
                    가입하시고
                  </p>
                  <p>다양한 혜택을 경험하세요</p>
                </div>
                <Benefit>
                  <div className="benefit1">
                    <div className="bene-icon1"></div>
                    <div className="bene-txt1">
                      <dt>혜택 하나</dt>
                      <dd>배스킨라빈스 온라인 이벤트</dd>
                      <dd>행사에 참여할 수 있습니다.</dd>
                    </div>
                  </div>
                  <div className="benefit2">
                    <div className="bene-icon2"></div>
                    <div className="bene-txt2">
                      <dt>혜택 둘</dt>
                      <dd>월별 신제품을 보다</dd>
                      <dd>먼저 만날 수 있습니다.</dd>
                    </div>
                  </div>
                  <div className="benefit3">
                    <div className="bene-icon3"></div>
                    <div className="bene-txt3">
                      <dt>혜택 셋</dt>
                      <dd>배스킨라빈스 이벤트 정보</dd>
                      <dd>메일링을 받아 볼 수 있습니다.</dd>
                    </div>
                  </div>
                </Benefit>
                {/* <div className="benefit">
                  <div className="benefit1">
                    <div className="bene-icon1"></div>
                    <div className="bene-txt1">
                      <dt>혜택 하나</dt>
                      <dd>배스킨라빈스 온라인 이벤트</dd>
                      <dd>행사에 참여할 수 있습니다.</dd>
                    </div>
                  </div>
                  <div className="benefit2">
                    <div className="bene-icon2"></div>
                    <div className="bene-txt2">
                      <dt>혜택 둘</dt>
                      <dd>월별 신제품을 보다</dd>
                      <dd>먼저 만날 수 있습니다.</dd>
                    </div>
                  </div>
                  <div className="benefit3">
                    <div className="bene-icon3"></div>
                    <div className="bene-txt3">
                      <dt>혜택 셋</dt>
                      <dd>배스킨라빈스 이벤트 정보</dd>
                      <dd>메일링을 받아 볼 수 있습니다.</dd>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
