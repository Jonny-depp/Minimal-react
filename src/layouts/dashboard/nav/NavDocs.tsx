import { Box, Stack } from "@mui/system";
import { useAuthContext } from "../../../auth/useAuthContext";
import { useLocales } from "../../../locales";
import { Button, Typography } from "@mui/material";
import { PATH_DOCS } from "../../../routes/paths";

interface userProp {
  displayName: string;
}

const NavDocs = () => {
  const { user } = useAuthContext();
  const { translate } = useLocales();
  const Appuser = user as userProp;
  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: "block",
        textAlign: "center",
      }}
    >
      <Box component="img" src="/assets/illustrations/illustration_docs.svg" />

      <div>
        <Typography gutterBottom variant="subtitle1">
          {`${translate("docs.hi")}, ${Appuser?.displayName}`}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
        >
          {`${translate("docs.description")}`}
        </Typography>
      </div>

      <Button
        href={PATH_DOCS.root}
        target="_blank"
        rel="noopener"
        variant="contained"
      >
        {`${translate("docs.documentation")}`}
      </Button>
    </Stack>
  );
};
export default NavDocs;
