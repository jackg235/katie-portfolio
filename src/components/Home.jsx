import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import Navbar from "./Navbar";
import "../static/stylesheets/Home.css";
import "../static/stylesheets/Projects.css";
import moorestown from "../static/images/moorestown-logo.png";
import lehigh from "../static/images/lehigh.png";
import pinelands from "../static/images/pinelands.png";
import trhc from "../static/images/tabularasa.png";
import cooper from "../static/images/cooper.png";
import engin from "../static/images/engin.png";
import mentor from "../static/images/mentor.png";
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: this.getEducation(),
      experience: this.getWorkExperience(),
      volunteer: this.getVolunteerExperience()
    };
  }

  educationGenerator = () => {
    return (
      <div>
        {this.state.education.map((val) => (
          <div class="card mb-4">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">
                <b>{val.title}</b>
              </h5>
              <h6 className="card-text">{val.subtitle}</h6>
              <img src={val.image} class={val.image_class} alt=""></img>
              <p className="card-text">
                {val.date} • GPA: {val.gpa}
              </p>
              <p className="card-text">{val.p1}</p>
              <p className="card-text">{val.p2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  experienceGenerator = () => {
    return (
      <div>
        {this.state.experience.map((val) => (
          <div class="card mb-4">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">
                <b>{val.title}</b>
              </h5>
              <img src={val.image} class={val.image_class} alt=""></img>
              <p className="card-text">
                {val.date} • {val.loc}
              </p>
              <p className="card-text">{val.p1}</p>
              <p className="card-text">{val.p2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  volunteerGenerator = () => {
    return (
      <div>
        {this.state.volunteer.map((val) => (
          <div class="card mb-4">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">
                <b>{val.title}</b>
              </h5>
              <img src={val.image} class={val.image_class} alt=""></img>
              <p className="card-text">
                {val.date} • {val.loc}
              </p>
              <p className="card-text">{val.p1}</p>
              <p className="card-text">{val.p2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="home">
        <Navbar />
        <ProfileHeader />
        <div className="container">
          <h4 className="title">
            <b>About Me</b>
          </h4>
          <div className="about">
            I'm a Biomedical Engineering student at Lehigh University
            pursuing a Bachelor's degree. I enjoy
            traveling to national parks with my family, spending my time in LBI, and doing all things adventurous. I'm
            unabatingly curious and love to learn new things.
          </div>
          <h4 class="title">Education</h4>
          {this.educationGenerator()}
          <h4 class="title">Professional Experience</h4>
          {this.experienceGenerator()}
          <h4 class="title">Volunteer Experience</h4>
          {this.volunteerGenerator()}
        </div>
        <Footer />
      </div>
    );
  }

  getEducation() {
    var education = [];
    education.push({
      title:
        "Lehigh University, P.C. Rossin College of Engineering and Applied Science",
      subtitle: "Bachelor of Engineering - Biomedical Engineering Candidate",
      image: lehigh,
      image_class: "company-logo",
      date: "2019-2023",
      gpa: "[TODO]",
      p1:
        "Coursework: [TODO]",
    });
    education.push({
      title: "Moorestown High School",
      subtitle: "",
      image: moorestown,
      image_class: "company-logo",
      date: "2015-2019",
      gpa: "TODO",
      p1:
        "Tests: SAT | [TODO], Awards: [TODO]",
      p2: `Involvement: [TODO]`,
    });
    return education;
  }

  getWorkExperience() {
    var exp = [];
    exp.push({
      title: "Research Assistant - Lehigh University",
      image: lehigh,
      image_class: "company-logo",
      date: "December 2020-Present",
      loc: "Bethlehem, PA",
      p1: `[DESCRIPTION TODO]`,
    });

    exp.push({
      title: "Farmer - Pinelands Preservation Alliance",
      image: pinelands,
      image_class: "company-logo",
      date: "May-August 2020",
      loc: "Vincentown, NJ",
      p1: `[DESCRIPTION TODO].`
    });

    exp.push({
      title: "Marketing Intern - Tabula Rasa Healthcare",
      image: trhc,
      image_class: "company-logo",
      date: "July-September 2019",
      loc: "Moorestown, NJ",
      p1: `[DESCRIPTION TODO]`,
    });
    return exp;
  }

  getVolunteerExperience() {
    var exp = [];
    exp.push({
      title: "Mentor - Mentor Collective",
      image: mentor,
      image_class: "company-logo",
      date: "May 2021-Present",
      loc: "Bethlehem, PA",
      p1: `Act as a mentor to five incoming Lehigh students to help ease the transition from high school to college 
      through consistent communication.`,
    });
    exp.push({
      title: "English Speaking Volunteer - ENGin",
      image: engin,
      image_class: "company-logo",
      date: "October-December 2020",
      loc: "Bethlehem, PA",
      p1: `Had weekly video chat conversations with a student in Ukraine on relevant topics to strengthen her English skills.`,
    });
    exp.push({
      title: "Cardiovascular Floor Volunteer - Cooper Hospital",
      image: cooper,
      image_class: "cooper-logo",
      date: "June-August 2018",
      loc: "Camden, NJ",
      p1: `Worked on the cardiovascular floor with the floor secretary. Helped with medication shipments, 
      delivery, and inventory. Answered floor calls and provided information to visitors. 
      Also, answered patient calls and informed the nurses if their needs exceeded my abilities.`,
    });
    return exp;
  }
}

export default Home;

    
