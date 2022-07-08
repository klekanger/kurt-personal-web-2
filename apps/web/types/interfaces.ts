import { PortableTextBlock } from '@portabletext/types';

interface SanityReference {
  _type: string;
  _ref: string;
}

interface SanityImage {
  alt: string;
  asset: SanityReference;
  caption: string;
  _type: string;
}

// Exported interfaces

export interface AboutMe {
  title: string;
  body: PortableTextBlock;
  mainImage: SanityImage;
  webContentTextBoxes: PortableTextBlock;
  webContentType: string;
  keywords?: string[];
}

export interface AboutMeProps {
  title: string;
  images: SanityImage[] | undefined;
  textBlocks: string[];
}

export interface AboutMePageProps {
  aboutMeText: AboutMe;
  featureText: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string;
  preview?: boolean;
}

export interface BlogProps {
  firstPosts: Post[];
  restOfThePosts: Post[];
  page: number;
  numberOfPages: number;
  preview?: boolean;
}

export interface CodeBlockProps {
  value: {
    code: string;
    language?: string;
  };
}

export interface ContactProps {
  contactText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    preview?: boolean;
  };
  featureText: {
    title: string;
    textBlocks: string[];
  };
  preview?: boolean;
}

export interface ContainerProps {
  children?: React.ReactNode;
  noPadding?: boolean;
  className?: string;
}

export interface CoverImageProps {
  mainImage: SanityImage;
}

export interface CustomerStoryProps {
  content: {
    title: string;
    images?: SanityImage[];
    textBlocks: string[];
  };
  noXPadding?: boolean;
}

export interface DateAndAuthorProps {
  date?: string;
  author?: string | null;
}

export interface FeatureProps {
  content: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string;
}

export interface FigureProps {
  value: {
    alt?: string;
    caption?: string;
    asset: SanityReference;
    _key: string;
    _type: string;
  };
}

export interface FormatDateProps {
  created: string;
  updated?: string;
}

export interface HashtagsProps {
  keywords?: string[];
}

export interface HeadingWithMarksProps {
  heading: string;
  marks?: string;
  wrap?: boolean;
}

export interface HeroProps {
  content: {
    title: string;
    images?: SanityImage[];
    textBlocks: string[];
  };
}

export interface HomePageProps {
  allPosts: Post[];
  heroText: {
    title: string;
    textBlocks: string[];
    images?: SanityImage[];
  };
  aboutMeText: {
    title: string;
    textBlocks: string[];
    images: SanityImage[];
  };
  featureText: {
    title: string;
    textBlocks: string[];
    images?: SanityImage[];
  };
  customerStoryText: {
    title: string;
    textBlocks: string[];
    images?: SanityImage[];
  };
  preview?: boolean;
}

export interface LayoutProps {
  preview?: boolean;
  children: React.ReactNode;
}

export interface PaginationProps {
  numberOfPages: number;
  startPage: number;
}

export interface Post {
  author?: {
    name: string;
    picture: string;
  };
  bio?: string;
  body: PortableTextBlock;
  categories: SanityReference;
  excerpt?: PortableTextBlock[];
  keywords: string[];
  mainImage: SanityImage;
  slug: {
    current: string;
  };
  title: string;
  _createdAt: string;
  _id: string;
  _updatedAt: string;
}

export interface PostKeywordProps {
  posts: Post[];
  keyword: string;
  preview?: boolean;
}

export interface PostArticleProps {
  title: string;
  coverImage: SanityImage;
  date?: string;
  author?: string;
  keywords?: string[];
  content: PortableTextBlock;
}

export interface PostTitleProps {
  children: React.ReactNode;
}

export interface PrivacyPageProps {
  privacyText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    webContentType: string;
    preview?: boolean;
  };
  allPosts: Post[];
  preview?: boolean;
}

export interface ProjectsProps {
  projectsText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    webContentType: string;
    preview?: boolean;
  };
  allPosts: Post[];
  preview?: boolean;
}

export interface PostProps {
  post: Post;
  morePosts: Post[];
  relatedPosts: Post[];
  preview?: boolean;
}

export interface ResponsiveImageProps {
  imageData: SanityReference;
  alt?: string;
  className?: string;
}

/* export interface SearchResultType {
  result: {
    slug: {
      _type: string;
      current: string;
    };
    title: string;
    webContentType?: string;
    _id: string;
    _score: number;
  };
} */

export interface SearchResult {
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  webContentType?: string;
  _id: string;
  _score: number;
}

export interface SimpleTextProps {
  text: string;
  marks?: string;
}
