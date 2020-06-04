import React, { Component } from "react";
import * as Cesium from "cesium";

class Position extends Component {
  constructor() {
    super();
    this.state = {};
  } 

  componentDidMount() {
    window.CESIUM_BASE_URL = 'http://localhost:3000/';
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZTQyOGE3NC05ZGVjLTQ3MTQtYTllMS0xMTRhZDIxNGI1MGIiLCJpZCI6Mjg0NjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTExMzQ1NTd9.K4jMRQb_0OxFlVj-RSyuKKVuRnhV-NnX6yNsbLzjVy0";
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain()
    });
    // 添加贴图
    const tileset = new Cesium.Cesium3DTileset({
      url:
        "https://lab.earthsdk.com/model/702aa950d03c11e99f7ddd77cbe22fea/tileset.json",
    });
    const pr = new Cesium.Cesium3DTileset({
      url: "http://cdn.lesuidao.cn/prds3/tileset.json",
    });
    viewer.scene.primitives.add(tileset);
    viewer.scene.primitives.add(pr);
    // 定位
    viewer.zoomTo(tileset);
  }

  render() {
    return <div id="cesiumContainer"></div>;
  }
}

export default Position;
