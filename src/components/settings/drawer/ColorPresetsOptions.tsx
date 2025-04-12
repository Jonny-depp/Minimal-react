import { alpha, RadioGroup } from "@mui/material";
import { useSettingsContext } from "../SettingsContext";
import {
  MaskControl,
  StyledCard,
  StyledCircleColor,
  StyledWrap,
} from "../Styles";

const ColorPresetsOptions = () => {
  const { themeColorPresets, onChangeColorPresets, presetsOption } =
    useSettingsContext();
  return (
    <>
      <RadioGroup
        name="themeColorPresets"
        value={themeColorPresets}
        onChange={onChangeColorPresets}
      >
        <StyledWrap sx={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {presetsOption.map((color) => {
            const { name, value } = color;

            const selected = themeColorPresets === name;

            return (
              <StyledCard
                key={name}
                selected={selected}
                sx={{
                  height: 48,
                  ...(selected && {
                    bgcolor: alpha(value, 0.08),
                    borderColor: alpha(value, 0.24),
                  }),
                }}
              >
                <StyledCircleColor selected={selected} color={value} />
                <MaskControl value={name} />
              </StyledCard>
            );
          })}
        </StyledWrap>
      </RadioGroup>
    </>
  );
};
export default ColorPresetsOptions;
