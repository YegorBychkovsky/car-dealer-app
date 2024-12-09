"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const ClientButton = ({ makeSelectId, yearSelectId }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [makeValue, setMakeValue] = useState(null);
  const [yearValue, setYearValue] = useState(null);
  const [vehiclesLink, setVehiclesLink] = useState("");

  const checkSelectValues = useCallback(() => {
    const make = document.getElementById(makeSelectId).value;
    const year = document.getElementById(yearSelectId).value;

    setMakeValue(make);
    setYearValue(year);

    if (make && year) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [makeSelectId, yearSelectId]);

  useEffect(() => {
    setVehiclesLink(`/result/${makeValue}/${yearValue}`);
  }, [makeValue, yearValue]);

  useEffect(() => {
    checkSelectValues();

    const makeSelect = document.getElementById(makeSelectId);
    const yearSelect = document.getElementById(yearSelectId);

    makeSelect.addEventListener("change", checkSelectValues);
    yearSelect.addEventListener("change", checkSelectValues);

    return () => {
      makeSelect.removeEventListener("change", checkSelectValues);
      yearSelect.removeEventListener("change", checkSelectValues);
    };
  }, [makeSelectId, yearSelectId, checkSelectValues]);

  return (
    <button
      type="button"
      className={`px-4 py-2 rounded text-white ${
        isButtonDisabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-700"
      }`}
      disabled={isButtonDisabled}
    >
      <Link
        className={isButtonDisabled ? "pointer-events-none" : ""}
        href={vehiclesLink}
      >
        Next{" "}
      </Link>
    </button>
  );
};

export default ClientButton;
