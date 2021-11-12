import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import { Log_In } from "../store/actions/user";

function Login({ Log_In, loading }) {
  let style = {
    main: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    card: {
      width: "500px",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Log_In({
      username: e.target["username"].value,
      password: e.target["password"].value,
    });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div style={style.main}>
        <div style={style.card}>
          <Form onSubmit={(event) => handleLogin(event)}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="username"
                placeholder="Enter Username"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter Password"
                type="password"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  Log_In: (data) => dispatch(Log_In(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
