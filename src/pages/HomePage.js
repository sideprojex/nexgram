import React from "react";
import { Col, Card, CardBody, CardTitle, Container, Row } from "reactstrap";
import UserImages from "../components/UserImages";
import Image from "react-graceful-image";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const HomePage = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <Loader size="250px" primaryColor="#ecf542" secondaryColor="#f5428a" />
    );
  }
  return (
    <Container>
      <Row>
        {users.map(user => {
          return (
            <Col key={user.id} md={12}>
              <Card className="my-3">
                <CardBody>
                  <Row>
                    <Col md={4}>
                      <CardTitle
                        tag={Link}
                        to={`/user/${user.id}/${user.username}`}
                        className="text-dark text-left"
                      >
                        {user.username}
                      </CardTitle>
                      <Image
                        className="w-75 mx-auto d-block rounded"
                        src={user.profileImage}
                        alt={user.username}
                      />
                    </Col>
                    <Col md={8}>
                      <div style={{ columnCount: 3, columnGap: "1em" }}>
                        <UserImages userId={user.id} />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomePage;
