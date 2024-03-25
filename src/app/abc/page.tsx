import {Metadata} from "next";
import Link from "next/link";
import {useState} from "react";
import {Button} from "./button";
import {data} from "@/constants";

export const metadata: Metadata = {
  title: "title",
  description: "fugafuga",
};

export default function Name() {
  // const [t, setT] = useState("");
  // const test = async () => {
  //   "use server";
  //   console.log("test");
  //   setT("test");
  // };
  // test();
  return (
    <div className="text-red-200">
      {/* {data.map((d, i) => (
        <p key={i}>{d.name}</p>
      ))} */}
      <div className="border rounded p-3 mt-5 w-16">
        <Link href="/">link</Link>
      </div>
    </div>
  );
}
