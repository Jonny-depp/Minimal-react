import { RadioGroup } from "@mui/material";
import { MaskControl, StyledCard, StyledWrap } from "../Styles";
import SvgColor from "../../svg-color";
import { useSettingsContext } from "../SettingsContext";

const OPTIONS = ["ltr", "rtl"];

const DirectionOptions = () => {
  const { themeDirection, onChangeDirection } = useSettingsContext();
  return (
    <>
      <RadioGroup
        name="themeDirection"
        value={themeDirection}
        onChange={onChangeDirection}
      >
        <StyledWrap>
          {OPTIONS.map((direction) => (
            <StyledCard key={direction} selected={themeDirection === direction}>
              <SvgColor
                src={`/assets/icons/setting/${
                  direction === "rtl" ? "ic_align_right" : "ic_align_left"
                }.svg`}
              />

              <MaskControl value={direction} />
            </StyledCard>
          ))}
        </StyledWrap>
      </RadioGroup>
    </>
  );
};
export default DirectionOptions;
