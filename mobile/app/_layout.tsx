import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="screens/CategoriesScreen" options={{ title: "Categorias" }} />
      <Stack.Screen name="screens/ProductsScreen" options={{ title: "Produtos" }} />
    </Stack>
  );
}
