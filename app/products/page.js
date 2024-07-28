import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";

export default async function page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="container mx-auto">
      <Navbar />
      <h2 className="font-bold text-4xl mt-5">Products page</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link className="text-indigo-600" href={"products/${p.id}"}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
