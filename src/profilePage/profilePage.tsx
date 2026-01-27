import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";
import type { ProfileType } from "./profileTypes";

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const profile: ProfileType =
    profileName?.toLowerCase() === "stalker" ? "Stalker" : "Recruiter";

  return (
    <>
      {/* ABOUT / HERO SECTION */}
      <div className="profile-page">
        <ProfileBanner />
      </div>

      {/* ✅ WORK EXPERIENCE TIMELINE SECTION */}

      {/* NETFLIX ROWS BELOW */}
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
