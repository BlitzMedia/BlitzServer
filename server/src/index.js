// Imports
const express = require('express')
const app = express()

const myRealApi = (req, res) => {
  const slug = req.params.slug
  const posts = postsLists[slug]
  res.json(posts)
}

const postsLists = {
  'react-redux': [
    {
      title: 'React Redux Tutorial',
      caption: 'bla bla bla',
    },
    {
      title: 'Redux-First Router is the BOMB!',
      caption: 'ghjgh hjkkj bla'
    }
  ],
  'functional-programming': [
    {
      title: 'Function Programming',
      caption: '12434213 ips5688765um'
    },
    {
      title: 'Haskel and Clojurescript',
      caption: 'asfdsdf ipsfdasfadsum'
    }
  ]
}

app.get('/api/:slug', myRealApi)

app.listen(8080, function() {
  console.log('Blitz! is listening...')
})
