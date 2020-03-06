import React, { Component } from "react";
import SelectBox from "Components/Common/SelectBox";
import AllergyItem from "./AllergyItem";
import Data from "./NavModalData";
import { withRouter } from "react-router-dom";
import { URL } from "config";
import "Components/Nav/nav-modal.scss";

class NavModal extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      // 검색 조건 리스트
      menu: [],
      allergy: [],
      tag: [],

      // 검색 조건
      searchCategory: "전체",
      searchProductName: "",
      searchAllergy: [],
      searchTag: ""
    };
  }

  componentDidMount() {
    this.menuList();
  }

  menuList = () => {
    fetch(`${URL}/product/searchbar`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        const { menu, allergy, tags } = response.search_data;
        console.log("searchbar response: ", tags);
        this.setState({
          menu: menu,
          allergy: allergy,
          tag: tags
        });
      })
      .then(response => console.log(response));
  };

  changeSelected = (id, name) => {
    console.log("name?: ", name);
    this.setState({ searchCategory: name });
  };

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeTag = value => {
    this.setState({ searchTag: value });
  };

  searchProduct = e => {
    e.preventDefault();
    const {
      searchCategory,
      searchProductName,
      searchAllergy,
      searchTag
    } = this.state;

    // 전체 카테고리 검색이면 빈 문자열을 담는다.
    let searchCategoryResult = searchCategory;
    searchCategoryResult === "전체" && (searchCategoryResult = "");
    let category = searchCategoryResult && `menu=${searchCategoryResult}&`;

    // 제품 이름
    let name = searchProductName && `product=${searchProductName}&`;

    // 태그의 #을 %23(아스키 코드)로 변경
    let searchTagResult = searchTag;
    let arr = searchTagResult.split("#");
    let toTag = arr[1] && "%23" + arr[1];
    let tagResult = searchTagResult && `tag=${toTag}&`;

    // ['계란', '콩']으로 저장된 배열을 allergy=계란&allergy=콩 형태의 문자열 로 변경
    let allergy = searchAllergy.map(item => item && `allergy=${item}&`);
    allergy = allergy.join("");

    this.searchFetch(category, name, allergy, tagResult);
  };

  searchFetch = (category, name, allergy, tag) => {
    console.log(
      "search address: ",
      `${URL}/product/product-search?${category}${name}${tag}${allergy}`
    );
    fetch(`${URL}/product/product-search?${category}${name}${tag}${allergy}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log("search response: ", response);
        this.props.history.push(
          `/itemlist?type=6&${category}${name}${tag}${allergy}`
        );
      })
      .then(response => console.log("search response:: ", response));
  };

  // 알러지 목록 추가
  addAllergy = (value, checked) => {
    const { searchAllergy } = this.state;
    checked
      ? // 버튼 클릭 시 알러지 목록에 추가
        searchAllergy.push(value)
      : // 버튼 다시 클릭 시 알러지 목록에서 삭제
        searchAllergy.splice(searchAllergy.indexOf(value), 1);

    // this.setState({ allergy:  }, () =>
    console.log("allergy: ", searchAllergy);
    // );
  };

  // input에 value만 정의하고 onChange 정의 안해줄때 에러 발생해서 임시로 만듬
  tagInputChanged = () => {};

  render() {
    const {
      searchCategory,
      searchProductName,
      searchAllergy,
      searchTag
    } = this.state;

    console.log("searchCategory: ", searchCategory);
    console.log("searchProductName: ", searchProductName);
    console.log("searchAllergy: ", searchAllergy);
    console.log("searchTag: ", searchTag);

    return (
      <div
        className="modal"
        style={
          this.props.isModalClicked ? { display: "block" } : { display: "none" }
        }
      >
        <div className="modal-content-wrapper">
          <form>
            <div className="modal-content">
              <div className="modal-content-top-wrapper">
                {/* product name */}
                <div className="product-name-wrapper">
                  <div className="product-title">제품명</div>
                  <SelectBox
                    defaultText="전체"
                    list={this.state.menu}
                    itemName="name"
                    widthSize="128"
                    heightSize="32"
                    type="product"
                    changeSelected={this.changeSelected}
                  />
                  <input
                    className="product-search-input"
                    type="text"
                    name="searchProductName"
                    onChange={this.changeText}
                  />
                </div>
                {/* hashtag */}
                <div className="hashtag-wrapper">
                  <div className="hashtag-title">
                    <span>해시태그</span>
                  </div>

                  <div className="hashtag-input-wrapper">
                    <input
                      className="hashtag-input"
                      type="text"
                      onChange={this.tagInputChanged}
                      value={this.state.searchTag}
                    />
                    <dl className="hashtag-inside-wrapper">
                      <dt className="hashtag-favorite-title">
                        자주 찾는 해시태그
                      </dt>

                      {this.state.tag.map((item, i) => (
                        <dd key={i}>
                          <div
                            className="hashtag-name"
                            href="#"
                            onClick={() => this.changeTag(item.name)}
                          >
                            {item.name}
                          </div>
                        </dd>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              {/* allergic */}
              <div className="allergic-wrapper">
                <div className="allergic-title">알레르기 성분</div>
                <div className="allergic-check-area">
                  {this.state.allergy.map((item, i) => (
                    <AllergyItem
                      key={i}
                      allergy={item.name}
                      addAllergy={this.addAllergy}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-submit-wrapper">
              <button
                className="modal-submit-button"
                type="submit"
                onClick={this.searchProduct}
              >
                검색
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NavModal);
