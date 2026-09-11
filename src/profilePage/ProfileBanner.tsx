import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";
import { useNavigate } from "react-router-dom";

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const navigate = useNavigate(); // ← NEW

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(
      "https://drive.google.com/file/d/1vQnqSo8qKVp1UjqqRkgiPLrjGitau4pL/view?usp=sharing",
      "_blank"
    );
  };

  const handleMoreInfoClick = () => {
    navigate("/hire-me-v2"); // ← INSTANT like toggle menu!
  };

  return (
    <div className="profile-banner">
      {/* BACKGROUND VIDEO */}
      <video
        className="banner-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/BG-video.mp4" type="video/mp4" />
      </video>
      {/* CONTENT */}
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          Suyash Gupta, Creative Copywriter
          <br />
          <span className="banner-subheadline">
            <strong>Born an original, living as a copy.</strong>
          </span>
        </h1>

        <div className="banner-awards">
          <div className="banner-award">
            <svg className="banner-award-laurel" viewBox="0 0 60 118" width="20" height="38">
              <path className="banner-laurel-stem" d="M22,116 C6,104 -2,78 4,56 C8,36 18,18 30,4" />
              <path className="banner-laurel-leaf" transform="translate(24,106) rotate(-80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(12,92) rotate(-55)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(4,74) rotate(-25)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(2,54) rotate(5)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(6,34) rotate(35)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(16,16) rotate(60)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(28,2) rotate(80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" d="M20,112 C28,118 34,116 30,108 C27,102 20,104 21,110 Z" />
            </svg>
                        <div className="banner-award-text">
              <div className="banner-award-kicker">Featured Winner</div>
              <div className="banner-award-title banner-award-title-tiny">D&amp;AD New Blood<br />The Portfolios Competition</div>
              <div className="banner-award-sub">Top 7 Globally &middot; 2026</div>
            </div>
            <svg className="banner-award-laurel banner-award-laurel-flip" viewBox="0 0 60 118" width="20" height="38">
              <path className="banner-laurel-stem" d="M22,116 C6,104 -2,78 4,56 C8,36 18,18 30,4" />
              <path className="banner-laurel-leaf" transform="translate(24,106) rotate(-80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(12,92) rotate(-55)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(4,74) rotate(-25)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(2,54) rotate(5)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(6,34) rotate(35)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(16,16) rotate(60)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(28,2) rotate(80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" d="M20,112 C28,118 34,116 30,108 C27,102 20,104 21,110 Z" />
            </svg>
          </div>

          <div className="banner-award">
            <svg className="banner-award-laurel" viewBox="0 0 60 118" width="20" height="38">
              <path className="banner-laurel-stem" d="M22,116 C6,104 -2,78 4,56 C8,36 18,18 30,4" />
              <path className="banner-laurel-leaf" transform="translate(24,106) rotate(-80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(12,92) rotate(-55)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(4,74) rotate(-25)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(2,54) rotate(5)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(6,34) rotate(35)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(16,16) rotate(60)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(28,2) rotate(80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" d="M20,112 C28,118 34,116 30,108 C27,102 20,104 21,110 Z" />
            </svg>
            <div className="banner-award-text">
              <div className="banner-award-kicker">Cannes Lions</div>
              <div className="banner-award-title banner-award-title-small">FUTURE LIONS</div>
              <div className="banner-award-sub">Shortlist &middot; 2025</div>
            </div>
            <svg className="banner-award-laurel banner-award-laurel-flip" viewBox="0 0 60 118" width="20" height="38">
              <path className="banner-laurel-stem" d="M22,116 C6,104 -2,78 4,56 C8,36 18,18 30,4" />
              <path className="banner-laurel-leaf" transform="translate(24,106) rotate(-80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(12,92) rotate(-55)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(4,74) rotate(-25)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(2,54) rotate(5)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(6,34) rotate(35)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(16,16) rotate(60)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" transform="translate(28,2) rotate(80)" d="M0,-7 C4,-5 4,5 0,9 C-4,5 -4,-5 0,-7 Z" />
              <path className="banner-laurel-leaf" d="M20,112 C28,118 34,116 30,108 C27,102 20,104 21,110 Z" />
            </svg>
          </div>
        </div>

        <p className="banner-description">
          Suyash is a creative currently having fun in Berlin.
          <br />
          <br />
          Suyash, in Hindi, means "good fame," and hence he likes to talk about
          himself in the third person as if he's already a famous hotshot. He
          isn't one. Not yet.
          <br />
          <br />
          However, because of his creative ideas and copies, people around him
          seem convinced he will be famous. Sooner than later.
          <br />
          <br />
          Lucky for the world that he is currently his own manager, so reaching
          out to him isn't a problem.
          <br />
          Just{" "}
          <a href="tel:+491781332944" className="bio-link">
            call
          </a>
          . Or{" "}
          <a href="mailto:suyashg1710@gmail.com" className="bio-link">
            write
          </a>
          .
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleMoreInfoClick} label="More info" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
