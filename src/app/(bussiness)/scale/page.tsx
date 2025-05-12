import Hero from "@/components/hero";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Scale Page'
}
export default function Scale() {
     return (
        <Hero imgUrl="/scale.png" altTxt={"scale"} content={"Welcome to Scale"}/>
        );
}
