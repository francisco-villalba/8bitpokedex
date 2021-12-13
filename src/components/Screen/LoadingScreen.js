import Base from "./Base";
import {  LoadingWrapper, LoadingImage } from "./Screen.styles";

const LoadingScreen = () => {
  return (
    <Base>
      <LoadingWrapper>
        <LoadingImage src="https://art.ngfiles.com/thumbnails/386000/386577_full.png" />
      </LoadingWrapper>
    </Base>
  );
};

export default LoadingScreen;
