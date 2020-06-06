import React, { Component } from "react";
import { NavBar, Flex, Button, WingBlank } from "antd-mobile";
import { withRouter } from "react-router-dom";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goto() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Flex>
          <Flex.Item>
            <NavBar style={{ backgroundColor: "#1c2d66" }}>维修结果</NavBar>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <img
              src={require("../static/imgs/success.png")}
              style={{ marginTop: 30, marginLeft: 125 }}
            />
            <div
              style={{
                fontSize: 18,
                marginLeft: 120,
                fontWeight: "blod",
                marginTop: 20,
              }}
            >
              该玻璃完成维修
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <WingBlank>
              <Button
                style={{
                  backgroundColor: "#1c2d66",
                  color: "#ffffff",
                  marginTop: 50,
                }}
                onClick={() => this.goto()}
              >
                返回
              </Button>
            </WingBlank>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default withRouter(Success);
