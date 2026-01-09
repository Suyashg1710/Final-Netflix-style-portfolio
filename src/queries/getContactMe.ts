// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  {
    contactme {
      name
      title
      summary
      companyuniversity
      linkedinlink
      email
      phonenumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<any>(GET_CONTACT_ME);
  console.log("🚀 ~ getContactMe ~ data:", data)
  const contact = data.contactme;

  // ✅ Map lowercased API fields to camelCase TypeScript fields
  return {
    name: contact.name || '',
    title: contact.title || '',
    summary: contact.summary || '',
    companyUniversity: contact.companyuniversity || '',
    linkedinLink: contact.linkedinlink || '',
    email: contact.email || '',
    phoneNumber: contact.phonenumber?.toString() || '',
  };
}
