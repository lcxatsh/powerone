import Hero from "@/components/hero";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Performance Page'
}
export default function Performance() {
  return (
    <Hero imgUrl="/performance.png" altTxt={"performance"} content={"Welcome to Performance"}/>
    );
}
