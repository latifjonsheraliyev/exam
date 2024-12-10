import React from 'react';
import { IoLocationOutline, IoLogoLinkedin } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            {/* Main Footer Section */}
            <footer className="bg-[#021736] text-gray-100 p-12 mt-10">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        {/* Company Section */}
                        <nav className="flex-1">
                            <h6 className="footer-title text-xl mb-4">Company</h6>
                            <ul className="space-y-2">

                                <li>
                                    <Link to='/aboutUs' className="link link-hover text-xl">About Us</Link>
                                </li>
                                <li>
                                    <Link to='/blog' className="link link-hover text-xl">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/faqs" className="link link-hover text-xl">
                                        FAQ
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/returns" className="link link-hover text-xl">
                                        Returns
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Info Section */}
                        <nav className="flex-1">
                            <h6 className="footer-title text-xl mb-4">Info</h6>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/how-it-works" className="link link-hover text-xl">
                                        How It Works?
                                    </a>
                                </li>
                                <li>
                                    <a href="/our-promises" className="link link-hover text-xl">
                                        Our Promises
                                    </a>
                                </li>

                                <li>
                                    <a href="/advertisement" className="link link-hover text-xl">
                                        Advertisement
                                    </a>
                                </li>

                            </ul>
                        </nav>

                        {/* Contact Us Section */}
                        <nav className="flex-1">
                            <h6 className="footer-title text-xl mb-4">Contact Us</h6>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <IoLocationOutline className="w-6 h-6" />
                                    <span className="text-xl">123 Main Street, USA</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <LuPhoneCall className="w-5 h-5" />
                                    <span className="text-xl">+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdMarkEmailRead className="w-5 h-5" />
                                    <span className="text-xl">infotechheim@gmail.com</span>
                                </li>
                            </ul>
                        </nav>

                        {/* Newsletter Section */}
                        <form className="flex-1">
                            <h6 className="footer-title text-xl mb-4">Newsletter</h6>
                            <label className="flex items-center bg-white rounded-md p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-6 w-6 text-black opacity-70 mr-2"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="email"
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="E-mail Address"
                                    required
                                />
                            </label>
                            <div className="mt-6 flex space-x-4">
                                <a href="https://facebook.com" aria-label="Facebook">
                                    <FaFacebookSquare className="h-8 w-8 hover:text-blue-500" />
                                </a>
                                <a href="https://twitter.com" aria-label="Twitter">
                                    <FaTwitter className="h-8 w-8 hover:text-blue-400" />
                                </a>
                                <a href="https://instagram.com" aria-label="Instagram">
                                    <FaInstagram className="h-8 w-8 hover:text-pink-500" />
                                </a>
                                <a href="https://linkedin.com" aria-label="LinkedIn">
                                    <IoLogoLinkedin className="h-8 w-8 hover:text-blue-700" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
            {/* Lower Footer Section */}
            <footer className="bg-[#021736] text-gray-100 border-t border-base-300 px-6 py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <aside className="text-xl text-gray-400 mb-4 md:mb-0">
                        <p>
                            © {new Date().getFullYear()} - All rights reserved by Tech Heinpm m Industries Ltd
                        </p>
                    </aside>
                    <nav>
                        <div className="flex space-x-6">
                            <Link to="/cookieSettings" className="text-gray-300 text-xl hover:text-white">
                                Cookie Settings
                            </Link>
                            <Link to="/PrivacyPolicy" className="text-gray-300 text-xl hover:text-white">
                                Privacy Policy
                            </Link>
                            <Link to="/termsConditions" className="text-gray-300 text-xl hover:text-white">
                                Terms and Conditions
                            </Link>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
