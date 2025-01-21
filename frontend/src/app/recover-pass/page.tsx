"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MailOpen } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const RecoverPass = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(30);
  const [otpValue, setOtpValue] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        "http://localhost:8000/users/forgetpassword",
        {
          email,
        }
      );
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {}
  };
  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      try {
        const res = await axios.post("http://localhost:8000/users/verifyotp", {
          email,
          otpValue,
        });
        if (res.status === 200) {
          setStep(step + 1);
        }
      } catch (error) {}
    }
  };
  const handleResendOtp = () => {
    setCountdown(30);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  useEffect(() => {
    if (countdown > 0) {
      const countdown = setInterval(() => {
        setCountdown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countdown]);

  return (
    <div className="">
      {step === 1 && (
        <div className="flex flex-col my-96 gap-5 items-center">
          <h1 className="text-center text-[24px]">
            <strong>Нууц үг сэргээх</strong>
          </h1>
          <Input
            type="text"
            className="input  border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={handleEmail}
          />
          <Button
            className="btn w-[348px] h-[40px]  border-2 bg-blue-700 rounded-2xl text-white"
            onClick={handleSendOtp}
          >
            Илгээх
          </Button>
        </div>
      )}
      {step === 2 && (
        <div>
          {loading ? (
            <ClipLoader
              color={"#00000"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <div className="flex flex-col items-center gap-5 my-96">
              <MailOpen />
              <h1 className="text-[24px]">
                <strong>Баталгаажуулах</strong>{" "}
              </h1>
              <p>
                {" "}
                <strong>{email}</strong> хаягт илгээсэн баталгаажуулах кодыг
                оруулна уу
              </p>
              <div className="text-center">
                <InputOTP
                  maxLength={4}
                  value={otpValue}
                  onChange={handleConfirmOtp}
                >
                  <InputOTPGroup className="w-[221px] h-[56px] border-2 border-slate-50 rounded-md">
                    <InputOTPSlot className="w-[56px] h-[56px] " index={0} />
                    <InputOTPSlot className="w-[56px] h-[56px] " index={1} />
                    <InputOTPSlot className="w-[56px] h-[56px] " index={2} />
                    <InputOTPSlot className="w-[56px] h-[56px] " index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Button
                  className="text-[14px] text-slate-300 "
                  onClick={handleResendOtp}
                  variant="link"
                >
                  Дахин илгээх ({countdown})
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecoverPass;
