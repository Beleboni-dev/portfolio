import theme from "@/styles/theme";
import { Icon, IconProps, useColorMode } from "@chakra-ui/react";
import React from "react";

export const StageLines: React.FC<IconProps> = (props) => {
  const {colorMode} = useColorMode()
  return (
    <Icon
      width="430px"
      height="444px"
      viewBox="0 0 430 444"
      fill="none"
      {...props}
    >
      <line
        x1="1"
        y1="-4.37114e-08"
        x2="1.00002"
        y2="444"
        stroke="url(#paint0_linear_40_2)"
        strokeWidth="2px"
      />
      <line
        x1="430"
        y1="443"
        x2="-8.74228e-08"
        y2="443"
        stroke="url(#paint0_linear_40_2)"
        strokeWidth="2px"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_2"
          x1="430"
          y1="442"
          x2="-0.00346153"
          y2="27.5018"
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
      </defs>
    </Icon>
  );
};
