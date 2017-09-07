import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import CommentsList from './components/CommentsList'
import SearchBar from './components/SearchBar'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      filterString: '',
      ready: false,
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        if (res.data)
          this.setState({ comments: res.data, ready: true })
      })
  }

  onTextChange = (newText) => {
    this.setState({ filterString: newText })
  }

  render() {
    const { ready, comments, filterString } = this.state

    if (!ready) {
      return (
        <p>
          Loading...
        </p>
      )
    }

    let filteredComments = comments

    if (filterString) {
      filteredComments = _.filter(filteredComments, (comment, i) => {
        const { name, body } = comment
        // get only the 50 first comments
        return (i < 50 && (name.indexOf(filterString) !== -1 || body.indexOf(filterString) !== -1))
      })
    }


    return (
      <div className="App">
        <SearchBar onTextChange={this.onTextChange} />
        <CommentsList comments={filteredComments} filterString={filterString} />
      </div>
    )
  }
}

export default App
