import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Image source={require("../../assets/images/icon.png")} style={{ width: 80, height: 80, borderRadius: 40 }} />
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>Olá, Usuário!</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
