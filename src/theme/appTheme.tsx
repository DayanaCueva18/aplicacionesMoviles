import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    }, title:{
fontSize:20,
marginBottom:20,
textAlign:'center'

    },
    buttonPerson:{
        width:100,
        height:100,
        backgroundColor:'#C2FABA',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginRight:15,
        textAlign:'center'
    },
    buttonPersonText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'

    },avatar:{
        width:150,
        height:150,
        borderRadius:100,

    },
    avatarContainer:{
        alignItems:'center',
       backgroundColor:'blue'

    }, menuText:{
fontSize:20,
fontWeight:'bold'

    }, menuContainer:{
        marginVertical:30,
        marginHorizontal:30
    },

    menuButton:{
        marginVertical:10
    }
})