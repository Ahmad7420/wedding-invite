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
          <stop offset="0" stopColor="#FFF9F3" />
          <stop offset="0.38" stopColor="#F8DFC9" />
          <stop offset="0.72" stopColor="#E7B992" />
          <stop offset="1" stopColor="#C58C5B" />
        </radialGradient>
        <linearGradient id="sealEdge" x1="36" y1="28" x2="184" y2="192" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFF4E6" />
          <stop offset="0.32" stopColor="#E5BC91" />
          <stop offset="0.7" stopColor="#B97B4F" />
          <stop offset="1" stopColor="#8C5934" />
        </linearGradient>
      </defs>

      <circle cx="110" cy="110" r="98" fill="url(#sealCore)" />
      <circle cx="110" cy="110" r="98" stroke="url(#sealEdge)" strokeWidth="8" />
      <circle cx="110" cy="110" r="84" stroke="#FFF8EF" strokeOpacity="0.8" strokeWidth="2.5" />
      <circle cx="110" cy="110" r="73" stroke="#A86743" strokeOpacity="0.48" strokeDasharray="3 8" strokeLinecap="round" strokeWidth="2.5" />
      <path
        d="M110 36C136 36 160 46 177 62"
        stroke="#FFF8EF"
        strokeOpacity="0.9"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M62 53C75 44 92 38 110 36"
        stroke="#8F5634"
        strokeOpacity="0.38"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <text
        x="110"
        y="121"
        textAnchor="middle"
        fill="#6E3E28"
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
        fill="#8E5D3B"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="10"
        letterSpacing="5"
      >
        NIKAH INVITATION
      </text>
    </svg>
  );
}
