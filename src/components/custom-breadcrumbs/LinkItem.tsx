import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";

interface BreadcrumbsLinkProps {
  activeLast: boolean;
  disabled: boolean;
  link: any;
}

export default function BreadcrumbsLink({
  link,
  activeLast,
  disabled,
}: BreadcrumbsLinkProps) {
  const { name, href, icon } = link;

  const styles = {
    display: "inline-flex",
    alignItems: "center",
    color: "text.primary",
    ...(disabled &&
      !activeLast && {
        cursor: "default",
        pointerEvents: "none",
        color: "text.disabled",
      }),
  };

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: "inherit",
            "& svg": { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  );

  if (href) {
    return (
      <Link component={RouterLink} to={href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <Box sx={styles}> {renderContent} </Box>;
}
