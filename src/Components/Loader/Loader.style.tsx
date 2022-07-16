import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { LoaderComponent } from "./Loader.types";

const StyledLoader: LoaderComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyledLoader;
