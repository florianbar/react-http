import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path="/" render={() => <h1>Home</h1>} /> */}
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/posts/:id" component={FullPost} />
                    <Route exact path="/new-post" component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;