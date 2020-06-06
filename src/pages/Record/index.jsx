import React, { Component } from "react";
import { List, NavBar, Flex, Button, WingBlank } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

let data = [
  { time: "2020-05-20", worker: "李明" },
  { time: "2020-04-18", worker: "孙红" },
  { time: "2020-03-12", worker: "王丽" },
  { time: "2020-02-16", worker: "西人" },
  { time: "2020-01-20", worker: "古力" },
  { time: "2019-12-31", worker: "李明" },
  { time: "2019-10-20", worker: "孙红" },
  { time: "2019-09-27", worker: "孙红" },
  { time: "2019-07-02", worker: "李明" },
  { time: "2019-05-20", worker: "王丽" },
  { time: "2019-03-10", worker: "王丽" },
  { time: "2019-02-08", worker: "李明" },
];

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goto() {
    this.props.history.push("/record/serviceItem");
  }
  gotoDetail() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Flex>
          <Flex.Item>
            <NavBar style={{ backgroundColor: "#1c2d66" }}>维修记录</NavBar>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List>
              {data.map((item, index) => (
                <Item
                  key={data.toString()}
                  arrow="horizontal"
                  extra={"查看详情"}
                  multipleLine
                  onClick={() => this.goto()}
                >
                  {item.time} <Brief>{item.worker}</Brief>
                </Item>
              ))}
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
                onClick={() => this.gotoDetail()}
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

export default withRouter(Record);
