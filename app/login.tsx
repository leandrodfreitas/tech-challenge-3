import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = () => {
		// Lógica de autenticação (ex: Firebase ou API)
		console.log("Logando com:", email);
		router.replace('/(tabs)'); // Redireciona para a home após login
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<View style={styles.innerContainer}>

				<View style={{ alignItems: 'center', marginBottom: 30 }}	>
					<Image
						source={require('@/assets/images/logo.png')}
						style={styles.logoImage}
					/>
				</View>

				<Text style={styles.title}>Bem-vindo de volta :)</Text>

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

				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>

				<Link href="/signup" asChild>
					<TouchableOpacity style={styles.link}>
						<Text style={styles.linkText}>Não tem uma conta? <Text style={styles.bold}>Cadastre-se</Text></Text>
					</TouchableOpacity>
				</Link>
			</View>
		</KeyboardAvoidingView>
	);
}

// Estilos compartilhados 
const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},

	innerContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 25
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
		fontSize: 16
	},

	button: {
		backgroundColor: '#28a745',
		padding: 18,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 10
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