import { Button, StyleSheet, Text, Touchable, View } from 'react-native';
import ForgotPasswordPage from './src/components/forgotPasswordPage/forgotPasswordPage';
import ForgotPasswordMember from './src/components/general/login/forgotPasswordButton/ForgotPasswordMember';
import LabelContainer from './src/components/general/login/labelContainer/LabelContainer';
import LoginButton from './src/components/general/login/loginButton/LoginButton';
import RegisterPage from './src/components/register/registerpage';
import ResetPasswordPage from './src/components/resetPassword/ResetPasswordPage';


export default function App(): JSX.Element {

  return <ForgotPasswordPage/>;
}

const styles = StyleSheet.create({
 
});
