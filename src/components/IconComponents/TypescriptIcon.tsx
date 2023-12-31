import theme from "@/styles/theme";
import { useColorMode } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const TypescriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
): ReactElement => {
      const { colorMode } = useColorMode();
      const color =
        colorMode === "dark"
          ? `${theme.colors.light.primary}`
          : `${theme.colors.dark.primary}`;
  return (
    <svg
      width={60}
      height={52}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 6.104C0 3.018 2.938.516 6.563.516h46.874C57.063.516 60 3.018 60 6.104v6.387c0 1.322-1.26 2.395-2.813 2.395-1.553 0-2.812-1.073-2.812-2.395V6.104c0-.44-.42-.798-.938-.798H6.563c-.518 0-.938.357-.938.798v39.917c0 .441.42.798.938.798h50.624c1.554 0 2.813 1.073 2.813 2.395 0 1.323-1.26 2.395-2.813 2.395H6.563C2.938 51.61 0 49.107 0 46.021V6.104zm17.813 15.169c0-1.323 1.259-2.396 2.812-2.396h14.063c1.553 0 2.812 1.073 2.812 2.396 0 1.322-1.26 2.395-2.813 2.395h-3.75v16.765c0 1.322-1.259 2.395-2.812 2.395s-2.813-1.073-2.813-2.395V23.668h-4.687c-1.553 0-2.813-1.073-2.813-2.395zm24.47.255c1.571-1.591 4.032-2.65 7.404-2.65 3.131 0 5.494.912 7.086 2.346 1.067.961 1.016 2.477-.112 3.386-1.13.908-2.91.866-3.976-.096-.412-.37-1.233-.846-2.998-.846-1.877 0-2.697.537-3.096.941-.49.498-.654 1.121-.654 1.453 0 .333.163.956.654 1.454.399.404 1.219.942 3.096.942.284 0 .559.035.817.102 2.486.301 4.366 1.247 5.65 2.548 1.477 1.499 1.971 3.27 1.971 4.535 0 1.264-.493 3.035-1.971 4.534-1.57 1.592-4.032 2.65-7.404 2.65-3.13 0-5.493-.912-7.085-2.346-1.067-.961-1.017-2.477.112-3.386 1.129-.908 2.909-.865 3.976.096.412.37 1.233.847 2.997.847 1.878 0 2.698-.538 3.096-.942.491-.498.654-1.121.654-1.453 0-.333-.163-.956-.654-1.454-.398-.404-1.218-.941-3.096-.941a3.26 3.26 0 01-.816-.103c-2.487-.301-4.366-1.247-5.65-2.548-1.478-1.499-1.971-3.27-1.971-4.535 0-1.264.493-3.035 1.97-4.534z"
        fill={color}
      />
    </svg>
  );
};

export  {TypescriptIcon};
