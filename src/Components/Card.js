import React from "react";

const Card = (props) => {
  const styles = {
    image: {
      width: "100%",
      height: "100px",
      objectFit: "contain",
    },
    desc: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      lineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    container: {
      width: "200px",
      //   backgroundColor: "rgba(10, 122, 45)",
    },
  };

  return (
    <div>
      <div className="card m-2 p-1" style={styles.container}>
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt={props.title}
          style={styles.image}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.title}</h5>
          <p
            className="card-text text-desc"
            //   style={styles.desc}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
