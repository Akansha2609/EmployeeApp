import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About ReactJS </h2>
        <div className="ui divider"></div>
        <div>
          <h3>ReactJS</h3><p>React is a front-end library developed by Facebook</p>
          <div className="ui divider"></div>
          <h3>Redux</h3><p>Redux is quite an excellent State Managment Framework usually used with React.js library. In Single Page Application, data management at client side is far more complicated than just imagine. However, In React.js state management is possible, but when the application gets bigger and bigger, unwanted errors and data changes are detected, and which module has changed which state and which view is updated, all these matters get complex, and we feel like, we trapped in our application. Facebook gives the solution. Its developer has created one State management pattern called Flux.</p>
          <div className="ui divider"></div>
          <h3>Cucumber</h3><p>Cucumber is a Behaviour Driven Development (BDD) tool that allows you to write software requirements as specifications in a human-readable format, and use those specifications to run tests that make sure that the software does what is expected.</p>
          <div className="ui divider"></div>
<h3>Jest</h3><p>Jest is a delightful JavaScript Testing Framework with a focus on simplicity.</p>
        </div>
      </div>
    );
  }
}
 
export default About;