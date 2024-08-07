import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, OptionPressable, OptionText, OptionUnderline, ProductsDisplayContainer, ProductsNavigationContainer, ProductsTitle } from "./style";
import Product from "../../components/Product";

export default function Products(){
    const [isTodos, setIsTodos] = useState(true);
    const [isRAM, setIsRAM] = useState(false);
    const [isCooler, setIsCooler] = useState(false);
    const [isFonte, setIsFonte] = useState(false);
    const [isPlacaVideo, setIsPlacaVideo] = useState(false);

    const handleToggle = (option: string) => {
        switch(option){
            case "Todos":
                setIsTodos(!isTodos);
            break;

            case "RAM":
                setIsRAM(!isRAM);
            break;

            case "Cooler":
                setIsCooler(!isCooler);
            break;

            case "Fonte":
                setIsFonte(!isFonte);
            break;

            case "PlacaVideo":
                setIsPlacaVideo(!isPlacaVideo);

            default:
        }
    };

    return (
        <>
            <Container>
                <Header/>
                    <ProductsTitle>Peças de Computadores</ProductsTitle>
                    <ProductsNavigationContainer>
                        <OptionPressable
                            onPress={() => {handleToggle("Todos")}}>
                            <OptionText isSelected={isTodos}>Todos</OptionText>
                            <OptionUnderline isSelected={isTodos}></OptionUnderline>
                        </OptionPressable>
                        <OptionPressable
                            onPress={() => {handleToggle("RAM")}}>
                            <OptionText isSelected={isRAM}>Memoria RAM</OptionText>
                            <OptionUnderline isSelected={isRAM}></OptionUnderline>
                        </OptionPressable>
                        <OptionPressable
                            onPress={() => {handleToggle("Cooler")}}>
                            <OptionText isSelected={isCooler}>Cooler</OptionText>
                            <OptionUnderline isSelected={isCooler}></OptionUnderline>
                        </OptionPressable>
                        <OptionPressable
                            onPress={() => {handleToggle("Fonte")}}>
                            <OptionText isSelected={isFonte}>Fonte</OptionText>
                            <OptionUnderline isSelected={isFonte}></OptionUnderline>
                        </OptionPressable>
                        <OptionPressable
                            onPress={() => {handleToggle("PlacaVideo")}}>
                            <OptionText isSelected={isPlacaVideo}>Placa de Video</OptionText>
                            <OptionUnderline isSelected={isPlacaVideo}></OptionUnderline>
                        </OptionPressable>
                    </ProductsNavigationContainer>
                    <ProductsDisplayContainer>
                        <Product visible={isTodos || isCooler} index={2} title="COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09" location="Minas Gerais" price="R$ 25.98"/>
                        <Product visible={isTodos || isRAM} index={5} title="MEMORIA CORSAIR VENGEANCE LPX 4GB (1X4) DDR4 2400MHZ " location="São Paulo" price="R$ 149.98"/>
                        <Product visible={isTodos || isFonte} index={6} title="FONTE AEROCOOL KCAS FULL RANGE 700w" location="Rio de Janeiro" price="R$ 324.99"/>
                        <Product visible={isTodos || isPlacaVideo} index={7} title="PLACA DE VIDEO GIGABYTE GEFORCE GT 1030 2GB GDDR5" location="Minas Gerais" price="R$ 498.99"/>
                    </ProductsDisplayContainer>
            </Container>
            <Footer/>
        </>
    );
}