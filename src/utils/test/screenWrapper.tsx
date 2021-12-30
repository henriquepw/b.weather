import { NavigationContainer } from '@react-navigation/native';

import AppProviders from '@/components/templates/AppProviders';

export const ScreenWrapper: React.FC = ({ children }) => (
  <AppProviders>
    <NavigationContainer>{children}</NavigationContainer>
  </AppProviders>
);
