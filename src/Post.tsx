import { useEffect, useState } from 'react';

import './Post.css';

function Post(props: any) {
    const { post_url } = props.match.params;

    const [ post, setPost ] = useState({'image': '', 'title': '', 'content': ''});

    useEffect(() => {
        fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${post_url}`)
      .then(response => response.json())
      .then(json => {
        setPost({
            'image': json[0]._embedded['wp:featuredmedia'][0].source_url,
            'title': json[0].title.rendered,
            'content': json[0].content.rendered
        });
      });
    }, []);

    return (
        <div className="post2">
            <img className="post__image2" src={post.image} alt="" />
            <h1 className="post__title2">{post.title}</h1>
            <p className="post__content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export default Post;