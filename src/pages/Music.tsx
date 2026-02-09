import React from "react";
import { useParams } from "react-router-dom";
import "./Music.css";
import { FaSoundcloud } from "react-icons/fa";

// DEFAULT (Developer/Recruiter/Adventurer) images
import albumCover1 from "../images/Hotelcalifornia.jpg";
import albumCover2 from "../images/ac-dc.jpg";
import albumCover3 from "../images/guns-n-roses.webp";

// ============ DEFAULT CONTENT ============
const defaultGenres = [
  "Rock",
  "Classic Rock",
  "Hard Rock",
  "Blues",
  "Alternative",
];
const defaultAlbums = [
  {
    title: "Hotel California",
    artist: "The Eagles",
    imgSrc: albumCover1,
    link: "https://www.youtube.com/watch?v=09839DpTctU",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    imgSrc: albumCover2,
    link: "https://www.youtube.com/watch?v=pAgnJDJN4VA",
  },
  {
    title: "Appetite for Destruction",
    artist: "Guns N' Roses",
    imgSrc: albumCover3,
    link: "https://www.youtube.com/watch?v=o1tj2zJ2Wvg",
  },
];

// ============ STALKER CONTENT ============
const stalkerGenres = [
  "Rock",
  "Psychedelic Rock",
  "Classic Rock",
  "Rap",
  "Alternative",
];
const stalkerAlbums = [
  {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    imgSrc: "/WishYouWereHere.jpeg",
    link: "https://youtu.be/TMy_mYkwl4M?si=KQnLJi8zLWBbt-dy",
  },
  {
    title: "Mahal",
    artist: "Glass Beams",
    imgSrc: "/GlassBeams.jpg",
    link: "https://youtu.be/hGQu4_fan8Q?si=JUcX-dMTxS6LBysG",
  },
  {
    title: "The Iron Horse",
    artist: "The Sound Defects",
    imgSrc: "/SoundDefects.jpeg",
    link: "https://youtu.be/-gXrS6eKfjk?si=YEDUHXTvgFomoHaX",
  },
];

const Music: React.FC = () => {
  const { profile } = useParams<{ profile?: string }>();

  // Determine which content to show
  const isStalker = profile === "Stalker";
  const genres = isStalker ? stalkerGenres : defaultGenres;
  const albums = isStalker ? stalkerAlbums : defaultAlbums;

  return (
    <div className="music-page">
      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="genre-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {albums.map((album, index) => (
            <a
              key={index}
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="album-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={album.imgSrc}
                alt={album.title}
                className="album-image"
              />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* SoundCloud Section (Matching Hire Me Tiles) */}
      {/* SoundCloud Section (Matching Hire Me Tiles) */}
      <div className="soundcloud-contact-section">
        <h2>Listen what I like to listen</h2>

        <div className="soundcloud-tiles">
          <a
            href="https://soundcloud.com/your-soundcloud-username"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile soundcloud"
            title="SoundCloud"
          >
            <FaSoundcloud />
            <span>SoundCloud</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Music;
