import { Box, Heading, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import {AdjustIconTop } from "./IconComponents/AdjustIconTop";
import { HeaderMenu } from "./HeaderMenu";


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" position="relative">
      <AdjustIconTop/>
      <Box position="absolute" top="2.8125rem" right="2rem">
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode} aria-label={""}        />
      </Box>
      <Box
        display="flex"
        gap="1rem"
        alignItems="center"
        position="absolute"
        top="2.8125rem"
        left="2.8125rem"
      >
        <Box as="img" src="/perfil.png" alt="foto-lucas" />
        <Box>
          <Heading as="h2">Lucas Beleboni</Heading>
          <Box as="h3">Developer</Box>
        </Box>
      </Box>
      <HeaderMenu/> 
    </Box>
  );
};

export default Header;
