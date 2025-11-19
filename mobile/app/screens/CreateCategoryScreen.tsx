import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";

export default function CreateCategoryScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  const BASE_URL = "http://192.168.2.153:8000";

  const handleSave = async () => {
    setSaving(true);
    await fetch(`${BASE_URL}/categorias/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    setSaving(false);
    navigation.navigate("Categories");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Categoria</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />

      {saving ? <ActivityIndicator size="large" /> : <Button title="Salvar" onPress={handleSave} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, alignSelf: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 },
});
