import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

          <Profile>
            <Name>Ebenezer Abbey</Name>
            <UserImage src="data:image/jpeg;base64,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" />
          </Profile>
        </Header>

        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`

flex flex-col bg-white-100 h-screen



`;

const ActionItems = tw.div`

bg-white-500 flex-1 p-3

`;
const Header = tw.div`
flex justify-between
`;
const UberLogo = tw.img`
h-28
`;
const Profile = tw.div`

flex items-center
`;

const Name = tw.div`
text-sm mr-4 w-20 font-medium


`;
const UserImage = tw.img`
h-12 w-12 rounded-full p-px border border-gray-300

`;

const ActionButtons = tw.div`
flex

`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 rounded-lg items-center justify-center font-medium transform hover:scale-105 transition text-lg
`;

const ActionButtonImage = tw.img`
h-3/5
`;
