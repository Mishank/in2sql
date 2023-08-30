import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ListOfArticles from "./pages/listOfArticles";
import Contact from "./pages/contact";
import Article from "./pages/article";
import Questionnaire from "./pages/questionnaire";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainPage />} exact />
      <Route path="/listOfArticles" element={<ListOfArticles />} />
      <Route path="/article" element={<Article />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
    </Switch>
  );
};

export default Routes;
