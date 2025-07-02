import { useClerk } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { styles } from '../assets/styles/home.styles';

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  // 👉 Función normal SIN async
  const handleSignOut = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: handleConfirmedSignOut, // 👈 Llama a una función externa
        },
      ],
      { cancelable: true }
    );
  };

  // 👉 Aquí sí va el async separado
  const handleConfirmedSignOut = async () => {
    console.log("SignOut CONFIRMED!");
    await signOut();
    console.log("SignOut DONE!");
    router.replace('/(auth)/sign-in');
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  );
};
