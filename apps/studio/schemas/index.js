import author from './author'
import blockContent from './blockContent'
import category from './category'
import bioPortableText from './objects/bioPortableText'
import project from './project'
import webContent from './webContent'
import webContentTextBox from './webContentTextBox'
import webFrontpageContent from './webFrontpageContent'
import figure from './objects/figure'
import menuElements from './menuElements'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

export const schemaTypes = [
  bioPortableText,
  figure,
  projectPortableText,
  simplePortableText,
  project, // These are the articles ("Artikler")
  category,
  blockContent,
  webContent, // These are the web sub pages
  webContentTextBox,
  webFrontpageContent,
  menuElements,
  author,
]
