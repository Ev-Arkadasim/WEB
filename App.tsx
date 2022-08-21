import { Button, StyleSheet, Text, Touchable, View } from 'react-native';
import ForgotPasswordPage from './src/pages/forgotPasswordPage/forgotPasswordPage';
import ForgotPasswordMember from './src/components/general/login/forgotPasswordButton/ForgotPasswordMember';
import LabelContainer from './src/components/general/login/labelContainer/LabelContainer';
import LoginButton from './src/components/general/login/loginButton/LoginButton';
import RegisterPage from './src/pages/registerPage/registerpage';
import ResetPasswordPage from './src/pages/resetPasswordPage/ResetPasswordPage';


export default function App(): JSX.Element {
  return <ResetPasswordPage/>;
}

const styles = StyleSheet.create({
 
});
