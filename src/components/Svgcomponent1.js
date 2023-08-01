import * as React from "react"

function SvgComponent1(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={560}
      height={36}
      viewBox="0 0 560 36"
      fill="none"
      {...props}
    >
      <path
        d="M78.222 35.556L0 0h506.667L560 10.667H90.667L78.222 35.556z"
        fill="#EE2528"
      />
    </svg>
  )
}

export default SvgComponent1
