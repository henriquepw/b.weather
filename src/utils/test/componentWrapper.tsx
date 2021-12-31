import AppProviders from '@/components/templates/AppProviders';

export const ComponentWrapper: React.FC = ({ children }) => (
  <AppProviders>{children}</AppProviders>
);
