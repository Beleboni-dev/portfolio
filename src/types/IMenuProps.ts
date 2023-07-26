export interface IMenuItemProps {
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // Adicionando o evento de clique
}

