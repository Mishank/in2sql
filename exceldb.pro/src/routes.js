import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import GlobalFeed from './pages/globalFeed'
import Article from './pages/article'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<GlobalFeed />} exact />
      <Route path="/articles/:slug" element={<Article />} />
    </Switch>
  );
};

export default Routes;