import { Box } from "@chakra-ui/react";
import {StageLines} from "../components/IconComponents/StageLines";
import { TechsList } from "./TechList";
import { NodeIcon } from "../components/IconComponents/NodeIcon";
import { PostgresIcon } from "../components/IconComponents/PostgresIcon";
import { TypescriptIcon } from "../components/IconComponents/TypescriptIcon";

const Stage: React.FC = () => {
const selectedTechs = [
  { name: "NodeJs", icon: <NodeIcon /> },
  { name: "Postgres", icon: <PostgresIcon /> },
  { name: "Typescript", icon: <TypescriptIcon /> },

  // Adicione outras tecnologias e seus respectivos ícones aqui
];

    return (
      <Box>
        <Box mt="2.6875rem" ml="1.375rem" display="flex" alignItems="center">
        <TechsList techs={selectedTechs} />
          <StageLines />
        </Box>
      </Box>
    );
};
export default Stage