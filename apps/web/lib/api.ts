import groq from 'groq';
import client, { previewClient } from './sanity';

const getUniquePosts = (posts: string[]) => {
  const slugs = new Set();
  return posts.filter((post: any) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  mainImage,  
  categories,
  excerpt,
  slug,
  title,
  keywords,
  _createdAt,
  _updatedAt,
  _id,
`;

const getClient = (preview: boolean) => (preview ? previewClient : client);

// Get number of posts
export async function getNumberOfPosts() {
  const data = await client.fetch(groq`count(*[_type == 'project' ])`);
  return data;
}

// Get menu elements (name and urls)
export async function getMenuItems() {
  const data = await client.fetch(
    groq`*[_type == 'menuElement'] {title, urlField, _id}`
  );
  return data;
}

export async function getPreviewPostBySlug(slug: string) {
  const data = await getClient(true).fetch(
    groq`*[_type == "project" && slug.current == $slug] | order(_createdAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(
    groq`*[_type == "project"]{ 'slug': slug.current }`
  );
  return data;
}

// Fetches all posts with tags/keywords
export async function getAllPostsWithKeyword(keyword: string) {
  const data = await client.fetch(
    groq`*[_type == "project" && keywords match "${keyword}"]{
      ${postFields}
      slug, 
      keywords}`
  );

  return data;
}

export async function getAllKeywords() {
  const data = await client.fetch(
    groq`*[_type == "project" && keywords != null]{keywords}`
  );

  return data;
}

// Fetch text for About me front page module
export async function getAboutMeText() {
  const data = await client.fetch(
    groq`*[_type == "webFrontpageContent" && webFrontPageIdentifier =='om-meg-personlig' ]`
  );

  return data[0];
}

// Fetch text for "Om meg" sub page
export async function getAboutMePageText() {
  const data = await client.fetch(
    groq`*[_type == "webContent" && webContentType == 'about-me']`
  );

  return data[0];
}

// Fetch text for "Kontakt" sub page
export async function getContactText() {
  const data = await client.fetch(
    groq`*[_type == "webContent" && webContentType == 'contact-me']`
  );

  return data[0];
}

// Fetch text for Customer Stories sub page
export async function getCustomerStoriesText() {
  const data = await client.fetch(
    groq`*[_type == "webContent" && webContentType == 'customer-reference']`
  );

  return data[0];
}

// Fetch text for customer story front page module
export async function getCustomerStoryText() {
  const data = await client.fetch(
    groq`*[_type == "webFrontpageContent" && webFrontPageIdentifier =='utvalgt-prosjekt' ]`
  );

  return data[0];
}

// Fetch text for feature section
export async function getFeatureText() {
  const data = await client.fetch(
    groq`*[_type == "webFrontpageContent" && webFrontPageIdentifier =='feature-tjenester' ]`
  );

  return data[0];
}

// Fetch text for the Hero section
export async function getHeroText() {
  const data = await client.fetch(
    groq`*[_type == "webFrontpageContent" && webFrontPageIdentifier =='hero-personal' ]`
  );

  return data[0];
}

// Fetch text for privacy ("Personvern") sub page
export async function getPrivacyText() {
  const data = await client.fetch(
    groq`*[_type == "webContent" && webContentType == 'privacy']`
  );

  return data[0];
}

// Fetch text for "Tjenester" sub page
export async function getProjectsText() {
  const data = await client.fetch(
    groq`*[_type == "webContent" && webContentType == 'project']`
  );

  return data[0];
}

// Fetch the first posts (max numberOfPosts)
export async function getAllPostsForHome({
  preview = false,
  numberOfPosts = 6,
  offset = 0,
}) {
  const postsToFetch = numberOfPosts - 1 || 5;
  const results = await getClient(preview)
    .fetch(groq`*[_type == "project"] | order(_createdAt desc){
      ${postFields}
      author->{name, 'picture':image.asset->url},
    }[${offset}..${offset + postsToFetch}]`);
  return getUniquePosts(results);
}

// Fetch a post with a slug, and also a few more posts
export async function getPostAndMorePosts({ slug = '', preview = false }) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        groq`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        author->{name, 'picture':image.asset->url},
        bio
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      groq`*[_type == "project" && slug.current != $slug] | order(_createdAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);

  return { post, morePosts: getUniquePosts(morePosts) };
}

// Get all related posts for a post with a slug
export async function getRelatedPosts({
  slug,
  preview = false,
}: {
  slug: string;
  preview: boolean;
}) {
  const relatedPosts = await client.fetch(
    groq`*[_type == 'project' && slug.current == $slug]{_id, title, "related": relatedProjects[]->{_id, slug, title}}`,
    { slug }
  );
  return relatedPosts[0]?.related;
}

// Find the aspect ratio for an image where the id matches the imageRef
// Also get the blurred image (lqip - low-quality image preview)
export async function getAspectRatio({ imageRef = '', preview = false }) {
  try {
    const curClient = getClient(preview);

    const data = await curClient.fetch(
      groq`*[_type == "sanity.imageAsset" && _id == $imageRef]{
      metadata
    }`,
      { imageRef }
    );

    return {
      aspectRatio: data[0].metadata.dimensions.aspectRatio,
      blurImage: data[0].metadata.lqip,
    };
  } catch (error) {
    console.error(error);

    return {
      aspectRatio: null,
      blurImage:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    };
  }
}
