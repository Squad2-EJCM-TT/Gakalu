import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    logoGakalu: {
        width: 210,
        height: 84
    },
    containerForm: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 80
    },
    tituloForm: {
        fontSize: 36,
        fontWeight: 400,
        color: '#1C1C1E',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginBottom: 15
    },
    textSenha: {
        fontSize: 16,
        color: '#0332FC', 
        fontWeight: 500, 
        alignSelf: 'flex-end',
        marginRight: 34
    },
    textConta: {
        color: '#1C1C1E', 
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
        position: 'absolute',
        bottom: 35
    },
    textContaAzul: {
        color: '#0332FC',
        fontWeight: 600,
        
    }
})