import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Login from "./components/Login/Login";
import NewsList from "./components/MainComponent/MainComponent";
import Date from "./components/Date/Date";
// import ArticlesList from "./components/ArticlesComponent/ArticlesComponent";

class App extends Component {
  state = {
    logged: false,
    news: {},
    articles: {}
  };
  componentDidMount() {
    this.getNews().then(data => this.setState({ news: data }));
    // this.getArticles().then(data => this.setState({ articles: data }));
  }
  login = username => {
    this.setState({
      logged: true
    });
  };
  getNews = async () => {
    try {
      const news = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=298967cce9244d7ca58c3313129de547"
      );
      if (!news.ok) {
        throw Error(news.response.statusText);
      }
      const newsJason = await news.json();
      return newsJason;
    } catch (err) {
      return err;
    }
  };
  // getArticles = async () => {
  //   try {
  //     const articles = await fetch(
  //       "https://newsapi.org/v2/articles?domains=wsj.com,nytimes.com&apiKey=298967cce9244d7ca58c3313129de547"
  //     );
  //     if (!articles.ok) {
  //       throw Error(articles.response.statusText);
  //     }
  //     const articlesJason = await articles.json();
  //     return articlesJason;
  //   } catch (err) {
  //     return err;
  //   }
  // };
  render() {
    const { news } = this.state;
    return (
      <div className="App">
        {this.state.logged ? (
          <div>
            <Date />
            <NewsList news={news} />
            {/* <ArticlesList articles={articles} /> */}
          </div>
        ) : (
          <Login login={this.login} />
        )}
      </div>
    );
  }
}
export default App;
