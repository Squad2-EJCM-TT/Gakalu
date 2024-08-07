import { Link } from "react-router-dom";
import { Container, Icon, Rectangle, Title } from "./style";

const iconMap: { [key: number]: any } = {
    1: require("../../assets/icons/jogosEletronicos.png"),
    2: require("../../assets/icons/pecasComputadores.png"),
    3: require("../../assets/icons/acessoriosNovos.png"),
    4: require("../../assets/icons/acessoriosSemiNovos.png"),
};

export default function Category({ index, link, title }: {index: number, link?: string, title: string}) {
    const iconSource = iconMap[index];

    return (
        <Container>
            {link ? (
                <Link to={link}>
                    <Rectangle>
                        <Icon index={index} source={iconSource} />
                    </Rectangle>
                </Link>
            ) : (
                <Rectangle>
                    <Icon index={index} source={iconSource} />
                </Rectangle>
            )}
            <Title>{title}</Title>
        </Container>
    );
}
