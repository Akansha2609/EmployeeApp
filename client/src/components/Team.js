import React, { Component } from "react";
import myImage from '../images/image.jpg';
import '../Team.css'
class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2 className="headingAignment">Meet the Team </h2>
          <div className="ui divider"></div>
          {/* <h4>Amit Kumar</h4> */}
          {/* <ul> */}
            {
              
              items.map(item => (
                
                <h3 key={item.id}>
                  {/* {item.name} - {item.email} */}
                  {/* <img src={myImage} className="imagesize ui circular image" /> */}
                  <table className = " ui celled fixed single line">
                    <tr>
                        <td><img src={myImage} className="imagesizes ui circular image" /></td>
                        <td >{item.name}</td>
                    </tr>
                  </table>
                </h3>
              ))}
          {/* </ul> */}
        </div>

      );
    }
  }
}

export default Team;