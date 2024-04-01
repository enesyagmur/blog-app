import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const takeBlogs = async () => {
    const response = await fetch("api/notes");
    const responseJson = await response.json();

    console.log(response);
  };
  useEffect(() => {
    takeBlogs();
  }, []);

  return <div>Detail</div>;
};

export default Detail;
