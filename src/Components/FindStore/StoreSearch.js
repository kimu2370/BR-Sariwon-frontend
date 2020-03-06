import React, { Component } from "react";
import SelectBox from "Components/Common/SelectBox";
import Store from "Components/FindStore/Store";
import { URL } from "config";
import "Components/FindStore/StoreSearch.scss";
/*
 * 매장 검색 탭
 */
export default class StoreSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 도/시 선택 리스트
      cityList: [],
      // 구/군 선택 리스트
      districtList: [],
      selectedCity: "",
      selectedDistrict: "",
      selectedDistrictName: "구/군 선택",
      storeName: "",
      selectTab: true,
      storeList: []
    };
    this.cnt = 0;
  }

  componentDidMount() {
    //10.58.2.22:8000/store/cities
    this.selectList(`${URL}/store/cities`, "city");
  }

  changeSelected = (id, name, type) => {
    console.log("StoreSearch changeSelected: ", id);

    // http://10.58.2.22:8000/store/districts?city=${id}

    if (type === "city") {
      // 선택 된 도/시 id
      this.setState({
        selectedCity: id,
        selectedDistrictName: "구/군 선택",
        selectedDistrict: ""
      });
      // 도/시 선택 후 구/군 리스트 목록 저장하기
      let cityId = id ? `city=${id}` : "";
      this.selectList(`${URL}/store/districts?${cityId}`, "district");
    } else if (type === "district") {
      // 선택 된 구/군 id
      this.setState({ selectedDistrict: id, selectedDistrictName: name });
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
    console.log("selectedTab:", this.state.selectTab);
    console.log("selected district: ", this.state.selectedDistrict);
    console.log("selected city: ", this.state.selectedCity);
    console.log("list: ", this.props.storeList);

    const { selectedCity, selectedDistrict, storeName } = this.state;
    return (
      <div className="store-search">
        <nav className="header">
          <ul>
            <li onClick={() => this.changeTab()} className="find-store-tab">
              <span>매장찾기</span>
            </li>
            <li className="favorite-store-tab">
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
                <div className="location-wrapper">
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
                    defaultText={this.state.selectedDistrictName}
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
                총 <strong>{this.props.storeAmount}</strong>건 검색되었습니다.
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
            <a href="#">LOG IN</a>
          </div>
        )}

        {/* 매장 검색 스크롤 리스트 */}
        <div className="list">
          <div className="scroll">
            <ul>
              {this.props.storeList.map((item, i) => {
                let address = `${item.city__name} ${item.district__name} ${item.street_name}`;
                return (
                  <Store
                    key={i}
                    number={i + 1}
                    name={item.name}
                    storeCode={item.store_code}
                    address={address}
                    businessTime={item.business_time__time}
                    phoneNumber={item.phone_number}
                    lat={item.latitude}
                    lng={item.longitude}
                    moveStore={this.props.moveStore}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
