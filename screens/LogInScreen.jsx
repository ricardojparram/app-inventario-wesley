import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput, PasswordInput, AnchorText } from '../components/FormInputs';

export default function LogInScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-theme-background">
      <StatusBar style="auto"/>
      <View>
        {/*<Image></Image>*/}
      </View>
      <View className="py-7 px-5 w-[90%]">
        <Text 
          className="text-[20px] text-theme-primar text-center font-bold mb-[20px]"
        >
          Iniciar sesión
        </Text>
        <CustomInput
          placeholder="Email"
          autoComplete="email"
          autoCapitalize="none"
        />
        <PasswordInput 
          className="mt-[10px]"
          placeholder="Contraseña"
          autoComplete="password"
        />
      </View>
      <AnchorText
        className="" 
        href={() => navigation.navigate('SignIn')}
        // additionalText="No tienes cuenta? "

      >
        ¿No tienes cuenta?
      </AnchorText>

      <AnchorText 
        href={() => navigation.navigate('Recovery')}
        // additionalText="No tienes cuenta? "
      >
        ¿Olvidaste tu contraseña?
      </AnchorText>

    </SafeAreaView>
  );
}