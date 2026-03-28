import { NOISE_TEXTURE } from "../portfolio.constants";

export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-999 opacity-15 mix-blend-soft-light"
      style={{ backgroundImage: NOISE_TEXTURE }}
    />
  );
}
