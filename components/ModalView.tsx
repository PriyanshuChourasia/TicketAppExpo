import React  from "react"
import { Pressable } from "react-native";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"



interface IModelView{
    isVisible:boolean;
    setIsVisible:(model:boolean)=>void;
    children:any;
}



export const ModalView: React.FC<IModelView> = ({isVisible,setIsVisible,children}) =>{


    return(
        <>
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setIsVisible(!isVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {children}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
        </>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#000000c0",
    },
    modalView: {
      flexDirection:'row',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    bottomContainer:{
      marginVertical:4,
    }
  });