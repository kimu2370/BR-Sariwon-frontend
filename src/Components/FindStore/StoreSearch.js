import React, { Component } from "react";
import "Components/FindStore/StoreSearch.scss";
import SelectBox from "Components/Common/SelectBox";
import Store from "Components/FindStore/Store";

export default class StoreSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityList: [],
      districtList: [],
      selectedCity: "",
      selectedDistrict: "",
      storeName: "",
      selectTab: true,
      storeList: []
    };
  }

  componentDidMount() {
    //10.58.2.22:8000/store/cities
    this.selectList("http://10.58.2.22:8000/store/cities", "city");
  }

  changeSelected = (id, type) => {
    console.log("StoreSearch changeSelected: ", id);

    // http://10.58.2.22:8000/store/districts?city=${id}

    if (type === "city") {
      // 선택 된 도/시 id
      this.setState({ selectedCity: id });
      // 도/시 선택 후 구/군 리스트 목록 저장하기
      this.selectList(
        `http://10.58.2.22:8000/store/districts?city=${id}`,
        "district"
      );
    } else if (type === "district") {
      // 선택 된 구/군 id
      this.setState({ selectedDistrict: id });
    }
  };

  changeSelectedDistrict = value => {
    console.log("StoreSearch changeSelectedDistrict: ", value);
    this.setState({ selectedDistrict: value });
    // http://10.58.2.22:8000/store/districts?city=${value}
  };

  selectList = (url, type) => {
    console.log("call");
    fetch(url, {
      method: "GET"
      // body: JSON.stringify({
      //   email: this.state.id,
      //   password: this.state.pw
      // })
    })
      .then(response => response.json())
      .then(res => {
        console.log("res: ", res);
        if (type === "city") {
          this.setState((this.state.cityList = res.cities));
        } else if (type === "district") {
          this.setState((this.state.districtList = res.districts));
        }
      });
    // .then(this.props.history.push("/"));
  };

  changeTab = () => {
    this.setState({ selectTab: !this.state.selectTab });
  };

  onChangeStoreName = e => {
    this.setState({ storeName: e.target.value });
  };

  render() {
    console.log("select:", this.state.selectTab);
    console.log("selected district: ", this.state.selectedDistrict);
    console.log("selected city: ", this.state.selectedCity);

    const { selectedCity, selectedDistrict, storeName } = this.state;
    return (
      <div className="store-search">
        <nav className="header">
          <ul>
            <li onClick={() => this.changeTab()} class="find-store-tab">
              <span>매장찾기</span>
            </li>
            <li class="favorite-store-tab">
              <span>자주가는 매장</span>
            </li>
          </ul>
        </nav>
        {this.state.selectTab ? (
          // 매장찾기 버튼
          <div>
            <form className="form" action="">
              <fieldset>
                <legend>매장 찾기</legend>
                <div class="location-wrapper">
                  <SelectBox
                    defaultText="도/시 선택"
                    list={this.state.cityList}
                    itemId="id"
                    itemName="name"
                    widthSize="113"
                    heightSize="32"
                    changeSelected={this.changeSelected}
                    type="city"
                  />

                  <SelectBox
                    defaultText="구/군 선택"
                    list={this.state.districtList}
                    itemId="id"
                    itemName="name"
                    widthSize="118"
                    heightSize="32"
                    changeSelected={this.changeSelected}
                    type="district"
                  />
                </div>
                <div className="name">
                  <input
                    className="name-input"
                    name="storeName"
                    placeholder="매장명"
                    onChange={this.onChangeStoreName}
                    value={this.state.storeName}
                    type="text"
                  />
                </div>
                <div className="option">
                  <input
                    className="option-input"
                    placeholder="옵션 (매장별 서비스)"
                    type="text"
                  />
                </div>
                <div className="search">
                  <button
                    className="search-button"
                    type="submit"
                    onClick={event => {
                      event.preventDefault();
                      this.props.onSubmit(
                        selectedCity,
                        selectedDistrict,
                        storeName
                      );
                      // 메인 페이지로 전환
                      //this.props.history.push('/main');
                    }}
                  >
                    검색
                  </button>
                </div>
              </fieldset>
            </form>
            <div className="info">
              <img src="http://www.baskinrobbins.co.kr/assets/images/store/ico_favorite.png" />
              <span>클릭하여 자주가는 매장을 등록하세요</span>
            </div>
            <div className="total">
              <span>
                총 <strong>0</strong>건 검색되었습니다.
              </span>
            </div>
          </div>
        ) : (
          // 자주가는 매장 버튼
          <div className="favorite-box">
            <p>
              로그인을 하시면
              <br />
              자주가는 매장 정보를 확인 하실 수 있습니다.
            </p>
            <a href="">LOG IN</a>
          </div>
        )}

        <div className="list">
          <div className="scroll">
            <ul>
              <Store />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
