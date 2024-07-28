import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <h2 className="font-bold text-4xl mt-5">Home page</h2>
    </div>
  );
}
