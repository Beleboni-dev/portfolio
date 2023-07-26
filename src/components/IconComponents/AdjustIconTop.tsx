import theme from "@/styles/theme";
import { useColorMode } from "@chakra-ui/react";
import * as React from "react";

const AdjustIconTop = (props: React.SVGProps<SVGSVGElement>) => {
      const { colorMode } = useColorMode();
  return (
    <svg
      width={210}
      height={210}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_22_212)">
        <path
          d="M5.6 0H210l-14 14H17.5a3.5 3.5 0 00-3.5 3.5V196L0 210V5.6A5.6 5.6 0 015.6 0z"
          fill="url(#prefix__paint0_linear_22_212)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_22_212"
          x1={13.65}
          y1={12.95}
          x2={153.3}
          y2={149.45}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={
              colorMode === "dark"
                ? theme.colors.dark.gradientGreen
                : theme.colors.light.gradientOrange
            }
          />
          <stop
            offset={1}
            stopColor={
              colorMode === "dark"
                ? theme.colors.dark.gradientBlue
                : theme.colors.light.gradientPurple
            }
            stopOpacity={0.96}
          />
        </linearGradient>
        <clipPath id="prefix__clip0_22_212">
          <path fill="#fff" d="M0 0h210v210H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export {AdjustIconTop}