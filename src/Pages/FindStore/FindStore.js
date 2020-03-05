import React, { Component } from "react";
import StoreSearch from "Components/FindStore/StoreSearch";
import MarkerModal from "Components/FindStore/MarkerModal";
import { URL } from "config";
import "Pages/FindStore/FindStore.scss";

const imageSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png";

/*
 * 매장 찾기 페이지
 */
class FindStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      gu: "",
      storeList: [],
      markers: [],
      storeAmount: 0,

      // 매장 검색 후 이동할 좌표
      moveLong: 0,
      moveLat: 0,
      name: "",
      address: "",
      phone: "",
      businessTime: "",
      modalClicked: false
    };
    this.marker = "";
    // 마커이미지의 크기
    this.imageSize = new window.kakao.maps.Size(40, 40);
    // 마커이미지의 옵션- 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
    this.imageOption = { offset: new window.kakao.maps.Point(20, 20) };

    this.markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      this.imageSize,
      this.imageOption
    );
    this.lastOverlay = "";
    this.overlays = [];
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    let container = document.getElementById("map");
    //지도를 생성할 때 필요한 기본 옵션
    let options = {
      //지도의 중심좌표.
      center: new window.kakao.maps.LatLng(37.4960817, 127.027939),
      //지도의 레벨(확대, 축소 정도)
      level: 3
    };
    this.map = new window.kakao.maps.Map(container, options);
    this.clusterer = new window.kakao.maps.MarkerClusterer({
      // 마커들을 클러스터로 관리하고 표시할 지도 객체
      map: this.map,
      // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      averageCenter: true,
      // 클러스터 할 최소 지도 레벨
      minLevel: 5
    });

    this.getStores(this.clusterer);
  };

  // 초기 매장 리스트 가져오기
  getStores = clusterer => {
    fetch(`${URL}/store`, {
      method: "GET"
      // body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log("Success:", response);

        this.setState({
          storeList: response.stores,
          storeAmount: response.stores.length,
          markers: response.stores.map(store => {
            return (this.marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                store.longitude,
                store.latitude
              ),
              image: this.markerImage
              // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              // clickable: true
            }));
            // this.addMarker(this.map, store.longitude, store.latitude);
          })
        });

        // 마커 저장된 배열 불러와서 각 마커에 클릭 이벤트 등록
        this.state.markers.map(
          (
            marker,
            i // 마커에 클릭이벤트를 등록합니다
          ) => {
            const {
              name,
              city,
              district,
              street,
              phone_number,
              business_time
            } = this.state.storeList[i];
            const address = `${city} ${district} ${street}`;
            console.log("storelist:: ", name);

            // 마커 위에 커스텀오버레이를 표시
            let content = `
            <div class="customoverlay">
                <div class="title">${name}</div>
                <div class="close" onClick="closeOverlay()">x</div>
                <div class="body">
                  <div class="wrapper">
                   <div class="th">주소</div><div class="td">${address}</div>
                  </div>
                  <div class="wrapper">
                    <div class="th">연락처</div><div class="td">${phone_number}</div>
                  </div>
                  <div class="wrapper">
                    <div class="th">운영시간</div><div class="td">${business_time}</div>
                  </div>
                </div>
              <div class="bottom" onClick="openModal()">
                  <img class="more-image" src=http://www.baskinrobbins.co.kr/assets/images/store/ico_more.png />
                  <div>more</div>
              <div>
            </div>
            `;

            let overlay = new window.kakao.maps.CustomOverlay({
              content: content,
              map: this.map,
              position: marker.getPosition(),
              yAnchor: 1.15
            });

            this.overlays.push(overlay);

            // 새로운 마커 클릭 시 이전 마커 팝업창 지우기 위해 이전 오버레이를 저장
            this.lastOverlay = overlay;

            // 처음에 팝업 뜨지 않게 null
            overlay.setMap(null);

            //마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            window.kakao.maps.event.addListener(marker, "click", () => {
              // 이전 팝업 삭제
              this.lastOverlay.setMap(null);
              // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
              // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
              function closeOverlay() {
                console.log("closed!!", overlay);
                overlay.setMap(null);
              }
              // 매장 상세 모달 창
              const openModal = () => {
                this.setState({ modalClicked: !this.state.modalClicked }, () =>
                  console.log("openModal(): ", this.state.modalClicked)
                );
              };

              // 함수를 전역 window로
              window.closeOverlay = closeOverlay;
              window.openModal = openModal;

              overlay.setMap(this.map);
              this.lastOverlay = overlay;
            });
          }
        );

        // 마커가 지도 위에 표시되도록 설정
        clusterer.addMarkers(this.state.markers);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  // 매장 검색 버튼 클릭
  onSubmit = (city, district, name) => {
    // 이전의 커스텀 오버레이(팝업창) 삭제
    this.overlays = [];
    this.lastOverlay.setMap(null);
    this.lastOverlay = null;

    let cityResult = city ? `city=${city}` : "";
    let districtResult = district ? `district=${district}` : "";
    let nameResult = name ? `store=${name}` : "";
    fetch(`${URL}/store/stores?${cityResult}&${districtResult}&${nameResult}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          storeList: response.stores,
          storeAmount: response.stores.length,
          markers: response.stores.map(store => {
            this.lat = store.latitude;
            this.long = store.longitude;

            // 새로운 마커 추가
            return new window.kakao.maps.Marker({
              image: this.markerImage,
              position: new window.kakao.maps.LatLng(
                store.longitude,
                store.latitude
              )
            });
          })
        });

        /////////////////////////////////////////////////////
        // 클릭 이벤트 등록
        this.state.markers.map(
          (
            marker,
            i // 마커에 클릭이벤트를 등록합니다
          ) => {
            const {
              name,
              city,
              district,
              street,
              phone_number,
              business_time
            } = this.state.storeList[i];
            const address = `${city} ${district} ${street}`;
            console.log("storelist:: ", name);

            // 마커 위에 커스텀오버레이를 표시
            let content = `
            <div class="customoverlay" onClick="closeOverlay()">
            <div class="title">${name}</div>
            <div class="close" onClick="closeOverlay()">x</div>
                <div class="body">
                  <div class="wrapper">
                  <div class="th">주소</div><div class="td">${address}</div>
                  </div>
                  <div class="wrapper">
                    <div class="th">연락처</div><div class="td">${phone_number}</div>
                  </div>
                  <div class="wrapper">
                    <div class="th">운영시간</div><div class="td">${business_time}</div>
                  </div>
                </div>
              <div class="bottom" onClick="openModal()">
                  <img class="more-image" src=http://www.baskinrobbins.co.kr/assets/images/store/ico_more.png />
                  <div>more</div>
              <div>
            </div>
            `;

            let overlay = new window.kakao.maps.CustomOverlay({
              content: content,
              map: this.map,
              position: marker.getPosition(),
              yAnchor: 1.15
            });

            this.overlays.push(overlay);

            // 새로운 마커 클릭 시 이전 마커 팝업창 지우기 위해 이전 오버레이를 저장
            this.lastOverlay = overlay;

            // 처음에 팝업 뜨지 않게 null
            overlay.setMap(null);

            //마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            window.kakao.maps.event.addListener(marker, "click", () => {
              // 이전 팝업 삭제
              this.lastOverlay.setMap(null);
              // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
              // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
              function closeOverlay() {
                console.log("closed!!", overlay);
                overlay.setMap(null);
              }

              // 매장 상세 모달 창
              const openModal = () => {
                this.setState({ modalClicked: !this.state.modalClicked }, () =>
                  console.log("openModal(): ", this.state.modalClicked)
                );
              };

              // 함수를 전역 window로
              window.closeOverlay = closeOverlay;
              window.openModal = openModal;

              console.log("clicked!", overlay);
              overlay.setMap(this.map);
              this.lastOverlay = overlay;
            });
          }
        );
        /////////////////////////////////

        // 클러스터러에 마커들을 추가
        this.clusterer.clear();
        this.clusterer.addMarkers(this.state.markers);
        // 이동할 위도 경도 위치를 생성
        var moveLatLon = new window.kakao.maps.LatLng(this.long, this.lat);
        // 지도 중심을 부드럽게 이동
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
        this.map.panTo(moveLatLon);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  moveStore = (lat, lng, number) => {
    // console.log("object", lat, lng);

    // 이동할 위도 경도 위치를 생성
    var moveLatLon = new window.kakao.maps.LatLng(lng, lat);

    // 이전 팝업창 닫기
    this.lastOverlay.setMap(null);
    this.overlays[number].setMap(this.map);
    this.lastOverlay = this.overlays[number];

    // 리스트의 매장을 클릭했다가 팝업창을 다시 닫을 수 있도록 함수를 정의해 준다.
    const closeOverlay = () => {
      this.lastOverlay.setMap(null);
    };
    // 함수를 전역 window로
    window.closeOverlay = closeOverlay;

    // 해당 좌표로 부드럽게 이동
    this.map.panTo(moveLatLon);
  };

  // 마커 모달 창 닫기
  closeModal = value => {
    this.setState({ modalClicked: value });
  };

  render() {
    const { modalClicked } = this.state;
    console.log("FindStore modalClicked: ", modalClicked);
    return (
      <div className="find-store-container">
        <div id="map"></div>
        <StoreSearch
          onSubmit={this.onSubmit}
          storeList={this.state.storeList}
          storeAmount={this.state.storeAmount}
          moveStore={this.moveStore}
        />
        <MarkerModal modalClicked={modalClicked} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default FindStore;
