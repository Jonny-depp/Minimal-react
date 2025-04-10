import { RadioGroup } from "@mui/material";
import { useSettingsContext } from "../SettingsContext";
import { LayoutIcon, MaskControl, StyledCard, StyledWrap } from "../Styles";

const OPTIONS = ["vertical", "horizontal", "mini"];

const LayoutOptions = () => {
  const { themeLayout, onChangeLayout } = useSettingsContext();
  return (
    <>
      <RadioGroup
        name="themeLayout"
        value={themeLayout}
        onChange={onChangeLayout}
      >
        <StyledWrap sx={{ gridTempleteColumns: "repeat(3,1fr)" }}>
          {OPTIONS.map((layout) => (
            <StyledCard
              key={layout}
              selected={themeLayout === layout}
              sx={{ p: 0.75, height: 56 }}
            >
              <LayoutIcon layout={layout} />
              <MaskControl value={layout} />
            </StyledCard>
          ))}
        </StyledWrap>
      </RadioGroup>
    </>
  );
};
export default LayoutOptions;
