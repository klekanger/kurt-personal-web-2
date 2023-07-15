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
import youtube from './youtube'

export const schemaTypes = [
  project, // These are the articles ("Artikler")
  category, // Artikler - kategorier
  webContent, // These are the web sub pages
  webFrontpageContent, // Innhold til forsidemoduler
  bioPortableText,
  figure,
  projectPortableText,
  simplePortableText,
  blockContent,
  webContentTextBox,
  menuElements,
  author,
  youtube,
]
