import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Detail from "../../pages/Detail";
import Position from "../../pages/Position";

// exact: 精准匹配
// Switch组价需要包裹在BrowserRouter中
class BasicRoute extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route path="/detail" exact component={Position}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BasicRoute;
