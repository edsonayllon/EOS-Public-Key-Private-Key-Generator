import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ecc from 'eosjs-ecc';
import Button from './components/Button';

export default class App extends React.Component {

  state = {
    publicKey: '',
    privateKey: '',
    loaded: false
  }

  generateKeyPairing = async () => {
    var privkey = await ecc.randomKey();
    var pubkey = await ecc.privateToPublic(privkey);
    this.setState({
      loaded: true,
      publicKey: pubkey,
      privateKey: privkey
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 20, padding: 20}}>EOS Pulic Key Private Key Generation</Text>
        <Button
          title='Generate Key Pairing'
          onPress={this.generateKeyPairing}
         />
        { this.state.loaded ? (
            <View>
              <Text style={{ marginBottom: 12, marginTop: 12}}>Public Key: {this.state.publicKey}</Text>
              <Text>Private Key: {this.state.privateKey}</Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
