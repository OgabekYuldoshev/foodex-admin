import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOrders } from "store/actions/orders";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  CardTitle,
  Badge,
} from "reactstrap";
import { ctx } from "constants/index";
import Loader from "react-loader-spinner";
import dateFormat from "dateformat";

const Orders = ({ token, loading, getOrders, orders }) => {
  useEffect(() => {
    getOrders(token);
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Orders</CardTitle>
              </CardHeader>
              <CardBody>
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
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>OrderID</th>
                        <th>Deller</th>
                        <th>Foods</th>
                        <th>Payment</th>
                        <th>Paid</th>
                        <th>Date</th>
                        <th className="text-center">Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders && orders.length ? (
                        orders.map((order) => (
                          <tr>
                            <td>{order._id}</td>
                            <td>{order.dellerID.fullname}</td>
                            <td>{order.foods && order.foods.length}</td>
                            <td>{order.payment}</td>
                            <td>
                              {order.paid ? (
                                <Badge color="success">To'langan</Badge>
                              ) : (
                                <Badge color="danger">To'lanmagan</Badge>
                              )}
                            </td>
                            <td>
                              {dateFormat(order.created, "yyyy-m-d hh:MM TT")}
                            </td>
                            <td className="text-center">
                              {ctx.normalizer(order.total)} sum
                            </td>
                          </tr>
                        ))
                      ) : (
                        <span>No Data</span>
                      )}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapToState = ({ user, orders }) => ({
  orders: orders.orders,
  loading: orders.loading,
  token: user.token,
});

const mapToDispatch = (dispatch) => ({
  getOrders: (token) => dispatch(getOrders(token)),
});

export default connect(mapToState, mapToDispatch)(Orders);
