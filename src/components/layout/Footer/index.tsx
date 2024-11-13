// components/Footer.js
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary w-full">
      <div className=" text-gray pt-20 p-10 text-center w-full max-w-screen-xl mx-auto">
        <div className="flex justify-center space-x-4 mb-2">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-accent text-gray" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yogesh-shrivas-1998aa231/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="hover:text-accent text-gray" />
          </Link>
          <Link
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaGithub className="hover:text-accent text-gray" />
          </Link>
          <Link
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord className="hover:text-accent text-gray" />
          </Link>
        </div>
        <p className="mb-1">
          Email me:{" "}
          <Link href="mailto:info@mysite.com" className="underline">
            shrivasyogesh2000@gmail.com
          </Link>
        </p>
        <p>© 2035 by Yogesh shrivas. Powered and secured by non coders</p>
      </div>
    </footer>
  );
}
