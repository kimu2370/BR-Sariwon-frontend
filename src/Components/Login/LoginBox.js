import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./loginBox.scss";

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: ""
    };
  }

  //---------------------method-------------------------
  handleId = e => {
    this.setState({
      id: e.target.value
    });
    // console.log("id target: ", e.target);
    // console.log("id value: ", e.target.value);
    // console.log("this.state.id : ", this.state.id);
  };

  handlePW = e => {
    this.setState({
      pw: e.target.value
    });
  };

  handlebtn = () => {
    console.log(this.state.id);
    console.log(this.state.pw);
    if (!this.state.id) {
      alert("아이디를 입력하세요");
    } else if (!this.state.pw) {
      alert("비밀번호를 입력하세요");
    } else {
      this.loginFetch();
    }
  };

  handleSignup = () => {
    this.props.history.push("/signup");
  };

  loginFetch = () => {
    fetch("http://10.58.2.22:8000/account/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.Authorization) {
          console.log("response.status", response.status);
          localStorage.setItem("token", response.Authorization);
          this.props.history.push("/");
        } else {
          alert("로그인을 다시 진행해주세요");
        }
        return response;
      })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div className="left-login">
        <div className="left-txt">
          <h4>배스킨라빈스 로그인</h4>
          <p>한번의 로그인으로 달콤한 혜택을 만나세요.</p>
        </div>
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
            <button className="btn">로그인</button>
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
          <div className="sing-up" onClick={this.handleSignup}>
            회원가입
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginBox);
