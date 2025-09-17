"use client";

import Image from "next/image";
import { useValues } from "../hooks/useValues";

const GigsPage = () => {
  const { values } = useValues();

  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <h1>Gigs</h1>
      <p>Welcome to the gigs page. Browse and explore available gigs!</p>
      {values.length ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {values.map((value, index) => (
            <>
              <li key={`${index}-${value.name}`} style={{ margin: "1em 0" }}>
                {value.name}
              </li>
              <li key={`${index}-${value.link}`} style={{ margin: "1em 0" }}>
                <a
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Tickets
                </a>
              </li>
              <li key={`${index}-${value.date}`} style={{ margin: "1em 0" }}>
                {value.date}
              </li>
              <li key={`${index}-${value.venue}`} style={{ margin: "1em 0" }}>
                {value.venue}
              </li>
              <li key={`${index}-${value.image}`} style={{ margin: "1em 0" }}>
                <Image src={value.image} alt={value.name} />
              </li>
            </>
          ))}
        </ul>
      ) : (
        <p>Loading gigs...</p>
      )}
    </div>
  );
};

export default GigsPage;
