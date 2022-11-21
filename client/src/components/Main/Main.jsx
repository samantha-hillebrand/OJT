import React from "react";
import Nav from "../Nav/Nav";
import Container from "./Container/Container";
import Modal from "../Modal/Modal";
import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

export const InternsContext = createContext({
  interns: [],
  setInterns: () => {},
});

const Main = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/interns")
      .then((res) => setInterns(res.data))
      .catch((err) => console.log(err));
  }, []);

  const value = useMemo(() => ({ interns, setInterns }), [interns]);

  return (
    <InternsContext.Provider value={value}>
      <Modal />
      <Nav />
      <Container />
    </InternsContext.Provider>
  );
};

export default Main;
