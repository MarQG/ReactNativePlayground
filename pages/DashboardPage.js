import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Button, Text, Icon } from 'native-base'; 


export default class DashboardPage extends React.Component {
    
    render(){
        return(
            <Container>
                <Header>
                    <Text>Welcome to Eat Neat Your Feed FiX</Text>
                </Header>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button
                        onPress={() => this.props.onHandleLogout()}
                        >
                            <Icon name="sign-out" type="FontAwesome" />
                            <Text>Logout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}