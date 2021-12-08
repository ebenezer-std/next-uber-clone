import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./components/Map";
import Link from "next/link";
import Search from "./search";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photo: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photo} onClick={() => signOut(auth)} />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton
          placeholder="Where to?"
          onClick={() => {
            router.push("/search");
          }}
        />
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
text-base mr-3 w-23 font-semibold


`;
const UserImage = tw.img`
h-12 w-12 rounded-full p-px border border-gray-300 cursor-pointer

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

const InputButton = tw.input`
h-20 bg-gray-200 mt-8 flex items-center p-5 text-2xl font-normal rounded-sm w-full
`;
