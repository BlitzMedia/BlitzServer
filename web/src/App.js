import React, { Component } from "react"
import "./App.css"

function Post(post) {
  return (
    <li key={post.title}>
      <article className={post}>
        <h4>{post.title}</h4>
        <p>{post.caption}</p>
      </article>
      <hr/>
    </li>
  )
}

function Posts(props) {
  if (!props || !props.posts) return null
  return <ul>{props.posts.map(Post)}</ul>
}

class App extends Component {
  state = {}

  async onGetData(slug) {
    const response = await fetch(`/api/${slug}`)
    const posts = await response.json()

    this.setState({ posts: posts })
  }

  render() {
    const posts = this.state.posts || null

    return (
      <div className="App">
        <header role="banner">
          <div><span role="img" aria-label="Blitz!">⚡</span> Blitz!'s First Server!</div>

          <nav>
            <button className="button-outline" onClick={() => this.onGetData('react-redux')}>
                    I like React
            </button>

            <button className="button-outline" onClick={() => this.onGetData('functional-programming')}>
                    I like functional programming
            </button>
          </nav>
        </header>

        <main role="main">



          <Posts posts={posts}/>
        </main>

      </div>
    );
  }
}

export default App;
