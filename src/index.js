import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navbar'
import HomePage from './components/pages/homepage';
import AboutPage from './components/pages/aboutpage';
import ArticlePage from './components/pages/articlepage';
import ArticleListPage from './components/pages/articlelistpage';


ReactDOM.render(
<BrowserRouter>
<div>
        <NavBar />
        <div>
        <Route path='/' exact component = {HomePage} />
        <Route path='/about' exact component = {AboutPage} />
        <Route path='/article/:name' exact component = {ArticlePage} />
        <Route path='/articlelist' exact component = {ArticleListPage} />
        </div>
</div>
</BrowserRouter>
  ,document.getElementById('root'))
