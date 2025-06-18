// components/AOSWrapper.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 300, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return null; // this component just triggers AOS init
}
