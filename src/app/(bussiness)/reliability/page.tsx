import Hero from "@/components/hero";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Reliability Page'
}
export default function Reliability() {
    return (
      <Hero imgUrl="/reliability.png" altTxt={"reliability"} content={"Welcome to Reliability"}/>
      );
}
