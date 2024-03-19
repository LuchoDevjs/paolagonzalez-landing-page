import Link from "next/link";
import { dataNavbar } from ".";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex flex-row items-center gap-7">
        {dataNavbar.map(({ id, name, idLink }) => (
          <Link
            key={id}
            href={idLink}
            className="hover:text-secondary tracking-widest"
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-5">
        <Link href="" className="hover:text-secondary" target="_blank">
          <FaInstagram size={30} />
        </Link>
        <Link href="" className="hover:text-secondary" target="_blank">
          <FaWhatsapp size={30} />
        </Link>
      </div>
    </nav>
  );
};
