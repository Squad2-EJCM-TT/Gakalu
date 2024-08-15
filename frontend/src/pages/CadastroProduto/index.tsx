import {Container, ContainerImg, ImgUpload, ContainerButton} from './style'
import Header2 from '../../components/Header2'
import Button from '../../components/Button'

const CadastroProduto = () => {
    return (
        <Container>
            <Header2 titulo='Novo Produto' subtitulo=' '/>
            <ContainerImg>
                <ImgUpload source={require('../../assets/upload.svg')}/>
            </ContainerImg>
            <ContainerButton><Button content='Finalizar Cadastro' onClick={null}/></ContainerButton>
        </Container>
    )
}

export default CadastroProduto