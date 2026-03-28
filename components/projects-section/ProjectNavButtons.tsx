"use client";

import { useEffect, useState } from "react";

function ProjectNavButtons({
  label,
  goToHref,
}: {
  label: string;
  goToHref: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) return;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.open(goToHref, "_blank");
      }}
      className="text-muted-text hover:text-accent cursor-pointer font-mono text-xs transition-colors duration-200"
    >
      {label}
    </button>
  );
}

export default ProjectNavButtons;
