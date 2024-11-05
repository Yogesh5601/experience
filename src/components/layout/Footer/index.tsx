// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary w-full">
      <div className=" text-gray pt-20 p-10 text-center w-full max-w-screen-xl mx-auto">
        <div className="flex justify-center space-x-4 mb-2">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-gray-200" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-gray-200" />
          </Link>
          <Link
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterestP className="hover:text-gray-200" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-gray-200" />
          </Link>
        </div>
        <p className="mb-1">
          Email me:{" "}
          <Link href="mailto:info@mysite.com" className="underline">
            shrivasyogesh2000@gmail.com
          </Link>
        </p>
        <p>
          © 2035 by Yogesh shrivas. Powered and secured by non coders
          
        </p>
      </div>
    </footer>
  );
}
