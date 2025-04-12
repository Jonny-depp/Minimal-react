import { Box, Link, Stack, Typography, Breadcrumbs } from "@mui/material";
import LinkItem from "./LinkItem";
import { ReactNode } from "react";

interface CustomBreadcrumbsProps {
  sx?: object;
  action?: ReactNode;
  links: Array<any>;
  heading: string;
  moreLink?: Array<any>;
  activeLast?: boolean;
}

export default function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1].name;

  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}

          {!!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem
                  key={link.name || ""}
                  link={link}
                  activeLast={activeLast || false}
                  disabled={link.name === lastLink}
                />
              ))}
            </Breadcrumbs>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: "table" }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        bgcolor: "text.disabled",
      }}
    />
  );
}
