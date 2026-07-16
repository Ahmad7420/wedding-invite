type EntranceGoldConstellationProps = {
  isOpening: boolean;
};

export function EntranceGoldConstellation({
  isOpening,
}: EntranceGoldConstellationProps) {
  return (
    <div
      aria-hidden="true"
      className={`entrance-constellation-field pointer-events-none absolute inset-0 z-[18] overflow-hidden ${
        isOpening ? "is-opening" : ""
      }`}
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <radialGradient id="constellationParticle" cx="0" cy="0" r="1">
            <stop offset="0" stopColor="#FFF8DF" />
            <stop offset="0.32" stopColor="#F3DDA7" />
            <stop offset="0.72" stopColor="#C3A05A" />
            <stop offset="1" stopColor="#8E682C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="constellationLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#DEC58A" stopOpacity="0" />
            <stop offset="0.45" stopColor="#DEC58A" stopOpacity="0.5" />
            <stop offset="1" stopColor="#C3A05A" stopOpacity="0" />
          </linearGradient>
          <filter id="constellationGlow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="constellation-network constellation-network-left">
          <path
            d="M46 166C112 206 70 278 118 331C151 368 92 431 135 492C166 535 79 606 116 678C132 710 153 737 182 766"
            stroke="url(#constellationLine)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M46 166C85 249 42 373 74 450C102 518 55 574 38 633M118 331C74 362 61 401 74 450M135 492C103 523 100 574 116 678"
            stroke="#DEC58A"
            strokeOpacity="0.12"
            strokeWidth="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <circle className="constellation-particle constellation-particle-a" cx="46" cy="166" r="9" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-b" cx="118" cy="331" r="6" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-c" cx="74" cy="450" r="8" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-d" cx="135" cy="492" r="5" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-e" cx="38" cy="633" r="7" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-f" cx="116" cy="678" r="6" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-g" cx="182" cy="766" r="9" fill="url(#constellationParticle)" />
        </g>

        <g className="constellation-network constellation-network-right">
          <path
            d="M954 188C889 229 928 294 881 348C848 386 906 447 864 508C834 552 920 621 884 694C868 726 846 752 816 781"
            stroke="url(#constellationLine)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M954 188C916 270 959 391 926 468C898 536 945 592 962 651M881 348C924 379 939 418 926 468M864 508C897 539 900 592 884 694"
            stroke="#DEC58A"
            strokeOpacity="0.12"
            strokeWidth="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <circle className="constellation-particle constellation-particle-c" cx="954" cy="188" r="7" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-f" cx="881" cy="348" r="9" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-a" cx="926" cy="468" r="5" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-e" cx="864" cy="508" r="8" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-b" cx="962" cy="651" r="6" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-d" cx="884" cy="694" r="7" fill="url(#constellationParticle)" />
          <circle className="constellation-particle constellation-particle-g" cx="816" cy="781" r="9" fill="url(#constellationParticle)" />
        </g>

        <g className="constellation-dust" filter="url(#constellationGlow)">
          <circle className="constellation-particle constellation-particle-b" cx="244" cy="104" r="3.2" fill="#F3DDA7" />
          <circle className="constellation-particle constellation-particle-e" cx="756" cy="112" r="2.8" fill="#DEC58A" />
          <circle className="constellation-particle constellation-particle-d" cx="282" cy="862" r="2.6" fill="#C3A05A" />
          <circle className="constellation-particle constellation-particle-a" cx="721" cy="874" r="3" fill="#F3DDA7" />
          <circle className="constellation-particle constellation-particle-f" cx="68" cy="820" r="2.4" fill="#DEC58A" />
          <circle className="constellation-particle constellation-particle-c" cx="936" cy="834" r="2.5" fill="#C3A05A" />
        </g>
      </svg>
    </div>
  );
}
