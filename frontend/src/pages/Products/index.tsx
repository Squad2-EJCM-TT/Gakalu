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
                setIsRAM(false);
                setIsCooler(false);
                setIsFonte(false);
                setIsPlacaVideo(false);
            break;

            case "RAM":
                setIsTodos(false);
                setIsRAM(!isRAM);
                setIsCooler(false);
                setIsFonte(false);
                setIsPlacaVideo(false);
            break;

            case "Cooler":
                setIsTodos(false);
                setIsRAM(false);
                setIsCooler(!isCooler);
                setIsFonte(false);
                setIsPlacaVideo(false);
            break;

            case "Fonte":
                setIsTodos(false);
                setIsRAM(false);
                setIsCooler(false);
                setIsFonte(!isFonte);
                setIsPlacaVideo(false);
            break;

            case "PlacaVideo":
                setIsTodos(false);
                setIsRAM(false);
                setIsCooler(false);
                setIsFonte(false);
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
                        <OptionText isSelected={isTodos && !isRAM && !isCooler && !isFonte && !isPlacaVideo}>Todos</OptionText>
                        <OptionUnderline isSelected={isTodos && !isRAM && !isCooler && !isFonte && !isPlacaVideo} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("RAM")}>
                        <OptionText isSelected={!isTodos && isRAM && !isCooler && !isFonte && !isPlacaVideo}>Memoria RAM</OptionText>
                        <OptionUnderline isSelected={!isTodos && isRAM && !isCooler && !isFonte && !isPlacaVideo} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("Cooler")}>
                        <OptionText isSelected={!isTodos && !isRAM && isCooler && !isFonte && !isPlacaVideo}>Cooler</OptionText>
                        <OptionUnderline isSelected={!isTodos && !isRAM && isCooler && !isFonte && !isPlacaVideo} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("Fonte")}>
                        <OptionText isSelected={!isTodos && !isRAM && !isCooler && isFonte && !isPlacaVideo}>Fonte</OptionText>
                        <OptionUnderline isSelected={!isTodos && !isRAM && !isCooler && isFonte && !isPlacaVideo} />
                    </OptionPressable>
                    <OptionPressable onPress={() => handleToggle("PlacaVideo")}>
                        <OptionText isSelected={!isTodos && !isRAM && !isCooler && !isFonte && isPlacaVideo}>Placa de Video</OptionText>
                        <OptionUnderline isSelected={!isTodos && !isRAM && !isCooler && !isFonte && isPlacaVideo} />
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
