// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((a, blog) => {
    return (a += blog.likes)
  }, 0)
}

module.exports = {
  dummy,
  totalLikes,
}
