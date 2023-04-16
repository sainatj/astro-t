export const getUniqueTags = posts => 
  [...new Set(
    posts
    .map(post => post.frontmatter.tags)
    .flat()
  )];
