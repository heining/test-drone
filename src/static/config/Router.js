import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "../../pages/Detail";
import Record from "../../pages/Record/index";
import ServiceItem from "../../pages/Record/ServiceItem";
import Success from "../../pages/Success";

// exact: 精准匹配(?)
// Switch组价需要包裹在BrowserRouter中
class BasicRoute extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Detail}></Route>
          <Route exact path="/record" component={Record}></Route>
          <Route path="/record/serviceItem" component={ServiceItem}></Route>
          <Route path="/success" component={Success}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BasicRoute;
