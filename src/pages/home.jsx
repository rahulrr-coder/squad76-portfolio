import React from 'react';
import { Link } from 'react-router-dom';
import "../homecomps/home.css";
import Logo from "../assets/logo.jpeg";

const Home = () => {
  return (

    <div>
      <div id="nms">
      <img src={Logo} id='logo' alt="logo" />
      <h1 id='sname'>SQUAD 76</h1>
      <h2 id='qs'>"Powered by ambition, defined by success."</h2>
      
      </div>
      <div className="navs">

      <Link to="/inovation_atlas">  
      <div className='cds' id='c1'>
        <h2 className="nm">Inovation Atlas</h2>
      </div>
      </Link>
      <Link to="/memory_valut">
      <div className='cds' id='c2'> 
      <h2 className="nm">Memory Vault</h2>
      </div>
      </Link>
      <Link to="/blog">
      <div className='cds' id='c3'> 
      <h2 className="nm">Blogs</h2>
      </div>
      </Link>
      

      </div>
    </div>
  );
};

export default Home;
