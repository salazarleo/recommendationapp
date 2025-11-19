import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { apiGet } from "../../services/api";

type Product = {
  id: number;
  name: string;
  description: string;
  date_fabrication: string;
  is_active: boolean;
  quantity: number;
  price: string;
  status: string;
  category: number;
};

export default function ProductsScreen() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const result = await apiGet("/produtos/");
    setData(result as Product[]);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Produtos</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>

            <Text>Preço: R$ {item.price}</Text>

            <Text>Status: {item.status}</Text>

            <Text>Categoria (ID): {item.category}</Text>
          </View>
        )}
      />
    </View>
  );
}
