export const useSidebar = () => {
  const sidebar = useState('isOpen', () => ({
    isOpen: false,
  }));

  const toggleSidebar = () => {
    sidebar.value.isOpen = !sidebar.value.isOpen;
  };

  const closeSidebar = () => {
    sidebar.value.isOpen = false;
  };

  const openSidebar = () => {
    sidebar.value.isOpen = true;
  };

  return { sidebar, toggleSidebar, closeSidebar, openSidebar };
};