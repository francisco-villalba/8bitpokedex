import Base from "./Base";
import { NotFoundText, FlexWrapper } from "./Screen.styles";

const NotFoundScreen = () => {
  return (
    <Base>
      <FlexWrapper>
        <NotFoundText>NOT FOUND</NotFoundText>
      </FlexWrapper>
    </Base>
  );
};

export default NotFoundScreen;
