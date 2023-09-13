import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 font-semibold text-white py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2  md:gap-6'>
          <div className='flex gap-8'>
            <a href='#' className='text-white hover:text-blue-500'>
              <FaFacebookSquare />
            </a>
            <a href='#' className='text-white hover:text-blue-500'>
              <FaInstagram />
            </a>
            <a href='#' className='text-white hover:text-blue-500'>
              <FaTwitter />
            </a>
            <a href='#' className='text-white hover:text-blue-500'>
              <FaGithub />
            </a>
          </div>
          <div className='flex flex-row gap-8'>
            <a href='#' className='text-white hover:text-blue-500'>
              Condition of Use
            </a>
            <a href='#' className='text-white hover:text-blue-500'>
              Privacy & Policy
            </a>
            <a href='#' className='text-white hover:text-blue-500'>
              Press Room
            </a>
          </div>
          <p className='text-center'>&copy; 2021 MovieBox by Adriana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
