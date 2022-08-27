import React, { useEffect, useState } from "react";
import axios from "axios";

const AlquileresContainer = () => {
  const [alquileres, setAlquileres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setAlquileres(res.data.login));
    console.log(alquileres);
  }, []);

  return <div>AlquileresContainer</div>;
};

export default AlquileresContainer;
