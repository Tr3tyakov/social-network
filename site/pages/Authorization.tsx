import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface IError {
  emailError: boolean;
  passwordError: boolean;
}

const Authorization: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [error, setError] = React.useState<IError>({
    emailError: false,
    passwordError: false,
  });

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, emailError: false });
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, passwordError: false });
    setPassword(e.target.value);
  };

  const validationEmail = (value: string) => {
    const check = RegExp(/[@]/).test(value);
    const checkTwo = value.length < 4;
    if (!check || checkTwo) {
      return false;
    }
    return true;
  };
  const validationPassword = (value: string) => {
    const check = value.length;
    if (check < 6) {
      return false;
    }
    return true;
  };

  const login = () => {
    //запрос
  };

  const registration = () => {
    const emailValue = validationEmail(email);
    const passwordValue = validationPassword(password);
    if (!emailValue && !passwordValue) {
      return setError({ ...error, emailError: true, passwordError: true });
    }
    if (!emailValue) {
      return setError({ ...error, emailError: true });
    }
    if (!passwordValue) {
      return setError({ ...error, passwordError: true });
    }
    if (emailValue && passwordValue) {
      setError({ ...error, passwordError: false, emailError: false });
      console.log('success');
      //запрос
    }
  };
  return (
    <Container maxWidth="sm">
      <Paper>
        <Box padding="20px">
          <Box>
            <Typography>Добро Пожаловать</Typography>
          </Box>
          <Box margin="10px 0">
            <TextField
              variant="filled"
              color="primary"
              error={error.emailError}
              label="Email"
              value={email}
              onChange={changeEmail}
              helperText={error.emailError && 'Данный email не существует'}></TextField>
          </Box>
          <Box margin="10px 0">
            <TextField
              variant="filled"
              color="primary"
              error={error.passwordError}
              label="Password"
              type="password"
              value={password}
              onChange={changePassword}
              helperText={
                error.passwordError && 'Длина пароля должна быть длиннее 6 символов'
              }></TextField>
          </Box>
          <Box display="flex" justifyContent="space-between" maxWidth="300px">
            <Box>
              <Button variant="contained" onClick={login}>
                Войти
              </Button>
            </Box>
            <Box>
              <Button onClick={registration}>Зарегистрироваться</Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Authorization;
