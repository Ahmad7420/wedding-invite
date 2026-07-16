type ASMonogramSealProps = {
  className?: string;
};

export function ASMonogramSeal({ className }: ASMonogramSealProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sealCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90 72) rotate(55) scale(150)">
          <stop offset="0" stopColor="#FFFAF1" />
          <stop offset="0.38" stopColor="#F2E7D3" />
          <stop offset="0.72" stopColor="#DEC58A" />
          <stop offset="1" stopColor="#A97F35" />
        </radialGradient>
        <linearGradient id="sealEdge" x1="36" y1="28" x2="184" y2="192" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F8EBCF" />
          <stop offset="0.32" stopColor="#DEC58A" />
          <stop offset="0.7" stopColor="#A97F35" />
          <stop offset="1" stopColor="#6F4E20" />
        </linearGradient>
      </defs>

      <circle cx="110" cy="110" r="98" fill="url(#sealCore)" />
      <circle cx="110" cy="110" r="98" stroke="url(#sealEdge)" strokeWidth="8" />
      <circle cx="110" cy="110" r="84" stroke="#FFFAF1" strokeOpacity="0.84" strokeWidth="2.5" />
      <circle cx="110" cy="110" r="73" stroke="#8D682C" strokeOpacity="0.54" strokeDasharray="3 8" strokeLinecap="round" strokeWidth="2.5" />
      <path
        d="M110 36C136 36 160 46 177 62"
        stroke="#FFFAF1"
        strokeOpacity="0.9"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M62 53C75 44 92 38 110 36"
        stroke="#742B3F"
        strokeOpacity="0.38"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <text
        x="110"
        y="121"
        textAnchor="middle"
        fill="#531D2D"
        fontFamily="'Times New Roman', Georgia, serif"
        fontSize="74"
        fontStyle="italic"
        fontWeight="600"
        letterSpacing="4"
      >
        AS
      </text>
      <text
        x="110"
        y="154"
        textAnchor="middle"
        fill="#742B3F"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="10"
        letterSpacing="5"
      >
        NIKAH INVITATION
      </text>
    </svg>
  );
}
