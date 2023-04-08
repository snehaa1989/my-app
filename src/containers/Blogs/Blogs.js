import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar';
import Categories from './components/Categories/Categories';
import { getCategoryBlogs } from './components/Categories/Categories';
import Cards from './components/Cards/Cards';
import './Blogs.css';

function Blogs(props) {
  const [blogs, setBlogs] = useState([]);
  const [slug, setSlug] = useState('');
  useEffect(() => {
    if(slug !== '')
    {
      getCategoryBlogs(slug).then(response => {
        console.log(response);
        setBlogs(response);
        return response;
      });
    }
  }, [slug]);
  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <div className='Blogs'>
      <div className='Blogs-header'>
        {
          <ResponsiveAppBar />
        }
      </div>
      <div className='Blogs-categories'>
        {
          <Categories setSlug = {setSlug}/>
        }
      </div>
      <div className='Blogs-cards'>
        {
          <Cards blogs = {blogs}/>
        }
    </div>
    </div>
  );
}
export default Blogs;