import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  login,
  handleIncomingRedirect,
  fetch,
  getDefaultSession,
  onLogin,
} from "@inrupt/solid-client-authn-browser";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const signInPOD = async (e) => {
    e.preventDefault();
    console.log("Button Clicked");

    await login({
      redirectUrl: "http://localhost:3000/dashboard",
      oidcIssuer: "https://inrupt.net",
      clientName: "POD NextJS Test",
    });

    console.log("Login complete");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={(e) => {
          // signInPOD(e);
          router.push("/dashboard");
        }}
      >
        Sign In
      </button>
    </div>
  );
}
