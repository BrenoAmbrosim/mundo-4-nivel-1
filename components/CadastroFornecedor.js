import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CadastroFornecedor = ({ onCadastrar, navigation }) => {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState(null);

    const escolherImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    };

    const cadastrarFornecedor = () => {
        if (nome && endereco && contato && categoria && imagem) {
            onCadastrar({ nome, endereco, contato, categoria, imagem });
            setNome('');
            setEndereco('');
            setContato('');
            setCategoria('');
            setImagem(null);
            Alert.alert('Sucesso', 'Fornecedor cadastrado com sucesso!');
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
            <TextInput style={styles.input} placeholder="Contato" value={contato} onChangeText={setContato} />
            <TextInput style={styles.input} placeholder="Categoria/Produto" value={categoria} onChangeText={setCategoria} />

            <TouchableOpacity style={styles.button} onPress={escolherImagem}>
                <Text style={styles.buttonText}>ESCOLHER IMAGEM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={cadastrarFornecedor}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista')}>
                <Text style={styles.buttonText}>VER FORNECEDORES</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#0000ff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CadastroFornecedor;
