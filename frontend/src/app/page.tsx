"use client";

import Login from "./(auth)/login/page";
import RecoverPass from "./recover.pass/page.tsx";

export default function Home() {
  return (
    <main className=" flex justify-center items-center">
      <RecoverPass />
    </main>
  );
}
