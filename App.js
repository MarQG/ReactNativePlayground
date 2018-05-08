import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Button, Input, Form, Label, Item } from 'native-base';
import LoginForm from './components/LoginForm';
import { Font } from expo;
import DashboardPage from './pages/DashboardPage';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      fontLoaded: false
    }
  }
  componentDidMount() {
    Font.loadAsync({
      'Roboto_medium' : require('./assets/Roboto-Medium.ttf')
    })
  }

  onHandleLogin = (email, password) => {
    alert("You clicked Login with this email: " + email + " and your password was: " + password);
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  onHandleLogout = () => {
    alert("Logging you out.");
    this.setState({ isLoggedIn: false});
  }

  render() {
    return (
      <Container style={styles.container}>
        { this.state.isLoggedIn ? <DashboardPage onHandleLogout={this.onHandleLogout}/> : 
          <LoginForm onHandleLogin={this.onHandleLogin}/>
        }
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontFamily: 'Roboto_medium' 
  },
});
