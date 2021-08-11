import { useEffect, useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {

  const [ posts, setPosts ] = useState([{'image': '', 'title': '', 'link': ''}]);
  const [ totalPosts, setTotalPosts ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ visible, setVisible ] = useState('invisible');

  function handleLoadMorePosts(evt: any) {
    if (currentPage >= totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  useEffect(function() {
    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`)
      .then(response => {   
        if (parseInt(response.headers.get("X-WP-TotalPages") || '0') > 1 
         && parseInt(response.headers.get("X-WP-TotalPages") || '0') > currentPage ) {
          setVisible('visible');
        } else {
          setVisible('invisible');
        }
        setTotalPosts(parseInt(response.headers.get("X-WP-Total") || '0'));
        setTotalPages(parseInt(response.headers.get("X-WP-TotalPages") || '0'));
        return response.json(); 
      })
      .then(json => {
        let postsTemp: any = [];
        json.forEach((el: any) => {
          postsTemp.push({
            'image': el._embedded['wp:featuredmedia'] ? el._embedded['wp:featuredmedia'][0].source_url : '',
            'title': el.title.rendered,
            'link': '/post/' + el.slug
          });
        });
        setPosts([...posts, ...postsTemp]);
      });
  }, [currentPage]);

  return (
    <>
    <h1 className="title">Postagens do blog com a categoria Desenvolvimento</h1>

    <section className="posts">
    { posts.map((post) => {
       
      return post.title == '' || (
        <div className="post">
          <img className="post__image" src={post.image} alt="" />
          <p className="post__title">{post.title}</p>
          <Link className="post__link" to={post.link}>Acessar post</Link>
        </div>
      )
    }) }
    </section>
    <section className="load-more">
      <button onClick={handleLoadMorePosts} className={`load-more__button ${visible}`}>
        Carregar mais ...
      </button>
    </section>
    
    </>
  );
}

export default App;
