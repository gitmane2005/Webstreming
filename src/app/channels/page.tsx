"use client";

import channelsData from "./channels.json"
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Channels() {
  // State to track the filter word
  const [filter, setFilter] = useState("");
    const filteredChannels = filter
    ? channelsData.channels.filter(channel =>
        channel.cha_Name.toLowerCase().includes(filter.toLowerCase())
      )
    : channelsData.channels;
	

  const handleChannelClick = (channelUrl: string) => {
    // Open a new ta
    document.body.innerHTML = 
      `<style>
      body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Full height */
          margin: 0;
          background-color: black; /* Optional */
      }
      iframe {
          width: 640px;
          height: 360px;
          border: none;
      }
    </style>

    <iframe 
        allow="encrypted-media" width="640" height="360" marginwidth="0" marginheight="0" 
        scrolling="no" frameborder="0" allowfullscreen="yes" src="${channelUrl}">
    `;
  };
  return (
    <>  
      <Head>
        <title> the best channels</title>
      </Head>
      <div>
        <div className="container">
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
          style={{ color: 'black' }}
        />

        {/* Displaying channels */}
        <div className="channels-container">
          {filteredChannels.length > 0 ? (
            filteredChannels.map((channel, index) => (
              <div key={index}
      className="channel-box"
      onClick={() => handleChannelClick(channel.cha_URL)}>
                <h3 className="channel-name">{channel.cha_Name}</h3>
              </div>
            ))
          ) : (
            <p>No channels match your filter.</p> // If no channels match the filter
          )}
        </div>

        <style>{`
          .container {
            display: flex;
            justify-content: center; /* Horizontally center */
            align-items: center; /* Vertically center */
            height: 25vh; /* Make container full height to center vertically */
          }
          /* Basic layout */
          .channels-container {
            display: flex;
            flex-wrap: wrap;
            gap: 16px; /* Gap between boxes */
            margin-top: 20px;
          }

          /* Style for each channel box */
          .channel-box {
            background-color: #f0f0f0;
            padding: 20px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          
          .channel-name {
            color: black;        /* Makes text black */
            justify-content: center;  /* Centers text horizontally */
            align-items: center; /* Centers text vertically */
            height: 100%;        /* Ensures full height of parent */
            text-align: center;  /* Centers text within the element */
        
          }

          /* Input styles */
          .input {
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
            width: 100%;
            max-width: 400px;
            border-radius: 8px;
            border: 1px solid #ccc;
          }
        `}</style>
        <footer>
          <p>casadelpovo.uk does not host any of the live stream videos playing on this site. please contact video hosting provider or media poster for takedown or any other complaints<br>
          <a href="mailto:hege@example.com"></a></p>
        </footer>
      </div>
    </>
  );
}
