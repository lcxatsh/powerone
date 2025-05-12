import React from "react";
import Hero from "@/components/hero";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Home Page'
}
export default function Home() {
  return (
  <Hero imgUrl="/home.png" altTxt={"Home"} content={"Welcome to our website"}/>
  );
}
