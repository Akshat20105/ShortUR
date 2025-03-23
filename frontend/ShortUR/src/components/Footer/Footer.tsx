import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import React Icons

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-blue-700 text-white text-sm text-center py-4 sm:rounded-b-2xl">
      <p className="mb-2">&copy; {new Date().getFullYear()} ShortUR | Built by Akshat</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Akshat20105"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition"
        >
          <FaGithub className="text-xl" />
        </a>

        
        <a
          href="https://www.linkedin.com/in/akshat-raj-826661255/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-300 transition"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
