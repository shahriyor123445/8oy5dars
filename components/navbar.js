import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex">
      <ul className="flex justify-center gap-8 mt-12 bg-black w-full text-white">
        <li>
          <Link href="/" className="border-b-2 border-white pb-1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="border-b-2 border-white pb-1">
            About
          </Link>
        </li>
        <li>
          <Link href="/products" className="border-b-2 border-white pb-1">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
