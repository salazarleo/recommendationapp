import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function EditCategoryScreen({ route, navigation }: any) {
  const { category } = route.params;

  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);

  const BASE_URL = "http://192.168.2.153:8000";

  const handleSave = async () => {
    await fetch(`${BASE_URL}/categorias/${category.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    navigation.navigate("Categories");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Categoria</Text>

      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, alignSelf: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 },
});
