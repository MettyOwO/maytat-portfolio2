import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/Maytat_Profile2.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Mr.Maytat Thipsuwan</h2>
            <h4 style={{ color: "black" }}>I'm Network Engineer</h4>
            <h5>Age</h5>
            <p>22 Year Old</p>
            <h5>Address</h5>
            <p>337/1 Moo 1 Ratchadamnoen Road  Tambon Nai Mueang Amphoe Mueang Nakhon Si Thammarat 80000 (Thailand)</p>
            <h5>Hobby</h5>
            <p>-Play Computer</p><p>-Listen Music</p><p>-Play Piano</p>
            <h5>Download Resume CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1R0s9SLC4oa-jHTSZk0uuZakG0Jwc4cev/view?usp=share_link"
            >
              My Resume CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
 
            <Experience
              startYear={"6 Dec 2022"}
              endYear={"25 April 2023"}
              duration= {4}
              day={25}
              jobName={"Internship"}
              companyName={"G-Able Company (Thailand)"}
              jobDesc={[
                "Worked on Network Engineer (Layer 3 : Network Layer)",
                "Do about networking systems based on locations.",
                "and various tasks in the company"
              ]
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2023}
              schoolName={"King Mongkut's University Of Technology North Bangkok (KMUTNB)"}
              degreeName={"Electronic Engineering Technology (Computer Programming)"}
            />

            <Education
              startYear={2016}
              endYear={2019}
              schoolName={"Nakhon Si Thammarat Technical College (TNK)"}
              degreeName={"Electronic Technician"}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML"} progress={80} />
            <Skills skill={"PHP"} progress={50} />
            <Skills skill={"Java"} progress={70} />
            <Skills skill={"JavaScript"} progress={40} />
            <Skills skill={"C"} progress={80} />
            <Skills skill={"Python"} progress={65} />
            <Skills skill={"MySQL"} progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
