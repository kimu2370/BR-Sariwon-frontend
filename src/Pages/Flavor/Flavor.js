import React, { Component } from "react";
import Nav from "Components/Flavor/Nav";
import "Pages/Flavor/flavor.scss";
import ImgEffecter from "Components/Flavor/ImgEffecter";
// import Layout from "Pages/Layout/Layout";
class Flavor extends Component {
  constructor() {
    super();
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.interValID = null;
    this.state = {
      section: [this.section1, this.section2, this.section3, this.section4],
      moveIceCream: "move-icecream",
      effectIceCream: "effect-icecream",
      count: -1,
      reachTop: false
    };
    this.imgSrc = [];
    for (let i = 1; i < 26; i++) {
      if (i < 10) {
        this.imgSrc.push(
          `https://www.baskinrobbins.co.kr/assets/images/flavoer/fom_03_0000${i}.png`
        );
      } else {
        this.imgSrc.push(
          `https://www.baskinrobbins.co.kr/assets/images/flavoer/fom_03_000${i}.png`
        );
      }
    }
  }

  handleMoveIceCream = inputArg => {
    if (!inputArg) {
      //move-icecream down
      this.setState({ moveIceCream: "move-icecream down" });
      setTimeout(() => {
        const intervalID = setInterval(() => {
          if (this.state.count < 25) {
            this.setState({
              count: this.state.count + 1
            });
          } else {
            clearInterval(intervalID);
          }
        }, 100);
      }, 1000);
    } else {
      this.setState({ moveIceCream: inputArg, count: -1 });
    }
  };

  render() {
    const { section, moveIceCream, count, effectIceCream } = this.state;
    return (
      // <Layout>
      <div className="flavor-container">
        <div className="move">
          <Nav
            section={section}
            moveIceCream={moveIceCream}
            onChange={this.handleMoveIceCream}
          />
          <section ref={this.section1} className="section area1">
            <div className="in-wrap">
              <span className={moveIceCream}>
                <img
                  src="https://www.baskinrobbins.co.kr/assets/images/flavoer/ice_img.png"
                  alt=""
                />
              </span>
              <span className="material">
                <img
                  src="https://www.baskinrobbins.co.kr/assets/images/flavoer/ice_material.png"
                  alt=""
                />
              </span>
              <span className="side-img01">
                <img
                  src="https://www.baskinrobbins.co.kr/assets/images/flavoer/side_img_01.png"
                  alt=""
                />
              </span>
            </div>
          </section>
          <section ref={this.section2} className="section area2">
            <div className="in-wrap">
              <div className="effect-img">
                {this.imgSrc.map((item, i) => {
                  return (
                    <ImgEffecter
                      key={i + 1}
                      active={i + 1 === count ? "active" : ""}
                      imgSrc={item}
                      imgClass={effectIceCream}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section ref={this.section3} className="section area3">
            <div className="in-wrap">
              <span className="side-img02">
                <img src="https://www.baskinrobbins.co.kr/assets/images/flavoer/side_img_02.png"></img>
              </span>
            </div>
          </section>
          <section ref={this.section4} className="section area4"></section>
        </div>
      </div>
      // </Layout>
    );
  }
}

export default Flavor;
