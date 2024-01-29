import "./Card.css";

export const Card = (props) => {
  // now item is the state varibale of araay of object type

  return (
    <>
      <div className="card">
        <img src={props.img} alt="" />
        <div className="info">
          <h5>{props.title}</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};
