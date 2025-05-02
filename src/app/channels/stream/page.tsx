"use client";

import channelsData from "../channels.json";

interface Channel {
  cha_Name: string;
  cha_URL: string;
}
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const channel_fond = channelsData.channels.find((c: Channel) => c.cha_Name === decodeUrl);
function StreamContent() {
  const searchParams  = useSearchParams();
  const url = searchParams.get('url'); // Extract 'url' query parameter
  const decodeUrl = url ? decodeURIComponent(url) : url;
  const channel_fond = channelsData.channels.find((c: Channel) => c.cha_Name === decodeUrl);
  const channel_url = channel_fond?.cha_URL;

  if (!url || !channel_url) {
    return <p>No Ptream to be Provided Right Now Sorry</p>; // Handle case where URL is not valid
  }
  return (
    
    <>
      <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'none'; style-src 'self'; img-src 'self'; connect-src 'none'; form-action 'none'; frame-ancestors 'none';"/>
      </head>
      <body>
        <div className="container">
          <Link href="/channels">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image src="/slogan.png" alt="Centered Image" width={500} height={300} />
            </div>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh"}}>
          <iframe
            src={channel_url}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            allow="encrypted-media"
          />
        </div>
      </body>
    </>
  );
}

export default function Stream(){
 return (
  <Suspense fallback={<div>Loading...</div>}>
    <StreamContent />
  </Suspense>
 );
}
