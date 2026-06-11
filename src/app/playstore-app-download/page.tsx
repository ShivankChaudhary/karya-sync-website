"use client";

import { useEffect, useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.KaryaSync.app";

const APP_STORE_URL = "https://apps.apple.com/in/app/karya-sync/id6762136586";

export default function PlayStoreRedirect() {
  const [showManualOptions, setShowManualOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowManualOptions(true);
    }, 5000);

    const ua = navigator.userAgent;

    const isAndroid = /android/i.test(ua);

    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isAndroid) {
      window.location.replace(PLAY_STORE_URL);
    } else if (isIOS) {
      window.location.replace(APP_STORE_URL);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {!showManualOptions ? (
        <>
          <h1>Redirecting...</h1>
          <p>Please wait while we open the app store.</p>
        </>
      ) : (
        <>
          <h2>
            Automatic redirection didn't work. Please choose your platform:
          </h2>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => (window.location.href = PLAY_STORE_URL)}
              style={{
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              Open Google Play
            </button>

            <button
              onClick={() => (window.location.href = APP_STORE_URL)}
              style={{
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              Open App Store
            </button>
          </div>
        </>
      )}
    </div>
  );
}
