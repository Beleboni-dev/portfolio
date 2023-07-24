// theme.ts (ou qualquer outro nome que você preferir)
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    dark: {
      primary: "#2c3e50",
      secondary: "#3498db",
      accent: "#e74c3c",
      darkGray: "#404040",
      green: "#27ae60",
      // Adicione mais cores dark conforme necessário
    },
    light: {
      primary: "#ffffff",
      secondary: "#34495e",
      accent: "#e67e22",
      lightGray: "#f0f0f0",
      purple: "#9b59b6",
      // Adicione mais cores light conforme necessário
    },
  },
  fonts: {
    body: "Inter, sans-serif", // Defina a fonte padrão para o corpo do texto
    heading: "Montserrat, serif", // Defina a fonte para títulos e cabeçalhos
  },
  fontWeights: {
    // Defina as variações de peso aqui
    normal: 400,
    medium: 500,
    semibold: 600,
  },
  sizes: {
    container: "1280px",
    // Adicione tamanhos personalizados conforme necessário
    // Exemplo:
    // sm: "20rem",
    // md: "30rem",
    // lg: "40rem",
    // xl: "50rem",
  },
   breakpoints: {
    // Defina os breakpoints responsivos conforme necessário
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
  config: {
    useSystemColorMode: true, // Define que o tema não deve ser baseado nas preferências do sistema
  },
});


export default theme;
