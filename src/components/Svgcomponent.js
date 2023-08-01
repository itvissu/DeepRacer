import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={571}
      height={46}
      viewBox="0 0 571 46"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_1_117)">
        <path
          d="M487.638.936L566 36.556H58.429L5 25.87h470.171L487.638.936z"
          fill="#EE2528"
        />
        <path
          d="M487.638.936L566 36.556H58.429L5 25.87h470.171L487.638.936z"
          stroke="#000"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_117"
          x={0.901917}
          y={0.281906}
          width={569.305}
          height={44.7736}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_117" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_117"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent