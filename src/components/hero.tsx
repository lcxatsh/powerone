import React from "react";
import Image from "next/image";

interface Iprops{
    imgUrl:string;
    altTxt:string;
    content:string
}
export default function Hero(props:Iprops) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgUrl} alt={props.altTxt} fill style={{objectFit:'cover'}}></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
      </div>
      <div className="flex justify-center pt-40">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
