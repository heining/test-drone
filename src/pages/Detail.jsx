/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Position from "./Position";
import { withRouter } from "react-router-dom";
// 按需加载
import {
  Flex,
  NavBar,
  Button,
  Card,
  List,
  InputItem,
  ImagePicker,
  DatePicker,
  WingBlank,
  WhiteSpace
} from "antd-mobile";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showElem: false,
    };
  }
  
  // 路由跳转
  goto() { 
    this.props.history.push("/record");
  }
  gotoSuccess() {
    this.props.history.push("/success");
  }

  render() {
    return (
      <div>
        <Flex>
          <Flex.Item>
            <NavBar style={{ backgroundColor: "#1c2d66" }}>玻璃详情</NavBar>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <WingBlank size="lg">
              <WhiteSpace size="lg" />
              <div style={{ position: "relative" }}>
                <img
                  src={require("../static/imgs/bg.jpg")}
                  style={{ width: "100%", borderRadius: 18}}
                />
                <div style={{ position: "absolute", marginTop: -150 }}>
                  <ul
                    style={{
                      listStyle: "none",
                      fontWeight: "bold",
                      color: "#ffffff"
                    }}
                  >
                    <li style={{ fontSize: 20 }}>NO.5f-086</li>
                    <br />
                    <li>尺寸：1.36</li>
                    <li>材质: 钢化玻璃</li>
                    <li>位置：5f前向左侧第9列</li>
                    <li>状态：破损</li>
                  </ul>
                </div>
              </div>
              <WhiteSpace size="lg" />
              <div
                style={{
                  height: 50,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                }}
              >
                <a
                  style={{
                    fontSize: 18,
                    float: "left",
                    marginTop: 15,
                    marginLeft: 55,
                  }}
                  onClick={() => this.goto()}
                >
                  维修记录
                </a>
                <a
                  style={{
                    float: "left",
                    marginLeft: 80,
                    fontSize: 18,
                    marginTop: 15,
                  }}
                  onClick={(e) => {
                    this.setState({ showElem: "true" });
                  }}
                >
                  查看位置
                </a>
              </div>
              <WhiteSpace size="lg" />
              <Card>
                <Card.Body style={{ backgroundColor: "#ffffff" }}>
                  <InputItem placeholder="姓名">维修员：</InputItem>
                  <InputItem placeholder="手机号" type="phone">
                    联系电话：
                  </InputItem>
                  <DatePicker
                    value={this.state.date}
                    onChange={(date) => this.setState({ date })}
                  >
                    <List.Item arrow="horizontal">完成时间：</List.Item>
                  </DatePicker>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
              <div style={{ float: "left", marginLeft: 20 }}>
                <img
                  src={require("../static/imgs/break.jpg")}
                  style={{
                    width: 150,
                    height: 150,
                    marginRight: 20,
                    marginBottom: 20,
                  }}
                />
              </div>
              <div>
                <ImagePicker
                  onImageClick={(index, fs) => console.log(index, fs)}
                  length={1}
                ></ImagePicker>
                {/* <span>点击上传维修后的照片</span> */}
              </div>
            </WingBlank>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <WingBlank>
              <Button
                style={{ backgroundColor: "#1c2d66", color: "#ffffff" }}
                onClick={() => this.gotoSuccess()}
              >
                故障申报
              </Button>
            </WingBlank>
          </Flex.Item>
        </Flex>
        {this.state.showElem ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              display: "flex",
              height: "100%",
              alignItems: "center",
              zIndex: 2,
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <Position></Position>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withRouter(Detail);
