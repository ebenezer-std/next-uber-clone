import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/CarList";

const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYmVuYWJzdGVjdCIsImEiOiJja3dkdTVxcjExZzlwMnVxbDk2cW53MWZ2In0.DsvBFKDQsFkqmrMHa_M9pw",
        })
    )
      .then((res) => res.json())
      .then((data) => setRideDuration(data.routes[0].duration / 100));
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((data, index) => {
          return (
            <Car key={index}>
              <CarImage src={data.imgUrl} />
              <CarDetails>
                <Service>{data.service}</Service>
                <Time>{`${data.min} mins away`}</Time>
              </CarDetails>
              <Price>
                {`GHS ` + (rideDuration * data.multiplier).toFixed(2)}
              </Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Service = tw.div`
font-medium
`;
const Time = tw.div`
text-xs text-blue-500
`;

const Car = tw.div`
flex m-2 items-centerf
`;
const CarImage = tw.img`
h-14 mr-2
`;
const CarDetails = tw.div`
flex-1 ml-2
`;
const Price = tw.div`
text-sm
`;

const CarList = tw.div`
overflow-y-scroll

`;

const Title = tw.div`
text-gray-500 text-sm text-center py-2 border-b
`;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
