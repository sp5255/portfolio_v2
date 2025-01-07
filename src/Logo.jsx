import React from "react";

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width={500}
    //   height={500}
      {...props}
    >
      <defs />
      <g>
        <path
          fill="none"
          stroke="#000000"
          paintOrder="fill stroke markers"
          d=" M 40 120 Q 200 120 30 0"
          strokeMiterlimit={10}
          strokeDasharray=""
        />
        <path
          fill="none"
          stroke="#000000"
          paintOrder="fill stroke markers"
          d=" M 40 100 L 40 120"
          strokeMiterlimit={10}
          strokeDasharray=""
        />
        <path
          fill="none"
          stroke="#000000"
          paintOrder="fill stroke markers"
          d=" M 130 30 Q -25 10 155 160"
          strokeMiterlimit={10}
          strokeDasharray=""
        />
        <path
          fill="none"
          stroke="#000000"
          paintOrder="fill stroke markers"
          d=" M 130 30 L 130 50"
          strokeMiterlimit={10}
          strokeDasharray=""
        />
      </g>
    </svg>
  );
};

export default Logo;
