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

export interface PrivacyPageProps {
  privacyText: {
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
    webContentType: string;
    preview: boolean;
  };
  allPosts: Post[];
  preview: boolean;
}

export interface ContactProps {
  contactText: {
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
    webContentType: string;
    preview: boolean;
  };
  customerStoryText: {
    title: string;
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
    textBlocks: string[];
    webFrontPageIdentifier: string;
  };
  preview: boolean;
}

export interface ProjectsProps {
  projectsText: {
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
    webContentType: string;
    preview: boolean;
  };
  allPosts: Post[];
  preview: boolean;
}
