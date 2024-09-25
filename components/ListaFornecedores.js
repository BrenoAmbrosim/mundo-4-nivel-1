import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ListaFornecedores = ({ fornecedores, onApagar }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={fornecedores}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.imagem }} style={styles.imagem} />
                        <View style={styles.info}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text>Endereço: {item.endereco}</Text>
                            <Text>Contato: {item.contato}</Text>
                            <Text>Categoria: {item.categoria}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonApagar} onPress={() => onApagar(item.nome)}>
                            <Text style={styles.buttonText}>Apagar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    imagem: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    info: {
        flex: 1,
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonApagar: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
});

export default ListaFornecedores;
