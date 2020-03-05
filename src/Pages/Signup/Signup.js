import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pwd: "",
      checkpwd: "",
      phone: "",
      address: "",
      nameCheck: false,
      nameWrong: false,
      emailCheck: false,
      emailWrong: false,
      pwdCheck: false,
      pwdWrong: false,
      checkpwdCheck: false,
      checkpwdwrong: false,
      phoneCheck: false,
      phoneWrong: false,
      addressCheck: false,
      addressWrong: false
    };
  }
  // ---------------method--------------------
  handleName = e => {
    this.setState(
      {
        name: e.target.value
      },
      () => {
        var check_name = /^[가-힣]+$/;
        if (check_name.test(this.state.name)) {
          this.setState({ nameCheck: true });
        } else {
          this.setState({ nameWorng: true });
        }
      }
    );
  };

  handleEmail = e => {
    this.setState(
      {
        email: e.target.value
      },
      () => {
        this.state.email.length !== 0 &&
        this.state.email.includes("@") &&
        this.state.email.includes(".")
          ? this.setState({ emailCheck: true })
          : this.setState({ emailWrong: true });
      }
    );
  };

  handlePwd = e => {
    // console.log(e.target.value);
    this.setState(
      {
        pwd: e.target.value
      },
      () => this.checkPW()
    );
  };

  checkPW = () => {
    // console.log("hi");
    const check_num = /[0-9]/;
    const check_eng = /[a-zA-Z]/;
    const check_spc = /[~!@#$%^*()_]/;
    // console.log("this.state.pwd", this.state.pwd);
    //this.state.pwd 에 잘 들어가는지 확인해봐!!

    if (
      check_num.test(this.state.pwd) &&
      check_eng.test(this.state.pwd) &&
      check_spc.test(this.state.pwd) &&
      this.state.pwd.length >= 8
    ) {
      this.setState({ pwdCheck: true });
      // console.log("true");
    } else {
      this.setState({ pwdWrong: true });
      // console.log("false");
    }
  };

  handleCheckPwd = e => {
    this.setState(
      {
        checkpwd: e.target.value
      },

      () => {
        // console.log("this.state.pwd", this.state.pwd);
        // console.log("this.state.checkpwd", this.state.checkpwd);
        if (this.state.pwd === this.state.checkpwd) {
          this.setState({ checkpwdCheck: true });
          // console.log("true");
        } else {
          this.setState({ checkpwdWrong: true });
          // console.log("false");
        }
      }
    );
  };

  handlePhoneNumber = e => {
    this.setState(
      {
        phone: e.target.value
      },
      () => this.checkPhone()
    );
  };

  checkPhone = () => {
    const check_phone = /^\d{3}-\d{3,4}-\d{4}$/;

    if (check_phone.test(this.state.phone)) {
      // console.log(this.state.phone);
      this.setState({ phoneCheck: true });
    } else {
      this.setState({ phoneWrong: true });
    }
  };

  handleAddress = e => {
    this.setState(
      {
        address: e.target.value
      },
      () => this.checkAddress()
    );
  };

  checkAddress = () => {
    if (this.state.address) {
      this.setState({ addressCheck: true });
    } else if (!this.state.address) {
      this.setState({ addressWrong: true });
    }
  };

  handleBtn = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.pwd);
    console.log(this.state.checkpwd);
    console.log(this.state.phone);
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.pwd ||
      !this.state.checkpwd ||
      !this.state.phone
    ) {
      alert("빈칸을 채워주세요");
    } else {
      this.handleFetch();
    }
  };

  handleFetch = () => {
    fetch("http://10.58.2.22:8000/account/sign-up", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.pwd,
        address: this.state.address,
        phone: this.state.phone
      })
    })
      // .then(response => console.log(response))
      // .then(response => response.json())
      .then(response => {
        console.log("response 도착", response.statusText);
        if (response.status === 200) {
          // response에 access가 있으면 login창으로 이동.
          this.props.history.push("/login");
        } else if (response.message === "DUPLICATE_EMAIL") {
          alert("이메일이 중복되었습니다.");
        } else {
          alert("회원가입을 다시 진행해주세요");
        }
        return response;
      })
      .then(response => console.log(response));
  };
  // -----------------render---------------------
  render() {
    return (
      <div className="Signup">
        <div className="content">
          <div className="header-content">
            <span>Create Accout</span>
          </div>
          <div className="inner-content">
            <div className="name">
              <div>이름</div>
              <input
                type="text"
                onChange={this.handleName}
                class={
                  this.state.nameWorng && !this.state.nameCheck
                    ? "wrongName"
                    : null
                }
                placeholder="이름을 입력하세요"
              />
              <img
                className={
                  this.state.nameCheck ? "circle-tick show" : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>

            <div className="email">
              <div>이메일</div>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                onChange={this.handleEmail}
                value={this.state.email}
                className={
                  this.state.emailWrong && !this.state.emailCheck
                    ? "wrongEmail"
                    : null
                }
              />
              <img
                className={
                  this.state.emailCheck
                    ? "circle-tick show"
                    : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>

            <div className="pwd">
              <div>비밀번호</div>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={this.handlePwd}
                className={
                  this.state.pwdWrong && !this.state.pwdCheck
                    ? "wrongPwd"
                    : null
                }
              />
              <img
                className={
                  this.state.pwdCheck ? "circle-tick show" : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>

            <div className="check-pwd">
              <div>비밀번호 확인</div>
              <input
                onChange={this.handleCheckPwd}
                className={
                  this.state.checkpwdWrong && !this.state.checkpwdCheck
                    ? "wrongCheckPwd"
                    : null
                }
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
              />
              <img
                className={
                  this.state.checkpwdCheck
                    ? "circle-tick show"
                    : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>

            <div className="phone-number">
              <div>핸드폰번호</div>
              <input
                onChange={this.handlePhoneNumber}
                className={
                  this.state.phoneWrong && !this.state.phoneCheck
                    ? "wrongphone"
                    : null
                }
                type="text"
                placeholder="핸드폰번호를 입력하세요"
              />
              <img
                className={
                  this.state.phoneCheck
                    ? "circle-tick show"
                    : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>

            <div className="address">
              <div>주소</div>
              <input
                onChange={this.handleAddress}
                className={
                  this.state.addressWrong && !this.state.addressCheck
                    ? "wrongaddress"
                    : null
                }
                type="text"
                placeholder="주소를 입력하세요"
              />
              <img
                className={
                  this.state.addressCheck
                    ? "circle-tick show"
                    : "circle-tick hide"
                }
                alt="circle-tick"
                src="https://img.icons8.com/officel/40/000000/checked.png"
              />
            </div>
          </div>
          <div className="bottom-content">
            <div className="signup-btn">
              <button className="btn" onClick={this.handleBtn}>
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
