import type { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
    >
      <Link to="/">Y</Link>
    </motion.div>
  );
};

export default Home;
