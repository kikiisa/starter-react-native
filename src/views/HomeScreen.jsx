import { Button, Text, View,StatusBar,StyleSheet } from "react-native";
import ButtonComponents from "../components/ButtonComponents";
const HomeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.button}>
        <ButtonComponents title="Home"/>
        <ButtonComponents title="Berita"/>
        <ButtonComponents title="Agenda"/>
        <ButtonComponents title="Pengumuman"/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  button:{
    flexDirection:"row",
    justifyContent:"center",
    gap:20,
    marginTop:20,
  }
})

export default HomeScreen;
