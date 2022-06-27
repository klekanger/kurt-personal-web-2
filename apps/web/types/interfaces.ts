// Post data (for articles)
export interface Post {
  _id: string;
  categories: object[];
  title: string;
  excerpt?: {
    _key: string;
    _type: string;
    children: {
      marks: object[];
      text: string;
    }[];
  }[];
  body: Object[];
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
    caption: string;
    _type: string;
  };
  slug: {
    current: string;
  };
  keywords: string[];
  author?: {
    name: string;
    picture: string;
  };

  _createdAt: string;
  _updatedAt: string;
}

// About Me page data
export interface AboutMe {
  title: string;
  body: Object[];
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
    caption: string;
    _type: string;
  };
  webContentTextBoxes: Object[];
  webContentType: string;
  keywords?: string[];
}

// Home page data
export interface HomePageProps {
  allPosts: {
    _id: string;
    categories: object[];
    title: string;
    excerpt: object[];
    mainImage: {
      alt: string;
      asset: object;
    };
    slug: {
      current: string;
      title: string;
      _id: string;
    };
  }[];
  heroText: {
    title: string;
    textBlocks: string[];
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
  };
  aboutMeText: {
    title: string;
    textBlocks: string[];
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
  };
  featureText: {
    title: string;
    textBlocks: string[];
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
  };
  customerStoryText: {
    title: string;
    textBlocks: string[];
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
  };

  preview: boolean;
}
