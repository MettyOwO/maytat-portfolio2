import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Mr.Maytat Thipsuwan</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          Hellom My name is Maytat Thipsuwan.  I’m an Network Engineer. I'm still a beginner now but will try to hard work. 
          I'm an easy going person, and use his free time to study about the network system. For the future, I might be 
          able to work in a big company and will have time to rest from studying I will play games to relax.
          I hope to work together.
        </p>
        <img
                src="images/facesmile.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
      </div>
      
    );
  }
}

export default Aboutme;
