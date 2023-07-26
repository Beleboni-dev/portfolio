import { IChildrenProps } from "@/types/IComponentsProps";
import { IMenuItemProps } from "@/types/IMenuProps";
import { Box,Text, useColorMode } from "@chakra-ui/react";

import theme from "@/styles/theme";
import { AtomIcon } from "./IconComponents/AtomIcon";

const MenuItem: React.FC<IMenuItemProps & IChildrenProps> = ({
  isActive,
  children,
  onClick,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      px="4"
      py="2"
      fontWeight={isActive ? "bold" : "regular"}
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      position="relative"
      onClick={onClick}
    >
      {isActive && (
        <AtomIcon
          style={{
            visibility: "visible",
            marginRight: "0.25rem", // Adicionamos uma margem à direita do ícone
          }}
        />
      )}
      <Text
        _hover={{
          transition: "0.4s",
          backgroundImage:
            colorMode === "dark"
              ? `linear-gradient(90deg, ${theme.colors.dark.gradientGreen}, ${theme.colors.dark.gradientBlue})`
              : `linear-gradient(90deg, ${theme.colors.light.gradientOrange}, ${theme.colors.light.gradientPurple})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
        marginLeft={isActive ? "0.25rem" : undefined}
      >
        {children}
      </Text>
    </Box>
  );
};

export { MenuItem };
