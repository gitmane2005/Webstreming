"use client";

import channelsData from "../channels.json";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function StreamContent() {
  const searchParams  = useSearchParams();
  const url = searchParams.get('url'); // Extract 'url' query parameter
  const decodeUrl = url ? decodeURIComponent(url) : url;
  const channel_fond = channelsData.channels.find(c => c.cha_Name === decodeUrl);
  const channel_url = channel_fond?.cha_URL;

  if (!url || !channel_url) {
    return <p>No Ptream to be Provided Right Now Sorry</p>; // Handle case where URL is not valid
  }
  return (
    <div className="wrapper">
      <div className="center-container">
        <Link href="/channels">
          <Image src="/slogan.png" alt="Centered Image" width={500} height={300} />
        </Link>
      </div>
      <p className="stream-name">{decodeUrl?.substring(0, (decodeUrl?.indexOf("[")))}   {decodeUrl?.substring(decodeUrl?.indexOf("[")+1, decodeUrl.length-1)}</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <iframe
          src={channel_url}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
          allow="encrypted-media"
        />
      </div>
      <footer>
        <p>
          casadelpovo.uk is only available to users logging in from Portugal.<br />
          casadelpovo.uk does not host any of the live stream videos playing on this site. Please contact the video hosting provider or media poster for takedown or any other complaints.<br />
          Some browswers such as Safari may may block the stream. Disable the Content Blockers to use this site.
        </p>
      </footer>
    </div>
  );
}

export default function Stream(){
 return (
  <Suspense fallback={<div>Loading...</div>}>
    <StreamContent />
  </Suspense>
 );
}
