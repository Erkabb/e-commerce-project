"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(5);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <main>
      <div>
        <Button onClick={minus}>-</Button>
        <Label className="text-4xl mx-5">{count}</Label>
        <Button onClick={add}>+</Button>
      </div>
    </main>
  );
}
