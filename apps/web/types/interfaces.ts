import { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
  caption: string;
  _type: string;
}

// Post data (for articles)
export interface Post {
  author?: {
    name: string;
    picture: string;
  };
  bio?: string;
  body: PortableTextBlock;
  categories: Object[];
  excerpt?: PortableTextBlock;
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

export interface PostArticleProps {
  title: string;
  coverImage: SanityImage;
  date?: string;
  author?: string;
  keywords?: string[];
  content: PortableTextBlock;
}

export interface PaginationProps {
  numberOfPages: number;
  startPage: number;
}

export interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}

export interface HeroProps {
  content: {
    title: string;
    images: SanityImage[];
    textBlocks: string[];
  };
}

export interface HashtagsProps {
  keywords?: string[];
}

export interface FeatureProps {
  content: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string; // Heading if you don't want to use the default heading fetched from the CMS
}

export interface DateAndAuthorProps {
  date?: string;
  author?: string | null;
}

export interface CustomerStoryProps {
  content: {
    title: string;
    images: SanityImage[];
    textBlocks: string[];
  };
  noXPadding?: boolean; // Skip padding on left and right of text
}

export interface CoverImageProps {
  mainImage: SanityImage;
}

export interface ContainerProps {
  children?: React.ReactNode;
  noPadding?: boolean;
  className?: string;
}

export interface BlogTopSectionProps {
  posts: Post[];
}

export interface BlogPostListProps {
  posts: Post[];
}

export interface ArticleGridProps {
  posts: Post[];
}

// About Me page data
export interface AboutMe {
  title: string;
  body: PortableTextBlock;
  mainImage: SanityImage;
  webContentTextBoxes: PortableTextBlock;
  webContentType: string;
  keywords?: string[];
}

export interface AboutMeProps {
  content: {
    title: string;
    images: SanityImage[];
    textBlocks: string[];
  };
}

// Navbar menu
export interface Menu {
  title: string;
  link: string;
  _id: string;
}

// Home page data
export interface HomePageProps {
  allPosts: Post[];
  heroText: {
    title: string;
    textBlocks: string[];
    images: SanityImage[];
  };
  aboutMeText: {
    title: string;
    textBlocks: string[];
    images: SanityImage[];
  };
  featureText: {
    title: string;
    textBlocks: string[];
    images: SanityImage[];
  };
  customerStoryText: {
    title: string;
    textBlocks: string[];
    images: SanityImage[];
  };

  preview: boolean;
}

export interface PrivacyPageProps {
  privacyText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    webContentType: string;
    preview: boolean;
  };
  allPosts: Post[];
  preview: boolean;
}

export interface ContactProps {
  contactText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    preview: boolean;
  };
  featureText: {
    title: string;
    textBlocks: string[];
  };
  preview: boolean;
}

export interface CustomerStoriesProps {
  customerStoriesText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    webContentType: string;
    preview: boolean;
  };
  customerStoryText: {
    title: string;
    images: SanityImage[];
    textBlocks: string[];
    webFrontPageIdentifier: string;
  };
  preview: boolean;
}

export interface ProjectsProps {
  projectsText: {
    title: string;
    body: PortableTextBlock;
    mainImage: SanityImage;
    webContentType: string;
    preview: boolean;
  };
  allPosts: Post[];
  preview: boolean;
}

export interface PostProps {
  post: Post;
  morePosts: Post[];
  relatedPosts: Post[];
  preview: boolean;
}

export interface SearchResultType {
  result: {
    slug: {
      _type: string;
      current: string;
    };
    title: string;
    webContentType?: string;
    _id: string;
    _score: number;
  }[];
}

export interface CodeBlockProps {
  value: {
    code: string;
    language?: string;
  };
}

export interface FigureProps {
  value: {
    alt?: string;
    caption?: string;
    asset: {
      _ref: string;
      _type: string;
    };
    _key: string;
    _type: string;
  };
}

export interface HeadingWithMarksProps {
  heading: string;
  marks?: string;
  wrap?: boolean;
}

export interface SimpleTextProps {
  text: string;
  marks?: string;
}

export interface FormatDateProps {
  created: string;
  updated?: string;
}

export interface BlogProps {
  firstPosts: Post[];
  restOfThePosts: Post[];
  page: string;
  numberOfPages: number;
  preview: boolean;
}

export interface AboutMeProps {
  aboutMeText: AboutMe;
  featureText: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string;
  preview: boolean;
}

export interface PostKeywordProps {
  posts: Post[];
  keyword: string;
  preview: boolean;
}

export interface ResponsiveImageProps {
  imageData: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  className?: string;
}

export interface PostTitleProps {
  children: React.ReactNode;
}
