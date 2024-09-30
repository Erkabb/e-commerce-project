import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
const NewPassword = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();
  const handleNewPassword = () => {
    if (!(password === repassword)) {
      console.log("Clicked not match");
      toast({
        title: "Error",
        description: "Passwords must match each other",
      });
      return;
    }
    console.log("RT", params.get("resettoken"));
    console.log("EMAIL", params.get("email"));
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div className="flex flex-col my-96 gap-5">
      {loading ? (
        <ClipLoader
          color={"#00000"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <h1 className="text-center text-[24px]">
            <strong>Нууц үг сэргээх</strong>
          </h1>
          <Input
            type="text"
            className="input  border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Шинэ нууц үг"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            className="input  border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Шинэ нууц үг давтах"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <ul>
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <Button
            className="w-[348px] h-[40px] bg-blue-700 rounded-3xl text-white"
            onClick={handleNewPassword}
          >
            Үүсгэх
          </Button>
        </>
      )}
    </div>
  );
};

export default NewPassword;
