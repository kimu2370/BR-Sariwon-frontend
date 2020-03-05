import React, { Component } from "react";
import "Pages/FindStore/FindStore.scss";
import StoreSearch from "Components/FindStore/StoreSearch";

class FindStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      gu: "",
      storeList: [],
      markers: []
    };
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    let container = document.getElementById("map");
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.4960817, 127.027939), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    // var clusterer = new window.kakao.maps.markerClusterer({
    //   map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    //   averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    //   minLevel: 10 // 클러스터 할 최소 지도 레벨
    // });
    this.map = new window.kakao.maps.Map(container, options);

    this.getStores();
  };

  // 초기 매장 리스트 가져오기
  getStores = clusterer => {
    fetch("http://10.58.2.22:8000/store", {
      method: "GET"
      // body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log("Success:", response);
        response.stores.map(store => {
          console.log(store.longitude, store.latitude);
          // return new window.kakao.maps.marker({
          //   position: new window.kakao.maps.LatLng(
          //     store.latitude,
          //     store.longitude
          //   )
          // });
          this.addMarker(this.map, store.longitude, store.latitude);
        });
        // clusterer.addMarkers(markers);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    // 마커가 지도 위에 표시되도록 설정합니다
  };

  addMarker = (map, long, lat) => {
    var imageSrc =
        "https://cdn2.iconfinder.com/data/icons/junk-food/450/Icecream-512.png", // 마커이미지의 주소입니다
      imageSize = new window.kakao.maps.Size(54, 59), // 마커이미지의 크기입니다
      imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    let markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    let markerPosition = new window.kakao.maps.LatLng(long, lat);
    // 마커를 생성합니다
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage
    });
    this.state.markers.push(marker);
    console.log("marker?: ", marker);
    marker.setMap(map);
  };

  // 매장 검색 버튼 클릭 시
  onSubmit = (city, district, name) => {
    // this.state.markers.setMap(map);
    // 마커 전부 지우기
    this.state.markers.map(marker => marker.setMap(null));
    this.state.markers = [];
    console.log("markers: ", this.state.markers);
    fetch(
      `http://10.58.2.22:8000/store/stores?city=${city}&district=${district}&store=${name}`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log("submit response:", response.stores);
        let cnt = 0;
        response.stores.map(store => {
          console.log("store: ", store.longitude, store.latitude);
          this.addMarker(this.map, store.longitude, store.latitude);
          var moveLatLon = new window.kakao.maps.LatLng(
            store.longitude,
            store.latitude
          );
          if (cnt === response.stores.length - 2) {
            // 지도 중심을 이동 시킵니다
            this.map.panTo(moveLatLon);
          }
          cnt++;
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="find-store-container">
        <div id="map"></div>
        <StoreSearch onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default FindStore;
