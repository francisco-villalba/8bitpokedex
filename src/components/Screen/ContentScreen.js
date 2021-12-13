import { useContext } from "react";
import { AppContext } from "../../context";
import {
  ContentWrapper,
  Stat,
  Stats,
  Title,
  Image,
  Static,
} from "./Screen.styles";
import Base from "./Base";

const ContentScreen = () => {
  const { data } = useContext(AppContext);

  return (
    <Base>
      <ContentWrapper>
        <Image src={data.imgUrl} />
        <Title>{data.name.toUpperCase()}</Title>
        <Stats>
          <Stat>{`Type: ${data.type}`.toUpperCase()}</Stat>
          <Stat>{`Attack: ${data.attack}`.toUpperCase()}</Stat>
          <Stat>{`Defense: ${data.defense}`.toUpperCase()}</Stat>
          <Stat>{`Health: ${data.hp}`.toUpperCase()}</Stat>
        </Stats>
      </ContentWrapper>
    </Base>
  );
};

export default ContentScreen;
