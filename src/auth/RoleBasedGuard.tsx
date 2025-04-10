import { ReactNode } from "react";
import { useAuthContext } from "./useAuthContext";
import { Container } from "@mui/system";
import { m } from "framer-motion";
import { Typography } from "@mui/material";
import { ForbiddenIllustration } from "../assets/illustrations";
import { MotionContainer, varBounce } from "../components/animate";
interface RoleBasedGuardProps {
  children: ReactNode;
  hasContent?: boolean;
  roles?: Array<any>;
}

const RoleBasedGuard = ({
  children,
  hasContent,
  roles,
}: RoleBasedGuardProps) => {
  const { user } = useAuthContext();
  const currentRole = user?.role;
  if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: "center" }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Permission Denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            You do not have permission to access this page
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    ) : null;
  }

  return <> {children} </>;
};

export default RoleBasedGuard;
