import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

   //will return the component that needs to be rendered based on current selection
   findPage(){
     const { currentPage } = this.state;
     if (currentPage === "Home") {
       return <Home/>;
     } else if (currentPage === " About"){
       return <About/>;
     } else if ( currentPage === "Blog"){
       return<Blog/>;
     }
     return <Contact/>;
     }
     componentMap = {
       "Home": <Home/>,
       "About": <About/>
     };

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />


        Based on `this.state.currentPage`, render the appropriate component
        here.
       {this.findPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
