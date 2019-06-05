import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Login from "./components/Login/Login";
import NewsList from "./components/MainComponent/MainComponent";
import Date from "./components/Date/Date";
class App extends Component {
  state = {
    logged: false,
    username: "",
    news: {}
  };
  componentDidMount() {
    this.getNews().then(data => this.setState({ news: data }));
  }
  login = username => {
    this.setState({
      logged: true,
      username
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
      console.log(err, "err in the catch block");
      return err;
    }
  };
  render() {
    const { news } = this.state;
    return (
      <div className="App">
        {this.state.logged ? (
          <div>
            <Date />
            <NewsList news={news} />
          </div>
        ) : (
          <Login login={this.login} />
        )}
      </div>
    );
  }
}
export default App;
