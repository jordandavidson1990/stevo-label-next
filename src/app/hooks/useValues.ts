"use client";

import { useEffect, useState } from "react";

type Value = {
  name: string;
  link: string;
  date: string;
  venue: string;
  image: string;
};

export const useValues = () => {
  const sessionValues =
    typeof window !== "undefined"
      ? window.sessionStorage.getItem("values") || []
      : [];
  const [values, setValues] = useState<Array<Value>>(
    typeof sessionValues === "string"
      ? (JSON.parse(sessionValues) as Value[])
      : []
  );
  const API_KEY = "AIzaSyAINVjXGMxuNLu2HOSlwFm3e6jhFDvzeZg"; // Replace with your Google API Key
  const SPREADSHEET_ID = "12OPPWlg6WWARFn5nyxfK_T5X9Ifpd6u0-H2fDkJL-T4";
  const RANGE = "Sheet1!A2:D50"; // Adjust based on your sheet

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
    RANGE
  )}?key=${API_KEY}`;

  useEffect(() => {
    if (!sessionValues.length) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const values = data.values;
          const mappedValues = values.map((row: string[]) => ({
            name: row[0],
            link: row[1],
            date: row[2],
            venue: row[3],
            image: row[4],
          }));
          console.log("mappedValues: ", mappedValues);
          setValues(mappedValues);
          window.sessionStorage.setItem("values", JSON.stringify(mappedValues));
        })
        .catch((err) => console.error(err));
    }
  }, [sessionValues.length, url]);

  return { values };
};
