import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { auth, provider, app } from "../firebase";
import { useRouter } from "next/router";
import {
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign In with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const HeadImage = tw.img`
object-contain  w-full h-auto

`;

const Title = tw.div`
text-5xl pt-2 text-gray-500
`;

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;

const SignInButton = tw.button` 
bg-black text-white py-3 mt-3 text-center px-8 rounded-sm w-full self-center 

`;

const Wrapper = tw.div`
flex flex-col h-screen bg-gray w-screen p-4

`;
