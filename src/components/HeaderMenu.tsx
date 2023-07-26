import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";


const HeaderMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const handleItemClick = (index: number) => {
    setActiveItem(index); 
  };

  return (
    <Flex alignItems="center" gap=".5rem" position="absolute" top="50%" left="50%">
      <MenuItem isActive={activeItem === 1} onClick={() => handleItemClick(1)}>
        Projetos
      </MenuItem>
      <MenuItem isActive={activeItem === 0} onClick={() => handleItemClick(0)}>
        Conheça-me
      </MenuItem>
      <MenuItem isActive={activeItem === 2} onClick={() => handleItemClick(2)}>
        Fale Comigo
      </MenuItem>
    </Flex>
  );
};

export { HeaderMenu };
