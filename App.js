import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroFornecedor from './components/CadastroFornecedor';
import ListaFornecedores from './components/ListaFornecedores';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fornecedores, setFornecedores] = useState([]);

  const cadastrarFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  const apagarFornecedor = (nome) => {
    setFornecedores(fornecedores.filter(fornecedor => fornecedor.nome !== nome));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" options={{ title: 'Cadastro de Fornecedores' }}>
          {props => <CadastroFornecedor {...props} onCadastrar={cadastrarFornecedor} />}
        </Stack.Screen>
        <Stack.Screen name="Lista" options={{ title: 'Lista de Fornecedores' }}>
          {props => <ListaFornecedores {...props} fornecedores={fornecedores} onApagar={apagarFornecedor} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

