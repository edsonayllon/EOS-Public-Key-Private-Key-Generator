import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ecc from 'eosjs-ecc';
import { Keystore, Keygen } from 'eosjs-keygen';
import Button from './Button';

export default class App extends React.Component {
  state = {
    owner: '',
    active: '',
    loaded: false
  }

  generateKeyPairing = async () => {
    var keys = await Keygen.generateMasterKeys();
    console.log(keys)
    this.setState({
      loaded: true,
      owner: {
        private: keys.privateKeys.owner,
        public: keys.publicKeys.owner
      },
      active: {
        private: keys.privateKeys.active,
        public: keys.publicKeys.active
      }
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
              <Text style={{ marginTop: 12, fontWeight: '600'}}>
                Owner Keys
              </Text>
              <Text style={{ marginTop: 12}}>
                Public Key: {this.state.owner.public}
              </Text>
              <Text style={{ marginTop: 12}}>
                Private Key: {this.state.owner.private}
              </Text>
              <Text style={{ marginTop: 12, fontWeight: '600'}}>
                Active Keys
              </Text>
              <Text style={{ marginTop: 12}}>
                Public Key: {this.state.active.public}
              </Text>
              <Text style={{ marginTop: 12}}>
                Private Key: {this.state.active.private}
              </Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}
