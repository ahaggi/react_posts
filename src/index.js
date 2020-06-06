import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moc from './moc'
import Post from './post'
import EditComponent from './editComponent'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: moc,
            editMode: false,
            editpost: {}

        }

    }

    deletePostHandler(p) {
        let ndx = this.state.posts.indexOf(p)
        let _posts = this.state.posts.slice()
        // console.log(_posts.length + " " + ndx)
        _posts.splice(ndx, 1)
        this.setState({ posts: _posts })
    }

    editPostHandler(p) {
        this.setState({
            editpost: p,
            editMode: true
        })
    }

    updatePostHandler(p) {
        let ndx = this.state.posts.indexOf(this.state.editpost)
        let _posts = this.state.posts.slice()
        _posts.splice(ndx, 1, p)
        this.setState({
            posts: _posts, 
            editpost: null,
            editMode: false
        })

    }

    cancelEditModeHandler=()=> {
        this.setState({
            editpost: null,
            editMode: false
        })
    }

    getPost(p) {
        return <Post
            key={p.id}
            post={p}
            onDelete={() => this.deletePostHandler(p)}
            onEdit={() => this.editPostHandler(p)}

        />
    }

    renderAllPosts() { return this.state.posts.map(p => this.getPost(p)) }

    render() {
        return (
            this.state.editMode ?

                <EditComponent
                    post={this.state.editpost}
                    onUpdate={(p) => this.updatePostHandler(p)}
                    onCencel={this.cancelEditModeHandler}
                />


                :

                <div className="table-responsive">
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Completed</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAllPosts()}

                        </tbody>
                    </table>
                </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


