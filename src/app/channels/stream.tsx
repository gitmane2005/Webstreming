"use client";

import React, { useState } from "react";


export default function stream(url) {
    return(
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
          scrolling="no" frameborder="0" allowfullscreen="yes" src="${props.url}">
      `;
    )
}
