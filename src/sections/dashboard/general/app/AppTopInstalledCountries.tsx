import { styled } from "@mui/material/styles";
import { Card, CardHeader, Typography, Stack } from "@mui/material";
import { fShortenNumber } from "../../../../utils/formatNumber";
import Image from "../../../../components/image";
import Iconify from "../../../../components/iconify";
import Scrollbar from "../../../../components/scrollbar";

const StyledBlock = styled((props?: any) => (
  <Stack direction="row" alignItems="center" {...props} />
))({
  minWidth: 72,
  flex: "1 1",
});

const StyledItemIcon = styled(Iconify)(({ theme }) => ({
  width: 16,
  height: 16,
  marginRight: theme.spacing(0.5),
  color: theme.palette.text.disabled,
}));

interface AppTopInstalledCountriesProps {
  list: Array<any>;
  title: string;
  subheader?: string;
}

export default function AppTopInstalledCountries({
  title,
  subheader,
  list,
  ...other
}: AppTopInstalledCountriesProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          {list.map((country) => (
            <CountryItem key={country.id} country={country} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

function CountryItem({ country }: any) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <StyledBlock sx={{ minWidth: 120 }}>
        <Image
          disabledEffect
          alt={country.name}
          src={country.flag}
          sx={{ width: 28, mr: 1 }}
        />
        <Typography variant="subtitle2">{country.name}</Typography>
      </StyledBlock>

      <StyledBlock>
        <StyledItemIcon icon="ant-design:android-filled" />
        <Typography variant="body2">
          {fShortenNumber(country.android)}
        </Typography>
      </StyledBlock>

      <StyledBlock>
        <StyledItemIcon icon="ant-design:windows-filled" />
        <Typography variant="body2">
          {fShortenNumber(country.windows)}
        </Typography>
      </StyledBlock>

      <StyledBlock sx={{ minWidth: 88 }}>
        <StyledItemIcon icon="ant-design:apple-filled" />
        <Typography variant="body2">
          {fShortenNumber(country.windows)}
        </Typography>
      </StyledBlock>
    </Stack>
  );
}
