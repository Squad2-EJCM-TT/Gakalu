import api from "../api"

interface RegisterData {
    nome: string;
    email: string;
    bairro: string;
    CEP: number;
    cidade: string;
    role: string;
    senha: string;
}

interface LoginData {
    nome: string;
    senha: string;
}

interface EnderecoData {
    CPF: string;
    bairro: string;
    cidade: string;
    CEP: number;
}

export default {
    async Register (data: RegisterData) {
        try{
            api.post('/usuario', data)
        }
        catch(erro){
            console.log(erro)
        }
    },

    async Login(data: LoginData) {
        try{
            const resposta = api.post('/login', data)
            return resposta 
        }
        catch(erro){
            console.log(erro)
        }
    },

    async Products(){
        try{
            const resposta = api.get('/produto')
            return resposta 
        }
        catch(erro){
            console.log(erro)
        }
    },

    async GetProductByID(id: number){
        try{
            const resposta = api.get(`/produto/${id}`)
            return resposta 
        }
        catch(erro){
            console.log(erro)
        }
    }
}