import React, { Component } from 'react'

export default class EditComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.post.userId,
            id: props.post.id,
            title: props.post.title,
            body: props.post.body
        }

    }

    onUpdateHandler = () => {
        let p = {
            userId: this.state.userId,
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        this.props.onUpdate(p)
    }


    render() {
        return (<div>
            <p>userId: <input
                type="text"
                value={this.state.userId}
                onChange={(e) => {
                    let value = e.target.value
                    this.setState({ userId: value })
                }}

            />
            </p>
            <p>Title: <input
                type="text"
                value={this.state.title}
                onChange={(e) => {
                    let value = e.target.value
                    this.setState({ title: value })
                }}

            />
            </p>
            <p>Body: <input
                type="text"
                value={this.state.body}
                onChange={(e) => {
                    let value = e.target.value
                    this.setState({ body: value })
                }}

            />
            </p>

            <button onClick={this.onUpdateHandler} >Update</button>
            <button onClick={this.props.onCencel}>Cancel</button>
        </div>
        )
    }

} 