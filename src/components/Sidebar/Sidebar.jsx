import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarContainer, SidebarItem, ToggleButton } from './styles';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Fechar' : 'Abrir'}
      </ToggleButton>
      <SidebarItem>
        <Link to="/">Home</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/dashboard">Dashboard</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/settings">Settings</Link>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
