import { createContext, useContext, useMemo, useState } from 'react';

import SidebarDrawer from '../../components/sidebar/SidebarDrawer';
import {
  sidebarMenu,
  sidebarPermissions,
  sidebarProfile,
  sidebarWorkspaces,
} from '../../constants/sidebar/sidebarData';
import { getVisibleMenuGroups } from '../../utils/sidebar/sidebarMenu';

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState('bright-digital');
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [expandedGroupIds, setExpandedGroupIds] = useState([]);

  const menuGroups = useMemo(
    () => getVisibleMenuGroups(sidebarMenu, sidebarPermissions),
    [],
  );

  const value = useMemo(
    () => ({
      isOpen,
      openSidebar: () => setIsOpen(true),
      closeSidebar: () => setIsOpen(false),
      toggleSidebar: () => setIsOpen((current) => !current),
      profile: sidebarProfile,
      workspaces: sidebarWorkspaces,
      activeWorkspaceId,
      setActiveWorkspaceId,
      menuGroups,
      darkModeEnabled,
      setDarkModeEnabled,
      expandedGroupIds,
      toggleGroup: (groupId) =>
        setExpandedGroupIds((current) =>
          current.includes(groupId)
            ? current.filter((id) => id !== groupId)
            : [...current, groupId],
        ),
    }),
    [activeWorkspaceId, darkModeEnabled, expandedGroupIds, isOpen, menuGroups],
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
      <SidebarDrawer />
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }

  return context;
}
