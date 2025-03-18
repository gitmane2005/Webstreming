import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="wrapper">
    <div className="container">
      <Image
        src="/slogan.png"
        alt="Centered Image"
        width={500}
        height={100}
      />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="/channels/page.tsx">
        <Image
          src="/channels.png"
          alt="Centered Channels"
          style={{ cursor: "pointer" }}
          width={200}
          height={30}
          />
        </Link>
   </div>
    <style>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          display: flex;
          justify-content: center; /* Horizontally center */
          align-items: center; /* Vertically center */
          min-height: 75vh; /* Make container full height to center vertically */
        }
      `}</style>
    <footer>
      <p>
        casadelpovo.uk is only availeble on useres loging from Portugal. If go abroad use a VPN.
      </p>
      <p>
        casadelpovo.uk does not host any of the live stream videos playing on this site. please contact video hosting provider or media poster for takedown or any other complaints
      </p>
    </footer>
  </div>
  );
}
