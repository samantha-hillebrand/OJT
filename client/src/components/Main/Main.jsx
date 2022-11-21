import React from "react";
import Nav from "../Nav/Nav";
import Container from "./Container/Container";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  // console.log('_id', _id)
  let { _id } = useParams();
  console.log(_id);

  useEffect(() => {

  }, [])

  return (
    <div>
      <Nav />
      <Container />
    </div>
  );
};

export default Main;