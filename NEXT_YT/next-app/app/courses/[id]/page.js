'use client'
import { useParams } from "next/navigation";
import React from "react";

const Product = () => {
    const params = useParams();
    console.log(params.id); // This should log the correct value

    return (
      <div>
        <h1 className="text-xl text-indigo-600">{params.id} Course</h1>
      </div>
    );
};

export default Product;
