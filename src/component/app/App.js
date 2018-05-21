import React, { Component } from 'react';
import StoryList from '../storylist/StoryList'
import {getStories} from '../../util/StoryAPI'

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        getStories().then(data => {
            this.setState({
                stories: data
            })
        })
    }

    render() {
        let stories = this.state.stories.map(each => {
            return (
                <div>
                    <StoryList
                        title={each.title}
                        author={each.author}
                        content={each.content} />
                </div>
            )
        })

        return (
            <div>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light text-dark border-bottom box-shadow">
                    <h5 className="my-0 mr-md-auto font-weight-normal">White Cover</h5>
                </div>
                <div className='container'>
                    {stories}
                </div>
            </div>
        )
    }
}