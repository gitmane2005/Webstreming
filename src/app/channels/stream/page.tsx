"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function StreamContent() {
  const searchParams  = useSearchParams();
  const url = searchParams.get('url'); // Extract 'url' query parameter

  if (!url) {
    return <p>No stream selected {url}</p>; // Handle case where URL is not valid
  }
  return (
    <>
      <div className="container">
        <Link href="/channels">
          <Image src="/slogan.png" alt="Centered Image" width={500} height={300} />
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <iframe
          src={decodeURIComponent(url)}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
          allow="encrypted-media"
        />
      </div>
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25vh;
        }
      `}</style>
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
