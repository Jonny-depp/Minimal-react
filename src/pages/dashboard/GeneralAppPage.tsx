import { useTheme } from "@mui/material/styles";
import { useAuthContext } from "../../auth/useAuthContext";
import { useSettingsContext } from "../../components/settings";
import { Button, Container, Grid, Stack } from "@mui/material";
import AppWelcome from "../../sections/dashboard/general/app/AppWelcome";
import { SeoIllustration } from "../../assets/illustrations";
import {
  _appAuthors,
  _appFeatured,
  _appInstalled,
  _appInvoices,
  _appRelated,
} from "../../_mock/arrays";
import AppFeatured from "../../sections/dashboard/general/app/AppFeatured";
import AppWidgetSummary from "../../sections/dashboard/general/app/AppWidgetSummary";
import AppCurrentDownload from "../../sections/dashboard/general/app/AppCurrentDownload";
import AppNewInvoice from "../../sections/dashboard/general/app/AppNewInvoice";
import AppAreaInstalled from "../../sections/dashboard/general/app/AppAreaInstalled";
import AppTopRelated from "../../sections/dashboard/general/app/AppTopRelated";
import AppTopInstalledCountries from "../../sections/dashboard/general/app/AppTopInstalledCountries";
import AppTopAuthors from "../../sections/dashboard/general/app/AppTopAuthors";
import AppWidget from "../../sections/dashboard/general/app/AppWidget";

const GeneralAppPage = () => {
  const user: any = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();
  return (
    <>
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Welcome ${user?.user.displayName}`}
              description="Enjoy the weekend"
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: "auto", md: "inherit" },
                  }}
                />
              }
              action={<Button variant="contained">GO NOW</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Users"
              percent={2.6}
              total={18765}
              chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Installed"
              percent={0.2}
              total={4876}
              chart={{
                colors: [theme.palette.info.main],
                series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Downloads"
              percent={-0.1}
              total={678}
              chart={{
                colors: [theme.palette.warning.main],
                series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload
              title="Current Download"
              chart={{
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                ],
                series: [
                  { label: "Mac", value: 12244 },
                  { label: "Window", value: 53345 },
                  { label: "iOS", value: 44313 },
                  { label: "Android", value: 78343 },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled
              title="Area Installed"
              subheader="(+43%) than last year"
              chart={{
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                ],
                series: [
                  {
                    year: "2019",
                    data: [
                      {
                        name: "Asia",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                      },
                      {
                        name: "America",
                        data: [10, 34, 13, 56, 77, 88, 99, 77, 45],
                      },
                    ],
                  },
                  {
                    year: "2020",
                    data: [
                      {
                        name: "Asia",
                        data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                      },
                      {
                        name: "America",
                        data: [45, 77, 99, 88, 77, 56, 13, 34, 10],
                      },
                    ],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice
              title="New Invoice"
              tableData={_appInvoices}
              tableLabels={[
                { id: "id", label: "Invoice ID" },
                { id: "category", label: "Category" },
                { id: "price", label: "Price" },
                { id: "status", label: "Status" },
                { id: "" },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated
              title="Top Related Applications"
              list={_appRelated}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries
              title="Top Installed Countries"
              list={_appInstalled}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Authors" list={_appAuthors} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget
                title="Conversion"
                total={38566}
                icon="eva:person-fill"
                chart={{
                  series: 48,
                }}
              />

              <AppWidget
                title="Applications"
                total={55566}
                icon="eva:email-fill"
                color="info"
                chart={{
                  series: 75,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default GeneralAppPage;
