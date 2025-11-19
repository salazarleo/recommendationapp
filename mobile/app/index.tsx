import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Link href="/screens/CategoriesScreen">
        <Text style={styles.link}>Categorias</Text>
      </Link>

      <Link href="/screens/ProductsScreen">
        <Text style={styles.link}>Produtos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    fontSize: 18,
    color: "blue",
  },
});
