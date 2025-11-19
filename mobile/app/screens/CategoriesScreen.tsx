import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { apiGet } from "../../services/api";

type Category = {
  id: number;
  name: string;
  description?: string;
};

export default function CategoriesScreen() {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const result = await apiGet("/categorias/");
    setData(result);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categorias</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.name}</Text>}
      />
    </View>
  );
}
