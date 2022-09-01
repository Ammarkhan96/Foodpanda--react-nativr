import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MainNavigation from './src/config/navigation'
import { StyleSheet } from "react-native";

export default function App(){
  return(
    <NavigationContainer>

     <MainNavigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

