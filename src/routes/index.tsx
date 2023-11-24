import TabRoutes from "./tab.routes";

import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
