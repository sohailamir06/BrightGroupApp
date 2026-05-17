import SidebarMenuItem from './SidebarMenuItem';

export default function LogoutButton({ onPress }) {
  return (
    <SidebarMenuItem
      danger
      item={{ id: 'logout', label: 'Logout', icon: 'log-out' }}
      onPress={onPress}
    />
  );
}
