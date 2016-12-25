import React from 'react'
import Page from '../components/page'
import Item from '../components/item'
import getItem from '../lib/get-item'
import getComments from '../lib/get-comments'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    const story = await getItem(id)
    const comments = story
      ? req
        ? await getComments(story.comments)
        : null
      : null
    return { story, comments, id }
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { story } = this.props
    const comments = this.state.comments || this.props.comments
    return <Page>
      <Item story={story} comments={comments} />
    </Page>
  }

  componentDidMount () {
    if (!this.props.comments) {
      // populate comments client side
      getComments(this.props.story.comments)
      .then((comments) => {
        this.setState({ comments })
      })
      .catch((err) => {
        // TODO: handle error
      })
    }
  }

}
