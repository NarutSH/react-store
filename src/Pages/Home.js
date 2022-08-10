import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const resJson = await res.json();

    setUsers(resJson);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {users.map((item) => {
        return (
          <Card
            title={item.title}
            description={item.description}
            imageUrl={item.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
