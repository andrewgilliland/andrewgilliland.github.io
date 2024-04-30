"use client";
import BlackMage from "@/components/svg/pixel-art/BlackMage";
import RedMage from "@/components/svg/pixel-art/RedMage";
import Fighter from "@/components/svg/pixel-art/Fighter";
import WhiteMage from "@/components/svg/pixel-art/WhiteMage";
import Thief from "@/components/svg/pixel-art/Thief";
import Monk from "@/components/svg/pixel-art/Monk";
import Garland from "@/components/svg/pixel-art/Garland";
import { useState } from "react";

export type BattleState =
  | "ready"
  | "attack"
  | "cast"
  | "defend"
  | "hurt"
  | "dead";

const Battle = () => {
  const [blackMage, setBlackMage] = useState<BattleState>("ready");

  const cast = () => {
    console.log("Casting spell");
    setBlackMage("cast");
    setTimeout(() => {
      setBlackMage("ready");
    }, 2000);
  };

  return (
    <div className="mt-8">
      <h3 className="font-semibold text-2xl">Final Fantasy</h3>
      <div className="flex justify-between gap-4 mt-4">
        <div className="flex flex-col justify-between border-4 border-white rounded p-1 w-full">
          <Garland />
          <div className="flex gap-1">
            <div className="flex flex-col justify-between border-4 border-white rounded p-2 w-full">
              <div>Garland</div>
            </div>
            <div className="border-4 border-white rounded">
              <button
                onClick={() => {
                  // !Todo: Implement attack function
                  console.log("Attacking");
                }}
                className="bg-black text-white px-4 py-1"
              >
                Attack
              </button>
              <button onClick={cast} className="bg-black text-white px-4 py-1">
                Cast
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-white rounded py-4 pl-24 pr-4">
          <Fighter />
          <BlackMage state={blackMage} />
          <WhiteMage />
          <Thief />
          <RedMage />
          <Monk />
        </div>
      </div>
    </div>
  );
};

export default Battle;
