"use client";

import Login from "./(auth)/login/page";
import MainContent from "./home/page";

export default function Home() {
  return (
    <main className=" flex justify-center items-center">
      <MainContent />
    </main>
  );
}
