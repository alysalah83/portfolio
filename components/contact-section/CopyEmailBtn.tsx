"use client";

import { useEffect, useState } from "react";
import { IoCheckmarkSharp, IoCopyOutline } from "react-icons/io5";

function CopyEmailBtn() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const id = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [isCopied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("alysalah83@gmail.com");
    setIsCopied(true);
  };

  return (
    <div className="text-text border-border bg-bg flex items-center gap-6 rounded-lg border px-4 py-2">
      <span className="font-mono text-sm">alysalah.work@gmail.com</span>

      <button
        onClick={handleCopy}
        aria-label="Copy email"
        className="bg-950 relative flex size-9 cursor-pointer items-center justify-center rounded-lg transition hover:scale-105 active:scale-95"
      >
        <IoCopyOutline
          className={`text-text absolute size-5 transition-all duration-300 ${
            isCopied ? "scale-10 opacity-0" : "scale-100 opacity-100"
          }`}
        />

        <IoCheckmarkSharp
          className={`absolute size-5 text-green-400 transition-all duration-300 ${
            isCopied ? "scale-100 opacity-100" : "scale-10 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}

export default CopyEmailBtn;
