import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // Importe os ícones do Chakra UI ou de outra biblioteca de ícones que você esteja usando
import theme from "@/styles/theme";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" h="5rem" p="4">
        <Box display="flex" justifyContent="flex-end" alignItems="center" h="100%">
        <Box display="flex" justifyContent="center" alignItems="center">
        <button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
        </Box>
        </Box>
    </Box>
  );
};

export default Header;
