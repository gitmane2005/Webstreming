"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  <div className="wrapper">
    <div className="container" >
      <Image
        src="/slogan.png"
        alt="Centered Image"
        width={500}
        height={100}
      />
    </div>
    <div style={{marginBottom: '10%'}}>
      <Link href="/channels">
        <Image
          src="/channels.png"
          alt="Centered Channels"
          style={{ cursor: "pointer" }}
          width={200}
          height={30}
          />
        </Link>
    </div>
    <footer>
      <p>
        casadelpovo.uk is only available to users logging in from Portugal.<br></br>
        casadelpovo.uk does not host any of the live stream videos playing on this site. please contact video hosting provider or media poster for takedown or any other complaints
      </p>
    </footer>
  </div>
  );
}