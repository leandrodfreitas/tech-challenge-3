import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleSignup = () => {
		if (!name || !email || !password) {
			Alert.alert("Erro", "Por favor, preencha todos os campos.");
			return;
		}
		Alert.alert("Sucesso", "Conta criada com sucesso!");
		router.back();
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.innerContainer}>

					<View style={{ alignItems: 'center', marginBottom: 30 }}	>
						<Image
							source={require('@/assets/images/logo.png')}
							style={styles.logoImage}
						/>
					</View>

					<Text style={styles.title}>Cadastrar Conta</Text>

					<TextInput
						style={styles.input}
						placeholder="Nome Completo"
						value={name}
						onChangeText={setName}
					/>

					<TextInput
						style={styles.input}
						placeholder="E-mail"
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={setEmail}
					/>

					<TextInput
						style={styles.input}
						placeholder="Senha"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>

					<TouchableOpacity
						style={[styles.button, { backgroundColor: '#28a745' }]}
						onPress={handleSignup}
					>
						<Text style={styles.buttonText}>Cadastrar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.link} onPress={() => router.back()}>
						<Text style={styles.linkText}>
							Já tem uma conta? <Text style={styles.bold}>Faça Login</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},

	scrollContent: {
		flexGrow: 1,
		justifyContent: 'center',
	},

	innerContainer: {
		paddingHorizontal: 25,
		paddingVertical: 40,
		width: '100%',
	},

	logoImage: {
		width: 250,
		resizeMode: 'contain'
	},

	title: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 30,
		color: '#246419',
		textAlign: 'center'
	},

	input: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: '#ddd',
		fontSize: 16,
		width: '100%',
	},

	button: {
		padding: 18,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 10,
		width: '100%',
	},

	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold'
	},

	link: {
		marginTop: 20,
		alignItems: 'center'
	},

	linkText: {
		color: '#666',
		fontSize: 14
	},

	bold: {
		color: '#28a745',
		fontWeight: 'bold'
	}

});