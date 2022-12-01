import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.htmlWeb = () => {
      window.location.assign("https://github.com/MettyOwO/Newbie-Project");
    };
    this.reactWeb = () => {
      window.location.assign("https://github.com/MettyOwO/WebReact_ByMetty");
    };
    this.quizApp = () => {
      window.location.assign("https://github.com/MettyOwO/quiz-app-beta");
    };
    this.restApi = () => {
      window.location.assign("https://github.com/MettyOwO/RestAPI");
    };

    
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/htmlprototype.png) center / cover",
                }}
              >
                Web-HTML
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a First Web HTML. Is a prototype website.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.htmlWeb.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">

            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/webreact.png) center / cover",
                }}
              >
                Web-React
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a Second Web made with React (JavaScript).
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.reactWeb.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/quizapp.png) center / cover",
                }}
              >
                Quiz-app-beta
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a Quiz Website win React (JavaScript).
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.quizApp.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/no-image.png) center / cover",
                }}
              >
                React RestAPI
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a React (JavaScript) Website About RestAPI.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.restApi.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML</Tab>
          <Tab>REACT</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
