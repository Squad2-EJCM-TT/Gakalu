import { Image, Text, View } from "react-native"
import {styles} from './style'

//imagens



const LogoContainer = () => {
    return (
            <View style = {styles.container}>
                <Text style = {styles.textContainer}>Ou Conecte Com</Text>
                <View style = {styles.containerLogo}>
                    <Image source={require('../../assets/gmaillogo.svg')} style = {styles.logoImage}></Image>
                    <Image source={require('../../assets/facebooklogo.svg')} style = {styles.logoImage}></Image>
                </View>
            </View>
        
    )
}

export default LogoContainer