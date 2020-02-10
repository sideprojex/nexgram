import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row, Button } from "reactstrap";
import Image from "react-graceful-image";
import Loader from "../components/Loader";
import axios from "axios";

const MyProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [images, setImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userInfo");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    } else {
      history.push("/");
    }

    axios({
      method: "GET",
      url: "https://insta.nextacademy.com/api/v1/images/me",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
    }).then(response => {
      setImages(response.data);
    });

    // eslint-disable-next-line
  }, []);

  if (!currentUser) {
    return <Loader primaryColor="yellow" secondaryColor="red" size="200px" />;
  }

  console.log(currentUser);

  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col md={6}>
            <Image src={currentUser.profile_picture} alt="meeee" />
          </Col>
          <Col md={6}>
            <h1>{currentUser.username}</h1>
            <Button className="mt-4" color="secondary">
              Upload New Image
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <hr />
        {images.length > 0 ? (
          <div
            className="w-100 mt-5"
            style={{ columnCount: 3, columnGap: "1em" }}
          >
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  style={{ width: "100%", margin: "0 0 1em", display: "block" }}
                />
              );
            })}
          </div>
        ) : (
          <h1 className="mt-5">No Images to display! Make a post!</h1>
        )}
      </Container>
    </div>
  );
};

export default MyProfilePage;
