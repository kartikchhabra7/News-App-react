import React from "react";
import "./layout.css";
const Footer = () => {
  const developerName = "Kartik Chhabra";
  const CurrentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://in.linkedin.com/in/kartik-chhabra-65a2b822b"
          rel=""
        >
          {developerName}
        </a>{" "}
        | {CurrentYear}
      </p>
    </footer>
  );
};

export default Footer;
