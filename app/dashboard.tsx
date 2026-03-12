import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dashboard() {

	const router = useRouter();

	return (

		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<View style={styles.innerContainer}>

				<Text>Dashboard</Text>				

			</View>
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
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 25,
		paddingVertical: 40,
		width: '100%',
	}

});