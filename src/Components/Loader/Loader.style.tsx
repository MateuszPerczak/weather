import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { LoaderComponent } from "./Loader.types";

const StyledLoader: LoaderComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  user-select: none;
  pointer-events: none;
  letter-spacing: 0.1rem;
`;

export const StyledImg = styled(motion.img)`
  max-width: 150px;
`;

export default StyledLoader;
