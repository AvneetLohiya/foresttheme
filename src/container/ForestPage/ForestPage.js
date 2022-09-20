import React from "react";
import Navbar from "../Navbar/Navbar";
import Headersection from "../Headersection/Headersection"


import "./ForestPage.css";

import Runningpage from "../../component/Running/Runningpage";
import Featuredproduct from "../../component/Featuredproduct/Featuredproduct";

import Sellingproductspage from "../../component/Sellingproducts/Sellingproductspage";


const ForestPage = () => {
  return (
    <>
     

   <Navbar/>
  <Headersection/>
  <Runningpage/>
  <Featuredproduct/>
  <Sellingproductspage/>
   </>
  );
};

export default ForestPage;