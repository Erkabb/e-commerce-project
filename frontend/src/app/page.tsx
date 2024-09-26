"use client";

import Login from "./(auth)/login/page";
import RecoverPass from "./components/recover.pass";

export default function Home() {
  return (
    <main className=" flex justify-center items-center">
      <RecoverPass />
    </main>
  );
}
