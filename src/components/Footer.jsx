import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://wa.me/9645016304", icon: <FaWhatsapp /> },
  { href: "https://www.instagram.com/anasmk_07/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/muhammedanasm/", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left text-[#fff]">
          ©Anas 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start text-[#fff]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
