import { Divider, IconButton, Stack } from "@mui/material";
import { useAuthContext } from "../../auth/useAuthContext";
import Iconify from "../../components/iconify";

export default function AuthWithSocial(): JSX.Element {
  const { loginWithGoogle, loginWithGithub, loginWithTwitter } =
    useAuthContext() as {
      loginWithGoogle?: () => Promise<void>;
      loginWithGithub?: () => Promise<void>;
      loginWithTwitter?: () => Promise<void>;
    };

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      if (loginWithGoogle) {
        await loginWithGoogle();
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async (): Promise<void> => {
    try {
      if (loginWithGithub) {
        await loginWithGithub();
      }
      console.log("GITHUB LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterLogin = async (): Promise<void> => {
    try {
      if (loginWithTwitter) {
        await loginWithTwitter();
      }
      console.log("TWITTER LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton onClick={handleGoogleLogin}>
          <Iconify icon="eva:google-fill" color="#DF3E30" />
        </IconButton>

        <IconButton color="inherit" onClick={handleGithubLogin}>
          <Iconify icon="eva:github-fill" />
        </IconButton>

        <IconButton onClick={handleTwitterLogin}>
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
}
