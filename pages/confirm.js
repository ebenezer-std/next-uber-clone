import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropOff } = router.query;
  const [pickCoordinates, setPickCoordinates] = useState([0, 0]);
  const [dropCoordinates, setDropCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYmVuYWJzdGVjdCIsImEiOiJja3dkdTVxcjExZzlwMnVxbDk2cW53MWZ2In0.DsvBFKDQsFkqmrMHa_M9pw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setPickCoordinates(data.features[0].center));
  };

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYmVuYWJzdGVjdCIsImEiOiJja3dkdTVxcjExZzlwMnVxbDk2cW53MWZ2In0.DsvBFKDQsFkqmrMHa_M9pw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setDropCoordinates(data.features[0].center));
  };
  console.log(pickCoordinates);
  console.log(dropCoordinates);

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickCoordinates}
        dropOffCoordinates={dropCoordinates}
      />

      <ConfirmContainer>
        <RideSelector
          pickupCoordinates={pickCoordinates}
          dropOffCoordinates={dropCoordinates}
        />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </ConfirmContainer>
    </Wrapper>
  );
};

export default Confirm;
const ButtonContainer = tw.div`
rounded-full cursor-pointer absolute top-4 left-4 z-10 bg-white shadow-md
`;
const BackBtn = tw.img`
h-full object-contain

`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
text-white bg-black my-4 mx-4 text-center py-4 rounded text-xl

`;

const Wrapper = tw.div`
flex h-screen flex-col

`;
const ConfirmContainer = tw.div`
flex-1 flex flex-col h-12
`;
