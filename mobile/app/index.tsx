import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles/Home_styles";

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
