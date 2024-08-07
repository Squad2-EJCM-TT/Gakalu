import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 76
    },
    containerLogo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#8D8D92',
        
        
    },
    logoImage: {
        width: 63,
        height: 63,
        marginRight: 74,
        marginTop: 23,
        
    },
    textContainer: {
        color: '#8D8D92',
        position: 'absolute',
        top: -15,
        left: '20%',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: 400,
        zIndex: 2,
    }
})