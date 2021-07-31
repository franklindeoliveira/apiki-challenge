import { useEffect, useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {

  const [ posts, setPosts ] = useState([{'image': '', 'title': '', 'link': ''}]);

  useEffect(function() {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then(response => response.json())
      .then(json => {

        let postsTemp: any = [];
        json.forEach((el: any) => {
          postsTemp.push({
            'image': el._embedded['wp:featuredmedia'][0].source_url,
            'title': el.title.rendered,
            'link': '/post/' + el.slug
          });
        });
        setPosts(postsTemp);
      });
  }, []);

  return (
    <>
    <h1 className="title">Postagens do blog com a categoria Desenvolvimento</h1>

    <section className="posts">
    { posts.map((post) => {
      return (
        <div className="post">
          <img className="post__image" src={post.image} alt="" />
          <p className="post__title">{post.title}</p>
          <Link className="post__link" to={post.link}>Acessar post</Link>
        </div>
      )
    }) }      
    </section>
    <button className="load-more">Carregar mais ...</button>
    </>
  );
}

export default App;
