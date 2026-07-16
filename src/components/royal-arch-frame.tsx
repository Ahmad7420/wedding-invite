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
        <linearGradient id="floatingLeaf" x1="0" y1="0" x2="12" y2="20">
          <stop offset="0" stopColor="#AAA578" />
          <stop offset="1" stopColor="#696640" />
        </linearGradient>
        <linearGradient id="floatingStem" x1="30" y1="0" x2="400" y2="840">
          <stop offset="0" stopColor="#F3DDA7" />
          <stop offset="0.5" stopColor="#C3A05A" />
          <stop offset="1" stopColor="#8E682C" />
        </linearGradient>
        <g id="floatingJasmine">
          <ellipse cy="-5" rx="3.1" ry="6" fill="#FFF8E8" />
          <ellipse cy="-5" rx="3.1" ry="6" fill="#F2E7D3" transform="rotate(72)" />
          <ellipse cy="-5" rx="3.1" ry="6" fill="#FFF8E8" transform="rotate(144)" />
          <ellipse cy="-5" rx="3.1" ry="6" fill="#F2E7D3" transform="rotate(216)" />
          <ellipse cy="-5" rx="3.1" ry="6" fill="#FFF8E8" transform="rotate(288)" />
          <circle r="2" fill="#C3A05A" />
        </g>
        <path id="floatingLeafShape" d="M0 0C1.5-7 7-11 13-10C12-3 7 1 0 0Z" fill="url(#floatingLeaf)" />
        <path id="floatingPetalShape" d="M0 0C3-7 9-8 12-2C9 4 4 5 0 0Z" fill="#F2E7D3" />
      </defs>

      <g className="royal-botanical royal-botanical-crown">
        <path
          d="M154 78C181 77 196 60 220 45C244 60 259 77 286 78"
          stroke="url(#floatingStem)"
          strokeOpacity="0.72"
          strokeWidth="1.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M181 73C178 61 182 51 191 43M202 56C200 43 206 34 216 27M238 57C241 44 235 35 225 28M259 72C264 60 260 50 251 43"
          stroke="#858153"
          strokeOpacity="0.68"
          strokeWidth="0.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <use href="#floatingLeafShape" transform="translate(174 69) rotate(-112) scale(0.82)" />
        <use href="#floatingLeafShape" transform="translate(187 50) rotate(-76) scale(0.72)" />
        <use href="#floatingLeafShape" transform="translate(207 39) rotate(-66) scale(0.72)" />
        <use href="#floatingLeafShape" transform="translate(233 39) rotate(156) scale(0.72)" />
        <use href="#floatingLeafShape" transform="translate(253 51) rotate(166) scale(0.72)" />
        <use href="#floatingLeafShape" transform="translate(267 69) rotate(-158) scale(0.82)" />
        <use href="#floatingJasmine" transform="translate(185 69) scale(0.82)" />
        <use href="#floatingJasmine" transform="translate(220 43) scale(1.1)" />
        <use href="#floatingJasmine" transform="translate(255 69) scale(0.82)" />
        <circle cx="202" cy="54" r="3.2" fill="#B97882" fillOpacity="0.72" />
        <circle cx="238" cy="54" r="3.2" fill="#B97882" fillOpacity="0.72" />
      </g>

      <g className="royal-botanical royal-botanical-left">
        <path
          d="M18 208C72 235 42 292 76 335C100 366 70 416 48 455C33 482 39 512 56 538"
          stroke="url(#floatingStem)"
          strokeOpacity="0.62"
          strokeWidth="1.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M50 246C67 240 77 229 81 216M61 310C44 302 34 290 31 275M78 359C94 357 105 347 111 334M58 436C43 430 32 418 28 402M43 492C57 492 69 500 75 512" stroke="#858153" strokeOpacity="0.58" strokeWidth="0.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <use href="#floatingLeafShape" transform="translate(49 247) rotate(-25) scale(0.82)" />
        <use href="#floatingLeafShape" transform="translate(64 308) rotate(-155) scale(0.9)" />
        <use href="#floatingLeafShape" transform="translate(79 359) rotate(-18) scale(0.84)" />
        <use href="#floatingLeafShape" transform="translate(57 436) rotate(-150) scale(0.78)" />
        <use href="#floatingLeafShape" transform="translate(44 491) rotate(18) scale(0.72)" />
        <use href="#floatingJasmine" transform="translate(46 246) scale(0.8)" />
        <use href="#floatingJasmine" transform="translate(77 359) scale(0.95)" />
        <use href="#floatingJasmine" transform="translate(46 455) scale(0.7)" />
        <circle cx="60" cy="307" r="3.4" fill="#B97882" fillOpacity="0.66" />
        <circle cx="54" cy="525" r="2.8" fill="#DEC58A" fillOpacity="0.76" />
      </g>

      <g className="royal-botanical royal-botanical-right">
        <path
          d="M422 226C371 251 398 306 365 350C342 381 370 428 392 466C408 494 402 525 385 551"
          stroke="url(#floatingStem)"
          strokeOpacity="0.62"
          strokeWidth="1.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M391 261C375 255 365 245 360 231M379 324C396 316 406 304 409 289M363 374C347 372 336 362 330 349M383 447C398 441 409 429 413 413M397 504C383 504 371 512 365 524" stroke="#858153" strokeOpacity="0.58" strokeWidth="0.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <use href="#floatingLeafShape" transform="translate(391 262) rotate(-155) scale(0.82)" />
        <use href="#floatingLeafShape" transform="translate(377 322) rotate(-25) scale(0.9)" />
        <use href="#floatingLeafShape" transform="translate(362 374) rotate(-164) scale(0.84)" />
        <use href="#floatingLeafShape" transform="translate(383 447) rotate(-30) scale(0.78)" />
        <use href="#floatingLeafShape" transform="translate(396 503) rotate(160) scale(0.72)" />
        <use href="#floatingJasmine" transform="translate(394 261) scale(0.8)" />
        <use href="#floatingJasmine" transform="translate(363 374) scale(0.95)" />
        <use href="#floatingJasmine" transform="translate(394 466) scale(0.7)" />
        <circle cx="380" cy="322" r="3.4" fill="#B97882" fillOpacity="0.66" />
        <circle cx="387" cy="538" r="2.8" fill="#DEC58A" fillOpacity="0.76" />
      </g>

      <g className="royal-floating-petals">
        <use className="royal-floating-petal royal-floating-petal-one" href="#floatingPetalShape" transform="translate(112 747) rotate(24) scale(0.7)" />
        <use className="royal-floating-petal royal-floating-petal-two" href="#floatingPetalShape" transform="translate(174 784) rotate(-22) scale(0.55)" />
        <use className="royal-floating-petal royal-floating-petal-three" href="#floatingPetalShape" transform="translate(262 776) rotate(38) scale(0.65)" />
        <use className="royal-floating-petal royal-floating-petal-four" href="#floatingPetalShape" transform="translate(325 744) rotate(-34) scale(0.58)" />
        <circle cx="219" cy="806" r="2.4" fill="#B97882" fillOpacity="0.58" />
      </g>
    </svg>
  );
}
