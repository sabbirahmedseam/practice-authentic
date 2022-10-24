import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  // console.log(news);
  const { details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/news/${category_id}`}>
            <Button variant="primary">Go Before</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
