const Author = () => import('../views/Author/Author')
const AuthorPosts = () => import('../views/Author/childComps/AuthorPosts/AuthorPosts')
const AuthorMore = () => import('../views/Author/childComps/AuthorMore/AuthorMore')

export default {
  path: '/u/:id',
  // name: 'Author',
  component: Author,
  meta: {
    showFooter: false
  },
  children: [
    {
      path: '/u/:id/posts',
      component: AuthorPosts,
      meta: {
        showFooter: true
      },
    }, {
      path: '/u/:id/more',
      component: AuthorMore,
      meta: {
        showFooter: true
      },
    },
    {
      path: '',
      redirect: '/u/:id/posts'
    },
  ]
}