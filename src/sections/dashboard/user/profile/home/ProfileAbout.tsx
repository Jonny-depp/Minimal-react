import { styled } from "@mui/material/styles";
import Iconify from "../../../../../components/iconify";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";

const StyledIcon = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));
interface ProfileAboutProps {
  company: string;
  country: string;
  email: string;
  quote: string;
  role: string;
  school: string;
}

const ProfileAbout = ({
  quote,
  country,
  email,
  role,
  company,
  school,
}: ProfileAboutProps) => {
  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{quote}</Typography>

        <Stack direction="row">
          <StyledIcon icon="eva:pin-fill" />

          <Typography variant="body2">
            Live at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {country}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <StyledIcon icon="eva:email-fill" />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row">
          <StyledIcon icon="ic:round-business-center" />

          <Typography variant="body2">
            {role} at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {company}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <StyledIcon icon="ic:round-business-center" />

          <Typography variant="body2">
            Studied at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {school}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileAbout;
