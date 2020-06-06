import React, { Component } from "react";
import { List, NavBar, Flex, Button, WingBlank } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goto() {
    this.props.history.push("/record");
  }

  render() {
    return (
      <div>
        <Flex>
          <Flex.Item>
            <NavBar style={{ backgroundColor: "#1c2d66" }}>查看详情</NavBar>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List>
              <Item>维修时间：2020-05-20</Item>
              <Item>维修员：李明</Item>
              <Item>破损原因：玻璃破碎</Item>
              <Item>维修结果：已更换新玻璃</Item>
              <Item>
                维修前后对比：
                <br />
                <img
                  src={require("../../static/imgs/break.jpg")}
                  style={{
                    width: 150,
                    height: 150,
                    marginRight: 20,
                    marginTop: 15,
                  }}
                />
                <img
                  src={require("../../static/imgs/break.jpg")}
                  style={{ width: 150, height: 150, marginTop: 15 }}
                />
              </Item>
            </List>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <WingBlank>
              <Button
                style={{
                  backgroundColor: "#1c2d66",
                  color: "#ffffff",
                  marginBottom: 50,
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

export default withRouter(ServiceItem);
