import "./locales/i18n";
import "simplebar/src/simplebar.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { AuthProvider } from "./auth/JwtContext";
import { SettingsProvider, ThemeSettings } from "./components/settings";
import SnackbarProvider from "./components/snackbar";
import ThemeLocalization from "./locales";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import ThemeProvider from "./theme";
const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <SettingsProvider>
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <ThemeLocalization>
                    <SnackbarProvider>
                      <Router />
                    </SnackbarProvider>
                  </ThemeLocalization>
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </SettingsProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
