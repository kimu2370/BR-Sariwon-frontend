import React, { Component } from "react";
import "Components/Nav/nav-modal.scss";
import NavModalSelector from "./NavModalSelector";
import AllergicItem from "./AllergicItem";
const allergie = [
  {
    allergic: "계란"
  },
  {
    allergic: "대두"
  },
  {
    allergic: "돼지고기"
  },
  {
    allergic: "땅콩"
  },
  {
    allergic: "밀"
  },
  {
    allergic: "복숭아"
  },
  {
    allergic: "우유"
  },
  {
    allergic: "없음"
  }
];
class NavModal extends Component {
  render() {
    console.log("NavModal: isModalClicked: ", this.props.isModalClicked);
    console.log(allergie);
    return (
      <div
        className="modal"
        style={
          this.props.isModalClicked === true
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div className="modal-content-wrapper">
          <form
            action="
          "
          >
            <div className="modal-content">
              <div className="modal-content-top-wrapper">
                {/* product name */}
                <div className="product-name-wrapper">
                  <div className="product-title">제품명</div>
                  <NavModalSelector />
                  <input className="product-search-input" type="text" />
                </div>
                {/* hashtag */}
                <div className="hashtag-wrapper">
                  <div className="hashtag-title">
                    <span>해시태그</span>
                  </div>

                  <div className="hashtag-input-wrapper">
                    <input className="hashtag-input" type="text" />
                    <dl className="hashtag-inside-wrapper">
                      <dt className="hashtag-favorite-title">
                        자주 찾는 해시태그
                      </dt>
                      <dd>
                        <a className="hashtag-name" href="">
                          #아이스 킷캣
                        </a>
                        <a className="hashtag-name" href="">
                          #누가봐도 킷캣케이크
                        </a>
                        <a className="hashtag-name" href="">
                          #킷캣오리지널블라스트
                        </a>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              {/* allergic */}
              <div className="allergic-wrapper">
                <div className="allergic-title">알레르기 성분</div>
                <div className="allergic-check-area">
                  {allergie.map(item => (
                    <AllergicItem allergic={item.allergic} />
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-submit-wrapper">
              <button className="modal-submit-button" type="submit">
                검색
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NavModal;
