import { m } from "framer-motion";
import { useState, useRef } from "react";
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Stack, Card, Typography, Link } from "@mui/material";
import Image from "../../../../components/image";
import { MotionContainer } from "../../../../components/animate";
import Carousel, {
  CarouselDots,
  CarouselArrows,
} from "../../../../components/carousel";
import { varFade } from "../../../../components/animate/variants/fade";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

interface AppFeaturedProps {
  list: Array<any>;
}

export default function AppFeatured({ list, ...other }: AppFeaturedProps) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? list.length - 1 : 0
  );

  const carouselSettings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: any, next: number) => setCurrentIndex(next),
    ...CarouselDots({
      sx: {
        top: 20,
        left: 20,
        position: "absolute",
      },
    }),
  };

  return (
    <Card {...other}>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {list.map((app, index) => (
          <CarouselItem
            key={app.id}
            item={app}
            isActive={index === currentIndex}
          />
        ))}
      </Carousel>

      <CarouselArrows
        sx={{ top: 8, right: 8, position: "absolute", color: "common.white" }}
      />
    </Card>
  );
}

interface CarouselItemProps {
  isActive: boolean;
  item: any;
}

function CarouselItem({ item, isActive }: CarouselItemProps) {
  const { image, title, description } = item;

  return (
    <MotionContainer action animate={isActive} sx={{ position: "relative" }}>
      <Stack
        spacing={1}
        sx={{
          p: 3,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="overline" component="div" sx={{ opacity: 0.48 }}>
            Featured App
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Link color="inherit" underline="none">
            <Typography variant="h5" noWrap>
              {title}
            </Typography>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap>
            {description}
          </Typography>
        </m.div>
      </Stack>

      <StyledOverlay />

      <Image
        alt={title}
        src={image}
        sx={{
          height: { xs: 280, xl: 320 },
        }}
      />
    </MotionContainer>
  );
}
