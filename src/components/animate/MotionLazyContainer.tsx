import PropTypes from "prop-types";
import { LazyMotion, m } from "framer-motion";
import { ReactNode } from "react";
const loadFeatures = () => import("./feature").then((res) => res.default);

interface MotionLazyContainerProps {
  children?: ReactNode;
}

const MotionLazyContainer = ({ children }: MotionLazyContainerProps) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: "100%" }}> {children} </m.div>
    </LazyMotion>
  );
};

export default MotionLazyContainer;
