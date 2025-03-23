"use client";

import { useRouter } from "next/router";

export default function Stream() {
  const router = useRouter();
  const { url } = router.query; // Extract 'url' query parameter

  if (!url || Array.isArray(url)) {
    return <p>No stream selected</p>; // Handle case where URL is not valid
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "black" }}>
      <iframe
        src={decodeURIComponent(url)} // Use the decoded URL
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
        allow="encrypted-media"
      />
    </div>
  )z
}