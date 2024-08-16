import { Pressable, View } from "react-native";
import { Container, Content, DropdownContainer, Line, OptionContainer, OptionIcon, OptionText, ProductSubOptionContainer, ProductSubOptionText } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SideBar({ visible, vendedor, setSideBarVisible }: { visible: boolean, vendedor: boolean, setSideBarVisible: (value: boolean) => void }) {
    const navigation = useNavigation();
    const [dropdown, setDropdown] = useState(false);

    const suboptions = [
        { title: "Jogos Eletrônicos" },
        { title: "Peças de Computadores" },
        { title: "Acessórios Novos" },
        { title: "Acessórios Semi-Novos" },
    ];

    const handleNavigation = (route: string) => {
        navigation.navigate(route as never);
        setSideBarVisible(false);
    };

    return (
        <Container isVisible={visible}>
            <Content>
                <OptionContainer onPress={() => {handleNavigation(`${vendedor ? "SellerHome" : "Home"}`); setDropdown(false)}}>
                    <OptionIcon width={24} height={21.33} source={require("../../assets/icons/homeAzul.png")} />
                    <OptionText>Home</OptionText>
                </OptionContainer>
                <Line />
                <OptionContainer onPress={() => setDropdown(!dropdown)}>
                    <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 19, marginLeft: -1 }}>
                            <OptionIcon width={28} height={28} source={require("../../assets/icons/produtosAzul.png")} />
                            <OptionText>Produtos</OptionText>
                        </View>
                        <OptionIcon width={24} height={13.61} source={dropdown ? require("../../assets/icons/setaCimaAzul.png") : require("../../assets/icons/setaBaixoAzul.png")} />
                    </View>
                </OptionContainer>
                <DropdownContainer isVisible={dropdown}>
                    {suboptions.map((suboption) => (
                        <ProductSubOptionContainer onPress={() => {(vendedor ? '': handleNavigation("Products")); setDropdown(false)}}>
                            <ProductSubOptionText>{suboption.title}</ProductSubOptionText>
                        </ProductSubOptionContainer>
                    ))}
                </DropdownContainer>
                <OptionContainer onPress={() => {(vendedor ? '' : handleNavigation("Coupons")); setDropdown(false)}}>
                    <OptionIcon width={26} height={19.32} source={require("../../assets/icons/cupomAzul.png")} />
                    <OptionText>Cupom</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon width={26} height={22.47} source={require("../../assets/icons/favoritosAzul.png")} />
                    <OptionText>Favoritos</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon width={24} height={24} source={require("../../assets/icons/carrinhoAzul.png")} />
                    <OptionText>Carrinho</OptionText>
                </OptionContainer>
                <Line />
                <OptionContainer>
                    <OptionIcon width={24} height={24} source={require("../../assets/icons/informacoesAzul.png")} />
                    <OptionText>Informações</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon width={24} height={24} source={require("../../assets/icons/contatoAzul.png")} />
                    <OptionText>Contato</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon width={24} height={24} source={require("../../assets/icons/configuracoesAzul.png")} />
                    <OptionText>Configurações</OptionText>
                </OptionContainer>
                <OptionContainer onPress={() => {handleNavigation("Login"); setDropdown(false)}}>
                    <OptionIcon width={24} height={30} source={require("../../assets/icons/sairAzul.png")} />
                    <OptionText>Sair</OptionText>
                </OptionContainer>
            </Content>
        </Container>
    );
}
