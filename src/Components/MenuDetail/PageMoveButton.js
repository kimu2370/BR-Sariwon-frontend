import React, { Component } from "react";
import "Components/MenuDetail/pageMoveButton.scss";
class PageMoveButton extends Component {
  state = {
    movePX: 0
  };
  //컴포넌트가 랜더링되면 window를 기준으로 스크롤 이벤트 등록
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  //컴포넌트가 화면에서 사라질 때 scroll 이벤트를 제거한다.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    scrollTop &&
      this.setState({
        movePX: scrollTop
      });
  };
  // 만약에 페이지를 넘겨야 하면 prev에는 i-1을 endpoint에 넘겨줘야 하고, next에는 i+1을 넘겨줘야 한다.
  render() {
    const { list, filteredListIndexForMove } = this.props;
    const indexArray = filteredListIndexForMove();

    /*  indexArray[0] =  전 페이지 인덱스,
        indexArray[1] = 현 페이지 인덱스,
        indexArray[1] = 다음 페이지 인덱스 
    */

    return (
      <div
        className="page-move-btn"
        style={{
          top: `${460 + this.state.movePX}px`,
          transition: "all 1s"
        }}
      >
        <ul>
          {/* 현 페이지 인덱스가 0이 아니면 < 버튼 나옴*/}
          {typeof indexArray === "object" &&
            indexArray.length > 0 &&
            indexArray[1] !== 0 && (
              <li
                className="prev-btn"
                onClick={() => this.props.navPrev(list[indexArray[0]].id)}
              >
                <div className="btn">
                  <div className="btn-on">
                    <span className="image">
                      <img
                        src={
                          typeof indexArray === "object" &&
                          indexArray.length > 0 &&
                          list[indexArray[0]].thumbnail
                        }
                        alt=""
                      ></img>
                    </span>
                    <span className="title">
                      {typeof indexArray === "object" &&
                        indexArray.length > 0 &&
                        list[indexArray[0]].name}
                    </span>
                  </div>
                </div>
              </li>
            )}
          {/* 현 페이지 인덱스가 마지막이면 > 버튼 나옴*/}
          {typeof indexArray === "object" &&
            indexArray.length > 0 &&
            indexArray[1] !== list.length - 1 && (
              <li
                className="next-btn"
                onClick={() => this.props.navNext(list[indexArray[2]].id)}
              >
                <div className="btn">
                  <div className="btn-on">
                    <span className="image">
                      <img
                        src={
                          typeof indexArray === "object" &&
                          indexArray.length > 0 &&
                          list[indexArray[2]].thumbnail
                        }
                        alt=""
                      ></img>
                    </span>
                    <span className="title">
                      {typeof indexArray === "object" &&
                        indexArray.length > 0 &&
                        list[indexArray[2]].name}
                    </span>
                  </div>
                </div>
              </li>
            )}
        </ul>
      </div>
    );
  }
}

export default PageMoveButton;
