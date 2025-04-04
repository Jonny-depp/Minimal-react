import { useTheme } from "@mui/material/styles";
import { m, useScroll, useSpring } from "framer-motion";
import { HomeHero } from "../sections/home";

const Homepage = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: "fixed",
        transformOrigin: "0%",
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      {progress}
      <HomeHero />
    </>
  );
};
export default Homepage;
