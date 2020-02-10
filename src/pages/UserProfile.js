import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "reactstrap";
import axios from "axios";
import Image from "react-graceful-image";
import Loader from "../components/Loader";

const UserProfile = ({ users }) => {
  const { id, username } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
      .then(result => {
        setImages(result.data);
      });
  }, [id]);

  return (
    <>
      <Container fluid>
        <h1>{username}'s Profile</h1>
        <Card className="w-100 bg-transparent p-4 border-0">
          {images.length === 0 ? (
            <Loader primaryColor="white" secondaryColor="blue" size="200px" />
          ) : (
            <div style={{ columnCount: 3, columnGap: "1em" }}>
              {images.map((image, idx) => {
                return (
                  <Image
                    key={idx}
                    src={image}
                    style={{
                      display: "inline-block",
                      margin: "0 0 1em",
                      width: "100%"
                    }}
                  />
                );
              })}
            </div>
          )}
        </Card>
      </Container>
    </>
  );
};

export default UserProfile;
