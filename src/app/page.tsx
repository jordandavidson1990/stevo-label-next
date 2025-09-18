import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="lofi-img-box">
        <Image
          src="/label.jpeg"
          alt="lofi archive diagram"
          className="lofi-img"
          width={500}
          height={500}
        />

        <div
          style={{ textAlign: "center", fontSize: "1.1em", margin: "0.6em 0" }}
        >
          <div className="main-menu">
            <a href="gigs">gigs</a>
            <a href="releases">releases (coming soon)</a>
            <a href="screenings">screenings (coming soon)</a>
            <a href="everything-else">everythin else (coming soon)</a>
          </div>
          <div style={{ textAlign: "center", margin: "1.2em 0 0 0" }}>
            <iframe
              width="100%"
              height="300"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91455336&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
        <div className="footer">
          &copy; 2025 Stevo site demo. All rights reserved.
        </div>
      </div>
    </>
  );
}
