// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    headline
    resumelink {
      url
    }
    linkedinlink
    profilesummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<any>(GET_PROFILE_BANNER);
  console.log("🚀 ~ getProfileBanner ~ data:", data)
  const banner = data.profilebanner;

  return {
    headline: banner.headline || '',
    resumeLink: { url: banner.resumelink.url || ''},
    linkedinLink: banner.linkedinlink || '',
    profileSummary: banner.profilesummary || '',
  };
}
