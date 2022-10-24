import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const { _id, title, author, total_view, rating, details, image_url } = news;

  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image
              style={{ height: "60px" }}
              roundedCircle
              src={author?.img}
            ></Image>

            <div>
              <p className="mb-0">{author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className='me-2'></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url}></Card.Img>
          <Card.Text>
            {details?.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/category/${_id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar></FaStar> <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye> <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
