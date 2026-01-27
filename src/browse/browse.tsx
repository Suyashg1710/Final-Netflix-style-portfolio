import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import blueImage from "../images/blue.png";
import redImage from "../images/red.png";
import "./browse.css";

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Recruiter",
      image: blueImage,
      backgroundGif:
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3czUwZnBqOWIxNDBxZzNyamI4eGVicnZsYjViZ25jdDV6ZmU4dnluaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dgjv0dQdB6MGtHR7NB/giphy.gif",
    },
    {
      name: "Stalker",
      image: redImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif", // Dark, abstract digital lights
    },
  ];

  const handleProfileClick = (profile: {
    name: string;
    image: string;
    backgroundGif: string;
  }) => {
    navigate(`/profile/${profile.name}`, {
      state: {
        profileImage: profile.image,
        backgroundGif: profile.backgroundGif,
      },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
