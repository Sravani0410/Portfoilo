import React from "react";
import { motion } from "framer-motion";
import onwardsImg from "../assets/onwards.png";

const Onwards = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Onwards - IIT & IIM Course Enrollment Platform
        </h5>
        <img
          className="rounded-t-lg w-full mb-4"
          src={onwardsImg}
          alt="Onwards platform preview"
        />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Designed and developed frontend pages for IIT and IIM course flows,
          and built post-enrollment onboarding with welcome kit and secure
          document upload integration.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Implemented profile management features with admin approvals for phone
          and email updates, and handled post-payment workflows including PDF
          receipt storage and dashboard visibility.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Developed application and enrollment dashboards with status and count
          insights by integrating frontend and backend APIs.
        </p>
        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
          Tech-Stack: React.js | Node.js | Express.js | API Integration |
          Dashboard Development
        </p>
        <a
          href="https://www.masaischool.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View
        </a>
      </div>
    </motion.div>
  );
};

export default Onwards;
