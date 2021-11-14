import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
  CardSubtitle,
} from "reactstrap";
import { getDellers } from "store/actions/dellers";
import Loader from "react-loader-spinner";

const Dellers = ({ getDellers, token, dellers, loading }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getDellers(token);
  }, []);

  return (
    <>
      <div className="content">
        {loading ? (
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Loader type="TailSpin" color="#00BFFF" />
          </div>
        ) : (
          <Row xs="3">
            {dellers &&
              dellers.map((deller, i) => (
                <Col key={i}>
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <i className="tim-icons icon-single-02" />{" "}
                        <span>{deller.fullname}</span>
                      </CardTitle>
                      <CardSubtitle>
                        <Badge color={deller.access ? "success" : "warning"}>
                          {deller.access ? "Working" : "Warning"}
                        </Badge>
                      </CardSubtitle>
                      <CardText cssModule={{ display: "flex", gap: "10px" }}>
                        <Row xs="2">
                          <Col>
                            <span>Foods: {deller.foods.length}</span>
                          </Col>
                          <Col>
                            <span>Orders: {deller.orders.length}</span>
                          </Col>
                          <Col>
                            <span>Tel: +998945360773</span>
                          </Col>
                          <Col>
                            <span>Email: tash@gmail.com</span>
                          </Col>
                          <Col md="12">
                            <span>Address: Uzb, Tashkent, Samraknd</span>
                          </Col>
                        </Row>
                      </CardText>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          size="sm"
                          color="primary"
                          onClick={() => setModal(false)}
                        >
                          Infos
                        </Button>
                        <Button
                          size="sm"
                          color={deller.access ? "warning" : "success"}
                          onClick={() => setModal(false)}
                        >
                          {deller.access ? "Unaccess" : "Access"}
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => setModal(false)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </div>
    </>
  );
};

const mapToState = ({ user, dellers }) => ({
  dellers: dellers.dellers,
  loading: dellers.loading,
  token: user.token,
});

const mapToDispatch = (dispatch) => ({
  getDellers: (token) => dispatch(getDellers(token)),
});

export default connect(mapToState, mapToDispatch)(Dellers);
