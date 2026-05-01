import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center text-lg gap-8 text-white cursor-pointer font-[600]">
        <Link href='/product/men' >Men Collection</Link>
        <Link href='/product/women' >Women Collection</Link>
      </div>
      <h1 className="text-xl text-green-400">This is Product Page </h1>
    </div>
  );
};

export default Product;
