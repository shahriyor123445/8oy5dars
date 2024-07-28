import React from "react";

export default async function page({ params }) {
  const response = await fetch(
    "https://fakestoreapi.com/products/${params.id}"
  );
  const product = await response.json();
  return (
    <div>
      <h2>Product id: {params.id}</h2>
      <p>{product && product.title}</p>
    </div>
  );
}
