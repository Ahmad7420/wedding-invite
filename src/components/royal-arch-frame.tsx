type RoyalArchFrameProps = {
  isOpening: boolean;
};

export function RoyalArchFrame({ isOpening }: RoyalArchFrameProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 840"
      preserveAspectRatio="none"
      className={`royal-arch-frame h-full w-full ${isOpening ? "is-opening" : ""}`}
      fill="none"
    >
      <defs>
        <linearGradient id="royalArchGold" x1="44" y1="60" x2="396" y2="790">
          <stop offset="0" stopColor="#F3DDA7" />
          <stop offset="0.48" stopColor="#C3A05A" />
          <stop offset="1" stopColor="#8E682C" />
        </linearGradient>
      </defs>

      <path
        d="M28 812V292C28 164 104 76 220 20C336 76 412 164 412 292V812"
        stroke="url(#royalArchGold)"
        strokeWidth="2.4"
      />
      <path
        d="M48 812V302C48 184 116 102 220 47C324 102 392 184 392 302V812"
        stroke="#DEC58A"
        strokeOpacity="0.52"
        strokeWidth="1"
      />
      <path d="M18 812H422" stroke="#C3A05A" strokeOpacity="0.66" strokeWidth="1.5" />
      <path d="M62 786H378" stroke="#DEC58A" strokeOpacity="0.34" />

      <path d="M206 34L220 7L234 34L220 49Z" fill="#C3A05A" fillOpacity="0.86" />
      <circle cx="220" cy="57" r="4" fill="#F3DDA7" fillOpacity="0.86" />

      <g stroke="#C3A05A" strokeOpacity="0.52">
        <path d="M28 724H62M45 707V741" />
        <path d="M378 724H412M395 707V741" />
        <path d="M28 752L53 777M412 752L387 777" />
      </g>
    </svg>
  );
}
