import { TouchableOpacity } from "react-native";
export function MenuContainer({children}: {children: React.ReactNode}) {
  return (
    <TouchableOpacity style={{
      borderRadius: 32,
      width: 180,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 28,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      alignSelf: 'center',
      marginTop: 50, 
      marginBottom: 10
    }}>
      {children}
    </TouchableOpacity>
  )
}