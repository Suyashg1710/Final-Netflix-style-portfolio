// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';

const GET_TIMELINE = `
{
  allTimelines (orderBy: [seq_ASC]) {
    seq
   	name
    timelinetype
    title
    summarypoints
    daterange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<any>(GET_TIMELINE);
  // Normalize field names
  const mappedData = data.allTimelines.map((item: any) => ({
    seq: item.seq,
    name: item.name,
    title: item.title,
    timelineType: item.timelinetype,   // mapping lowercase -> camelCase
    summaryPoints: item.summarypoints,
    dateRange: item.daterange,
  }));

  console.log("🚀 ~ timeLineData:", mappedData);
  return mappedData;
}
