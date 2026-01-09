// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: seq_ASC) {
      seq
      title
      description
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  // Normalize field names
  const mappedData = data.allProjects.map((item: any) => ({
    seq: item.seq,
    title: item.title,
    description: item.description,   // mapping lowercase -> camelCase
    image: {url: item.image.url}
  }));

  console.log("🚀 ~ timeLineData:", mappedData);
  return mappedData;
}
