import createImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2021-07-11',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
};

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
