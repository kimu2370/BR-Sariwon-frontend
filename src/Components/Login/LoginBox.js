import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      data: []
    };
  }

  //---------------------method-------------------------
  handleId = e => {
    // console.log(e.target);
    this.setState({
      id: e.target.value
    });
  };
  handlePW = e => {
    // console.log(e.target.value);
    this.setState({
      pw: e.target.value
    });
    // console.log("this.state.pw : ", this.state.pw);
  };

  handlebtn = () => {
    // if (!this.state.id) {
    //   alert("아이디를 입력하세요");
    // } else if (!this.state.pw) {
    //   alert("비밀번호를 입력하세요");
    // } else {
    //http://10.58.2.215:8000/account/sign-in
    fetch("http://10.58.2.215:8000/account/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.Authorization) {
          localStorage.setItem("token", res.Authorization);
        }
      });
    // }
  };

  //handleLogin btn에 걸것. handlebtn 함수 안에 넣어도 되나? btn에 함수 2개 걸려고 하니까 오류뜨는디..?

  // -------------------render----------------------
  render() {
    return (
      <div className="left-login">
        <div className="left-txt">
          <h4>배스킨라빈스 로그인</h4>
          <p>한번의 로그인으로 달콤한 혜택을 만나세요.</p>
        </div>
        {/* 로그인박스 */}
        <div className="login-box">
          <div className="login-input">
            <input
              onChange={this.handleId}
              type="text"
              placeholder="이메일을 입력하세요"
            />
            <input
              onChange={this.handlePW}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="login-btn" onClick={this.handlebtn}>
            <btn className="btn">로그인</btn>
          </div>
        </div>
        <div className="left-bottom">
          <a
            className="find-id"
            href="http://members.happypointcard.com/member/member_inquiry.html?url_check=BR"
            target="blank"
          >
            아이디찾기
          </a>
          <a
            className="find-pw"
            href="https://members.happypointcard.com/member_02/join_05.html"
            target="blank"
          >
            비밀번호재발급
          </a>
          <Link
            to="http://members.happypointcard.com/member_02/main.html"
            className="sing-up"
            target="blank"
          >
            회원가입
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginBox);
