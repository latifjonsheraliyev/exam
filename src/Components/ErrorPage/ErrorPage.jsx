import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-2xl w-full mx-4">
        <motion.div
          initial={{ rotate: -10, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <motion.h1
            className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            404
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mt-8 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 text-lg mb-8 px-4">
            The page you are looking for seems to have vanished into the digital
            abyss.
          </p>
          <Link to="/">
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(59,130,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Take Me Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
