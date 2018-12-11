import React from "react";
import { Link } from "gatsby";
import Moment from 'react-moment';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div id="post-list">
        {/* Your post list here. */
        postList.map(post => (
          <div className="post">
            <Link to={post.path} key={post.title}>
              <h2>{post.title}</h2>
            </Link>
            <Moment format="MMM DD, YYYY">
              {post.date}
            </Moment>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
