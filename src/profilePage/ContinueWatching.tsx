import React from "react";
import { Link } from "react-router-dom";
import "./ContinueWatching.css";
import type { ProfileType } from "./profileTypes";

interface ContinueWatchingProps {
  profile: ProfileType;
}

type InternalTile = {
  title: string;
  imgSrc: string;
  link: string;
};

type ExternalTile = {
  title: string;
  imgSrc: string;
  externalUrl: string;
};

type Tile = InternalTile | ExternalTile;

const continueWatchingConfig: Record<ProfileType, Tile[]> = {
  Recruiter: [
    {
      title: "Skills",
      imgSrc: "/Skills.jpg",
      link: "/Skillsnew",
    },
    {
      title: "Resume",
      imgSrc: "/Resume.jpg",
      externalUrl:
        "https://drive.google.com/file/d/1vQnqSo8qKVp1UjqqRkgiPLrjGitau4pL/view?usp=sharing",
    },
    {
      title: "About me",
      imgSrc: "/Aboutme.jpg",
      link: "/hire-me-v2",
    },
  ],

  Stalker: [
    {
      title: "Resume",
      imgSrc: "/Resume.jpg",
      externalUrl:
        "https://drive.google.com/file/d/1vQnqSo8qKVp1UjqqRkgiPLrjGitau4pL/view?usp=sharing",
    },
    {
      title: "About me",
      imgSrc: "/Aboutme.jpg",
      link: "/hire-me-v2",
    },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  const isExternal = (tile: Tile): tile is ExternalTile =>
    "externalUrl" in tile;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>

      <div className="card-row">
        {continueWatching.map((tile, index) => {
          if (isExternal(tile)) {
            return (
              <a
                key={index}
                href={tile.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pick-card"
              >
                <img
                  src={tile.imgSrc}
                  alt={tile.title}
                  className="pick-image"
                />
                <div className="overlay">
                  <div className="pick-label">{tile.title}</div>
                </div>
              </a>
            );
          }

          return (
            <Link key={index} to={tile.link} className="pick-card">
              <img src={tile.imgSrc} alt={tile.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{tile.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContinueWatching;
