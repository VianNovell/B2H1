interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spine illustration */}
      <g transform="translate(20, 30)">
        <path
          d="M15 20 Q20 25 15 30 Q10 35 15 40 Q20 45 15 50 Q10 55 15 60 Q20 65 15 70 Q10 75 15 80 Q20 85 15 90 Q10 95 15 100 Q20 105 15 110 Q10 115 15 120 Q20 125 15 130 Q10 135 15 140"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Vertebrae segments */}
        {Array.from({ length: 12 }, (_, i) => (
          <rect
            key={i}
            x="10"
            y={22 + i * 10}
            width="10"
            height="6"
            fill="#3b82f6"
            rx="2"
          />
        ))}
      </g>

      {/* Circular frame */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="#6b7280"
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="#6b7280"
        strokeWidth="1"
      />

      {/* Main text "BACK 2" */}
      <text
        x="100"
        y="85"
        textAnchor="middle"
        className="text-2xl font-bold"
        fill="#1e3a8a"
        fontSize="28"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        BACK 2
      </text>

      {/* Main text "HEALTH" */}
      <text
        x="100"
        y="110"
        textAnchor="middle"
        className="text-2xl font-bold"
        fill="#1e3a8a"
        fontSize="28"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        HEALTH
      </text>

      {/* Subtitle "CHIROPRACTIC" */}
      <text
        x="100"
        y="135"
        textAnchor="middle"
        className="text-sm"
        fill="#6b7280"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="normal"
      >
        CHIROPRACTIC
      </text>

      {/* Subtitle "WELLNESS CENTRE" */}
      <text
        x="100"
        y="150"
        textAnchor="middle"
        className="text-sm"
        fill="#6b7280"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="normal"
      >
        WELLNESS CENTRE
      </text>
    </svg>
  );
}