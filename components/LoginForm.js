import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Button, Input, Form, Label, Item } from 'native-base';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return(
             <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    onChangeText={(email) => this.setState({ email: email })}
                    /> 
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    onChangeText={(password) => this.setState({ password: password })}
                    /> 
                </Item>
                <Button
                    style={{marginTop: 10 }}
                    warning
                    full
                    onPress={() => this.props.onHandleLogin(this.state.email, this.state.password)}
                ><Text>Login</Text></Button>
            </Form>
        )
    }
}