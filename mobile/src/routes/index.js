import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  // const { signed, loading } = useAuth();

  const signed = false;
  const loading = false;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
