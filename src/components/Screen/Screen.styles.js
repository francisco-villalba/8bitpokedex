import styled from "styled-components";

export const Ground = styled.div`
  width: 31rem;
  height: 31rem;
  box-shadow: 0px 0px 1rem black;
  background-color: black;
  border-radius: 0.5rem;
  position: relative;
`;

export const Static = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: .1;
  filter: brightness(15);
`
// Content Screen
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 2rem;
  display: grid;
  grid-template-rows: 50% repeat(2, max-content);
  align-items: center;
  justify-items: center;
  font-family: "8bit";
  opacity: 0;
  animation: fadeIn 0.7s forwards steps(2);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
`;

export const Stats = styled.div``;
export const Stat = styled.p`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  padding: 0.3rem;
`;
export const Image = styled.img``;

// Not found screen
export const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  font-family: "8bit";
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.7s forwards steps(2);
`;

export const NotFoundText = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

// Loading Screen
export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingImage = styled.img`
  width: 10rem;
  animation: blink 0.7s infinite steps(2);
`;
