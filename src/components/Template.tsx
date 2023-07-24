// components/Template.tsx
import { IChildrenProps } from "@/types/IComponentsProps";
import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Template: React.FC<IChildrenProps> = ({ children }) => {
  return (

        <Box maxW="container" mx="auto">
        <Header/>
      <main>{children}</main>

    </Box>
 
  );
};

export default Template;
