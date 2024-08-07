import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, OptionPressable, OptionText, OptionUnderline, ProductsDisplayContainer, ProductsNavigationContainer, ProductsTitle } from "./style";
import Product from "../../components/Product";

export default function Products() {
    const [isTodos, setIsTodos] = useState(true);
    const [isRAM, setIsRAM] = useState(false);
    const [isCooler, setIsCooler] = useState(false);
    const [isFonte, setIsFonte] = useState(false);
    const [isPlacaVideo, setIsPlacaVideo] = useState(false);

    const products = [
        { index: 2, option: "Cooler", title: "COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09", location: "Minas Gerais", price: "R$ 25.98" },
        { index: 5, option: "RAM", title: "MEMORIA CORSAIR VENGEANCE LPX 4GB (1X4) DDR4 2400MHZ ", location: "São Paulo", price: "R$ 149.98" },
        { index: 6, option: "Fonte", title: "FONTE AEROCOOL KCAS FULL RANGE 700w", location: "Rio de Janeiro", price: "R$ 324.99" },
        { index: 7, option: "PlacaVideo", title: "PLACA DE VIDEO GIGABYTE GEFORCE GT 1030 2GB GDDR5", location: "Minas Gerais", price: "R$ 498.99" },
    ];

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
            break;

            default:
        }
    };

    const isVisible = (option: string) => {
        if (isTodos) return true;

        switch(option){
            case "RAM":
                return isRAM;  

            case "Cooler":
                return isCooler;

            case "Fonte":
                return isFonte;

            case "PlacaVideo":
                return isPlacaVideo;

            default:
                return false;
        }
    }

    return (
        <>
            <Container>
                <Header />
                <ProductsTitle>Peças de Computadores</ProductsTitle>
                <ProductsNavigationContainer>
                    <OptionPressable onPress={() => handleToggle("Todos")}>
                        <OptionText isSelected={isTodos}>Todos</OptionText>
                        <OptionUnderline isSelected={isTodos} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("RAM")}>
                        <OptionText isSelected={isRAM}>Memoria RAM</OptionText>
                        <OptionUnderline isSelected={isRAM} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("Cooler")}>
                        <OptionText isSelected={isCooler}>Cooler</OptionText>
                        <OptionUnderline isSelected={isCooler} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("Fonte")}>
                        <OptionText isSelected={isFonte}>Fonte</OptionText>
                        <OptionUnderline isSelected={isFonte} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("PlacaVideo")}>
                        <OptionText isSelected={isPlacaVideo}>Placa de Video</OptionText>
                        <OptionUnderline isSelected={isPlacaVideo} />
                    </OptionPressable>
                </ProductsNavigationContainer>
                <ProductsDisplayContainer>
                    {products.map((product) => (
                        <Product 
                            visible={isVisible(product.option)}
                            index={product.index}
                            title={product.title}
                            location={product.location}
                            price={product.price}
                        />
                    ))}
                </ProductsDisplayContainer>
            </Container>
            <Footer />
        </>
    );
}
