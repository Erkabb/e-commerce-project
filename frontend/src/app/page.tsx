"use client";

import Login from "./(auth)/login/page";
import RecoverPass from "./recover.pass/page";

export default function Home() {
  return (
    <main className=" flex justify-center items-center">
      <RecoverPass />
    </main>
  );
}
