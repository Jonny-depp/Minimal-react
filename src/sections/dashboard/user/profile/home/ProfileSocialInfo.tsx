import { Link, Card, CardHeader, Stack } from "@mui/material";
import { _socials } from "../../../../../_mock/arrays";
import Iconify from "../../../../../components/iconify";

export default function ProfileSocialInfo({ socialLinks }: any) {
  const { facebookLink, instagramLink, linkedinLink, twitterLink } =
    socialLinks;

  return (
    <Card>
      <CardHeader title="Social" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {_socials.map((link) => (
          <Stack
            key={link.name}
            direction="row"
            sx={{ wordBreak: "break-all" }}
          >
            <Iconify
              icon={link.icon}
              sx={{
                mr: 2,
                flexShrink: 0,
                color: link.color,
              }}
            />
            <Link component="span" variant="body2" color="text.primary">
              {(link.value === "facebook" && facebookLink) ||
                (link.value === "instagram" && instagramLink) ||
                (link.value === "linkedin" && linkedinLink) ||
                twitterLink}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
