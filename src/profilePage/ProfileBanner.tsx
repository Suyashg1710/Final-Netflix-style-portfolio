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
      "https://drive.google.com/file/d/1cwg_DXo3utv6Lm6m1x_fmLj_Flg5VlsF/view?usp=sharing",
      "_blank"
    );
  };


  const handleMoreInfoClick = () => {
    navigate("/hire-me-v2"); // ← INSTANT like toggle menu!
  };

  return (
    <div
  className="profile-banner"
  style={{ backgroundImage: "url(/fire-writing.gif)" }}
>
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          Suyash Gupta, Creative Copywriter
          <br />
          <span className="banner-subheadline">
            <strong>Born an original, living as a copy.</strong>
          </span>
        </h1>
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
          out to him isn't a problem. Just <a href="tel:+491781332944">call</a>.
          Or <a href="mailto:suyashg1710@gmail.com">write</a>.
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
