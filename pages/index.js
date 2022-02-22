import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { login } from "@inrupt/solid-client-authn-browser";

export default function Home() {
  const signInPOD = async (e) => {
    e.preventDefault();
    console.log("Button Clicked");

    await login({
      oidcIssuer: "https://inrupt.net",
      clientName: "POD NextJS Test",
    });

    console.log("Login complete");
  };

  return (
    <div>
      <button
        onClick={(e) => {
          signInPOD(e);
        }}
      >
        Sign In
      </button>
    </div>
  );
}
