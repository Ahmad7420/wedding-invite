type RoyalGeometricPatternProps = {
  className?: string;
};

const motifs = [
  [90, 92, 1],
  [305, 180, 0.72],
  [535, 80, 0.9],
  [760, 190, 0.68],
  [1010, 92, 1],
  [180, 430, 0.82],
  [470, 360, 0.58],
  [720, 410, 0.76],
  [940, 385, 0.62],
] as const;

export function RoyalGeometricPattern({ className }: RoyalGeometricPatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1100 520"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
    >
      {motifs.map(([x, y, scale]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
          <path
            d="M0-44L13-18L40-31L31-4L58 9L31 22L40 49L13 36L0 62L-13 36L-40 49L-31 22L-58 9L-31-4L-40-31L-13-18Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0-28L9-9L28 0L9 9L0 28L-9 9L-28 0L-9-9Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <circle r="5" stroke="currentColor" strokeWidth="0.75" />
        </g>
      ))}
      <path
        d="M35 258C225 182 365 334 550 258C735 182 875 334 1065 258"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="3 14"
      />
    </svg>
  );
}
