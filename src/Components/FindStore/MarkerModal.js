import React, { Component } from "react";
import { URL } from "config";
import "Components/FindStore/markerModal.scss";

/*
 * 마커 모달
 */
class MarkerModal extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: "",
      address: "",
      phone_number: "",
      business_time: "",
      service_info: [],
      store_info: [],
      cnt: this.props.cnt
    };
  }

  componentDidUpdate = prevProps => {
    // console.log(`modal request address: ${URL}/store/${this.props.modalId}`);
    // console.log("modalClicked: ", this.props.modalClicked);
    // console.log("cnt: ", this.state.cnt);
    if (prevProps !== this.props) {
      this.fetchStoreDetail();
    }
  };

  fetchStoreDetail() {
    fetch(`${URL}/store/${this.props.modalId}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log("modal detail data: ", response.store[0]);
        const {
          name,
          phone_number,
          business_time,
          service_info,
          store_info
        } = response.store[0];

        // 도/시 구/군 도로명 합치기
        let complete_address = `${response.store[0].city} ${response.store[0].district} ${response.store[0].street}`;
        this.setState({
          name: name,
          phone_number: phone_number,
          business_time: business_time,
          service_info: service_info,
          store_info: store_info,
          address: complete_address
        });
      });
  }

  render() {
    console.log("store??? ", this.name);
    const { modalClicked, modalId } = this.props;

    const {
      name,
      address,
      phone_number,
      business_time,
      service_info,
      store_info
    } = this.state;
    console.log("service_info: ", service_info);
    console.log("store_info: ", store_info);
    return (
      <>
        <div
          className={`marker-modal-wrapper${modalClicked ? " on" : ""}`}
        ></div>
        <div className={`container${modalClicked ? " on" : ""}`}>
          <div className="content">
            <header className="header">
              <h3>{name}</h3>
            </header>
            <div className="body">
              <div className="img">
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/dummy/img_mybr_store.png"
                  alt=""
                />
              </div>
              <dl className="info">
                <div className="info-inner-wrapper">
                  <dt>매장주소</dt>
                  <dd>{address}</dd>
                </div>
                <div className="info-inner-wrapper">
                  <dt>전화번호</dt>
                  <dd>{phone_number}</dd>
                </div>

                <div className="info-inner-wrapper">
                  <dt>운영시간2</dt>
                  <dd>{business_time}</dd>
                </div>

                <div className="info-service-wrapper">
                  <dt>Cafe Bris</dt>
                  <dd className="bris-list">
                    <ul>
                      {store_info.map(item => (
                        <li>
                          <span className={item.code === "C" ? "C" : "E"}>
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>

                <div className="info-service-wrapper">
                  <dt className="service-title">매장 서비스</dt>
                  <dd className="service-list">
                    <ul>
                      {service_info.map(item => {
                        if (
                          item.name !== "칭찬점포" &&
                          item.name !== "고객센터"
                        ) {
                          return (
                            <li>
                              <span className={item.code}>{item.name}</span>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="wrap">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <img
                        src="http://www.baskinrobbins.co.kr/assets/images/store/icon_praise.png"
                        alt=""
                      />
                    </dt>
                    <dd>
                      고객 BEST 칭찬 점포를 <br /> 소개합니다!
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt>
                      <img
                        src="http://www.baskinrobbins.co.kr/assets/images/store/icon_customer.png"
                        alt=""
                      />
                    </dt>
                    <dd>
                      고객의 소리를 <br /> 귀기울여 듣겠습니다.
                    </dd>
                  </dl>
                </li>
                {service_info.map(item => {
                  if (item.code === "D" || item.code === "A") {
                    return (
                      <li>
                        <dl>
                          <dt>
                            <img src={`${item.thumbnail_url}`} alt="" />
                          </dt>
                          <dd>{item.description}</dd>
                        </dl>
                      </li>
                    );
                  }
                })}
                {store_info.map(item => {
                  if (item.code === "C") {
                    return (
                      <li>
                        <dl>
                          <dt>
                            <img src={`${item.thumbnail_url}`} alt="" />
                          </dt>
                          <dd>{item.description}</dd>
                        </dl>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>

          <div className="close" onClick={() => this.props.closeModal(false)}>
            <img
              src="http://www.baskinrobbins.co.kr/assets/images/common/btn_pop_close.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default MarkerModal;
