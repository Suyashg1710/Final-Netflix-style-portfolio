import React from "react";
import { Link } from "react-router-dom";
import "./ContinueWatching.css";

type ProfileType = "Recruiter" | "Developer" | "Stalker" | "Adventurer";

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  Recruiter: [
    {
      title: "Music",
      imgSrc: "https://picsum.photos/id/1025/300/200",
      link: "/music",
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/id/1026/300/200",
      link: "/reading",
    },
    {
      title: "Blogs",
      imgSrc: "https://picsum.photos/id/1027/300/200",
      link: "/blogs",
    },
    {
      title: "Skills",
      imgSrc: "https://picsum.photos/seed/skills/250/200",
      link: "/Skillsnew",
    },
  ],
  Developer: [
    {
      title: "Music",
      imgSrc: "https://picsum.photos/id/1025/300/200",
      link: "/music",
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/id/1026/300/200",
      link: "/reading",
    },
    {
      title: "Blogs",
      imgSrc: "https://picsum.photos/id/1027/300/200",
      link: "/blogs",
    },
    {
      title: "Skills",
      imgSrc: "https://picsum.photos/seed/skills/250/200",
      link: "/skills",
    },
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      link: "/work-experience",
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      link: "/projects",
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/id/1028/300/200",
      link: "/certifications",
    },
    {
      title: "Recommendations",
      imgSrc: "https://picsum.photos/seed/recommendations/250/200",
      link: "/recommendations",
    },
    {
      title: "Work Permit",
      imgSrc: "https://picsum.photos/seed/workpermit/250/200",
      link: "/work-permit",
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/id/1029/300/200",
      link: "/contact-me",
    },
  ],
  Stalker: [
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      link: "/work-experience",
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      link: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/id/1029/300/200",
      link: "/contact-me",
    },
  ],
  Adventurer: [
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      link: "/work-experience",
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      link: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/id/1029/300/200",
      link: "/contact-me",
    },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
