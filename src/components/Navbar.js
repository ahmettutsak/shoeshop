import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-6 flex justify-around">
      <div className="flex gap-4">
        <div>Logo</div>
        <h2>Name</h2>
      </div>
      <span className="flex gap-4">
        <Link className="font-bold" href={"/"} to="/">
          Home
        </Link>
        <Link className="font-bold" href={"/"} to="/products">
          Products
        </Link>
        <Link className="font-bold" href={"/"} to="/about">
          About
        </Link>
        <Link className="font-bold" href={"/"} to="/contact">
          Contact
        </Link>
      </span>
    </nav>
  );
}
