"use client";

import channelsData from "./channels.json";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Import useRouter hook

export default function Channels() {
  // State to track the filter word
  const [filter, setFilter] = useState("");
  const router = useRouter();

  const filteredChannels = filter
    ? channelsData.channels.filter((channel) =>
        channel.cha_Name.toLowerCase().includes((filter.toLowerCase()).replace(/\s/g, ""))
      )
    : channelsData.channels;

  // Handle the click event for a channel
  const handleChannelClick = (url: string) => {
    router.push(`/channels/stream?url=${encodeURIComponent(url)}`);
  };

  return (
    <>
      <div>
        <div className="center-container">
          <Link href="/">
            <Image
              src="/slogan.png"
              alt="Centered Image"
              width={500}
              height={300}
            />
          </Link>
        </div>

        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter channels..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)} // Update filter state
          style={{ color: "black" }}
        />

        {/* Displaying channels */}
        <div className="channels-container">
          {filteredChannels.length > 0 ? (
            filteredChannels.map((channel, index) => (
              <div
                key={index}
                className="channel-box"
                onClick={() => handleChannelClick(channel.cha_Name)}
              >
                <h3 className="channel-name">{channel.cha_Name}</h3>
              </div>
            ))
          ) : (
            <p>No channels match your filter.</p>
          )}
        </div>
        <footer>
          <p>
            casadelpovo.uk does not host any of the live stream videos playing on this site.
            Please contact the video hosting provider or media poster for takedown or any other complaints.
          </p>
        </footer>
      </div>
    </>
  );
}
