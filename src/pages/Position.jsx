import React, { Component } from "react";
import * as Cesium from "cesium";

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  componentDidMount() {
    window.CESIUM_BASE_URL = '../cesium';
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMzYxYTk3My01YjI2LTRiZjktOGU5ZC00MDQxZTJjZTRkYmUiLCJpZCI6Mjg0NjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTEyNjM0NTh9.zXiMNn0iN0bPaIqze4z4OC50aiID0B8-2d59_LkV0QU";
    const viewer = new Cesium.Viewer("cesiumContainer", {
      // terrainProvider: Cesium.createWorldTerrain(),
      geocoder:false,
      homeButton:false,
      sceneModePicker:false,
      baseLayerPicker:false,
      navigationHelpButton:false,
      animation:false,
      timeline:false,
      fullscreenButton:true,
      vrButton:false
    });
    // 隐藏页面控件
    viewer._cesiumWidget._creditContainer.style.display="none";
    viewer.scene.globe.show = false;
    const pr = new Cesium.Cesium3DTileset({
      url: "http://cdn.lesuidao.cn/8/tileset.json",
    });
    viewer.scene.primitives.add(pr);
    // 定位
    viewer.zoomTo(pr);
  }

  render() {
    return <div id="cesiumContainer" style={{height: '50%', width: '94%'}}></div>;  
  }
}

export default Position;
