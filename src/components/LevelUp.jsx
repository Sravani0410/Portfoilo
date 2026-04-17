import React from "react";
import { motion } from "framer-motion";
import levelupImg from "../assets/levelup.png";

const LevelUp = () => {
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
          LevelUp - Placement & Hiring Platform
        </h5>
        <img
          className="rounded-t-lg w-full mb-4"
          src={levelupImg}
          alt="LevelUp platform preview"
        />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Built a role-based placement platform using React.js, Node.js, and
          MongoDB with company/position management, candidate application, and
          shortlisting workflows.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Designed multi-stage hiring rounds (assignments, online tests,
          interviews), offer rollout workflows with admin approval, and
          integrated notifications via Email, Slack, and WhatsApp.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Developed jobseeker dashboards for applied, ongoing, and rejected
          positions, including weekly reports and production issue resolution.
        </p>
        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
          Tech-Stack: React.js | Node.js | Express.js | MongoDB | Slack
          Notifications
        </p>
        <a
          href="https://levelup.masaischool.com/"
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

export default LevelUp;
