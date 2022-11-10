import { Text } from "react-native"

export default ({teste, children}) => {
    if(teste){      
        return children
    } else {
        return <Text>Usuário não encontrado</Text>
    }
}