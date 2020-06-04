import React, { Component } from "react";
import Position from './Position';
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
} from "antd-mobile";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      status: props.status,
      showGoodElem: false,
      showServiceElem: true,
    };
  }

  render() {
    return (
      <div>
        <Flex>
          <Flex.Item>
            <NavBar style={{ backgroundColor: "#1e1e1e" }}>玻璃详情</NavBar>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item style={{ backgroundColor: "#ededed" }}>
            <Card>
              <Card.Body style={{ background: "" }}>
                <ul style={{}}>
                  <li>NO.5f-086</li>
                  <li>尺寸：1.36</li>
                  <li>材质: 钢化玻璃</li>
                  <li>位置：5f前向左侧第9列</li>
                  <li>状态：破损</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body style={{ backgroundColor: "#ffffff"}}>
                <Button 
                  style={{ float: "left", width: 100, height: 50, marginRight: 50}}
                  
                >
                  维修记录
                </Button>
                <Button
                 style={{ float: "left", width: 100, height: 50}}
                //  onClick={this.Position}
                 >
                  查看位置
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body style={{ backgroundColor: "#ffffff" }}>
                <List>
                  <InputItem value="姓名">维修员：</InputItem>
                  <InputItem value="手机号" type="phone">
                    联系电话：
                  </InputItem>
                  <DatePicker
                    value={this.state.date}
                    onChange={(date) => this.setState({ date })}
                  >
                    <List.Item arrow="horizontal">完成时间：</List.Item>
                  </DatePicker>
                </List>
              </Card.Body>
            </Card>
            <div style={{float: 'left', marginLeft: 20}}>
              <img src={require('../static/imgs/break.jpg')} style={{width: 150, height: 150, marginTop: 10, marginRight: 20}} />
            </div>
            <div>
              <ImagePicker  
                multiple={true}
                onImageClick={(index, fs) => console.log(index, fs)}
              ></ImagePicker>
              <span>点击上传维修后的照片</span>
            </div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Button style={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
              完成绘制
            </Button>
          </Flex.Item>
        </Flex>

        <Position></Position>
      </div>
    );
  }
}

export default Detail;
