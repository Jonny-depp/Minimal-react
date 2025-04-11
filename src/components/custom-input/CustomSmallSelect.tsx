import { TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const CustomSmallSelect = styled((props: any) => (
  <TextField select SelectProps={{ native: true }} {...props} />
))(({ theme }: any) => ({
  "& fieldset": {
    display: "none",
  },
  "& select": {
    ...theme.typography.subtitle2,
    padding: theme.spacing(0.5, 0, 0.5, 1),
    paddingRight: "28px !important",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
    backgroundColor: alpha(theme.palette.grey[500], 0.08),
  },
}));
export default CustomSmallSelect;
