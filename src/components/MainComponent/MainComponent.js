import React from "react";
import { Image, Grid } from "semantic-ui-react";

const NewsList = props => {
  const newsList = props.news.articles.map((news, i) => (
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={news.urlToImage} alt={news.title} size="large" centered />
        <p key={i} style={{ margin: "2rem 0" }}>
          <a href={news.url} class="title">
            {news.title}
          </a>
          <br />
          <span>Source: {news.source.name}</span> <br />
          <span>published at {news.publishedAt}</span>
        </p>
      </Grid.Column>
    </Grid.Row>
  ));
  return (
    <div>
      <h3 style={{ color: "#ffffff" }}>Techie Top-headlines</h3>

      <ul>{newsList}</ul>
    </div>
  );
};

export default NewsList;
