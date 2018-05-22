import React, { Component } from 'react';
import Story from './Story';
import StoryCard from './StoryCard'
import { getStories } from '../util/StoryAPI'

export default class Listing extends Component {
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
                <div key={each.id}>
                    <StoryCard
                        id={each.id}
                        title={each.title}
                        author={each.author}
                        content={each.content} />
                </div>
            )
        })

        return (
            <div className='container'>
                {stories}
            </div>
        )
    }
}