import { styled } from "@mui/system";
import { useSelector } from "src/store";
import SliderBanner from "src/bachhoaxanh/components/slider-banner";
import Card from "@mui/material/Card";

const StyledSlider = styled(Card)(() => ({
  height: '200px',
  borderRadius: 0
}));

export default function HomeSlider(){

  const banners = useSelector(state => state.home.banners);

  return <StyledSlider
    className="slider-container"
  >
    <SliderBanner banners={ banners } />
  </StyledSlider>

}