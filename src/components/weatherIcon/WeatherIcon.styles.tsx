import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledWeatherIcon = styled.div`
  position: absolute;
  left: -400px;
  top: -400px;
  font-size: 50rem;
  color: #00000033;
  line-height: 0;
  z-index: -1;
  animation: rotate 10s infinite linear both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledWeatherIcon;
