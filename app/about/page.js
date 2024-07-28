import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <h2 className="mt-5 font-bold text-4xl">About page</h2>
      <ul className="flex gap-8 mt-12">
        <li className="font-bold text-indigo-600">
          <Link href="/about/student">Student</Link>
        </li>
        <li className="font-bold text-indigo-600">
          <Link href="about/teacher">Teacher</Link>
        </li>
      </ul>
    </div>
  );
}
