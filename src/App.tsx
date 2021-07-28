import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ posts, setPosts ] = useState([{'image': '', 'title': '', 'link': ''}]);

  useEffect(function() {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log(json[0]._embedded['wp:featuredmedia'][0].source_url);
        console.log(json[0].title.rendered);
        console.log(json[0].link);
        console.log(json[0].slug);

        let postsTemp: any = [];
        json.forEach((el: any) => {
          console.log(el.slug);
          postsTemp.push({
            'image': el._embedded['wp:featuredmedia'][0].source_url,
            'title': el.title.rendered,
            'link': el.slug
          });
        });
        console.log(postsTemp);
        setPosts(postsTemp);
      });
  }, []);

  return (
    <>
    <h1>Página Inicial</h1>
    { posts.map((post) => {
      return (
        <div className="post">
          <img className="post__image" src={post.image} alt="" />
          <p className="post__title">{post.title}</p>
          <a className="post__link" href={post.link}>Acessar post</a>
        </div>
      )
    }) }
    </>
  );
}

export default App;
