import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons'
export function DislikeButton() {
  return (
    <View style={{
      borderRadius: 32,
      shadowColor: '#000',
      width: 64,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    }}>
      <AntDesign name="close" size={36} color="#E1645A" />
    </View>
  )
}