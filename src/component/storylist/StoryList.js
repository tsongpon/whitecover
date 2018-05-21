import React, { Component } from 'react';

let StoryList = props => (
    <div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <footer className="blockquote-footer">by <cite title="Source Title">{props.author}</cite></footer>
                <a href="#" className="btn btn-primary">อ่านเรื่อง {props.title} ต่อ</a>
            </div>
        </div>
        <br />
    </div>
)

export default StoryList