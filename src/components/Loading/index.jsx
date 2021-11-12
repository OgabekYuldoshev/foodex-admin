import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        zIndex: 10,
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Loader type="TailSpin" color="#00BFFF" />
    </div>
  );
};

export default Loading;
