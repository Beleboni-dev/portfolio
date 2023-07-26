import { ITechsListProps } from "@/types/ITechsProps";
import { Box } from "@chakra-ui/react";
import React from "react";

const TechsList: React.FC<ITechsListProps> = ({ techs }) => {


  return (
    <Box as="ul" listStyleType="none" minH='26.875rem' display="flex" flexDirection="column" justifyContent="space-around" mr="1.625rem">
      {techs.map((tech) => (
        <li key={tech.name}>
          {tech.icon}
        </li>
      ))}
    </Box>
  );
};

export {TechsList};
