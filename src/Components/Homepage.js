import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/Maytat_Profile.jpg"
                alt="Maytat"
              />
            </div>
            <div className="banner-text">
              <h1>Network Engineer</h1>
              <hr />
              <p>
                HTML | JAVA | C | PHP | MYSQL | PYTHON | JAVASCRIPT
              </p>
              <div className="social-links">
                
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/your.metkung1234/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                
                {/* GitHub */}
                <a
                  href="https://github.com/MettyOwO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
