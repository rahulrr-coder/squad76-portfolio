import React from 'react';
import { Link } from 'react-router-dom';
import "../homecomps/home.css";
import Logo from "../assets/logo.jpeg";

const Home = () => {
  return (

    <div>
      <img src="Logo" alt="logo" />
      <h1 id='sname'>SQUAD 76</h1>
      <h2 id='qs'>"Powered by ambition, defined by success."</h2>
      <div className="navs">
      <div className='cds'> 
        <h2 className="nm">Memory Vault</h2>
      </div>
      <div className='cds'> 
      <h2 className="nm">Innovation Atlas</h2>
      </div>
      <div className='cds'> 
      <h2 className="nm">Blogs</h2>
      </div>
      

      </div>
      <nav>
        <ul>
          <li>
            <Link to="/inovation_atlas">Inovation Atlas</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/memory_valut">Memory Vault</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
