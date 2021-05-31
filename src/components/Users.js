export default function Users(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {props.logos.map((logo, id) => (
        <div
          style={{
            marginBottom: "10px",
            flexBasis: 0,
            flexGrow: 1,

            marginLeft: "10px",
          }}
        >
          <img src={logo.src}></img>
        </div>
      ))}
    </div>
  );
}
