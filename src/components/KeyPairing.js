import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ecc from 'eosjs-ecc';
import Button from './Button';

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
      <View>
        <Button
          title='Generate Key Pairing'
          onPress={this.generateKeyPairing}
         />
        { this.state.loaded ? (
            <View>
              <Text style={{ marginBottom: 12, marginTop: 12}}>
                Public Key: {this.state.publicKey}
              </Text>
              <Text>
                Private Key: {this.state.privateKey}
              </Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}
