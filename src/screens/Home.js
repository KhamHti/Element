import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button,Text} from '@rneui/base';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Stack row align="center" spacing={4}> */}
      <View style={styles.secContainer}>
        {/* <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button> */}
        <Text h1 style={{color: 'green'}} >asdf h1</Text>

        <Text h2 style={{color: 'green'}} >asdf h2</Text>
        <Text h3 style={{color: 'green'}} >asdf h3</Text>
        <Text h4 style={{color: 'green'}} >asdf h4</Text>

        <Text h5 style={{color: 'green', fontSize: 16}} >asdf h5</Text>
        <Text h6 style={{color: 'green', fontSize: 10}} >asdf h6</Text>
        <Text h7 style={{color: 'green', fontSize: 4}} >asdf h7</Text>
        <Text style={{color: 'green'}} >asdf blah</Text>
        <Text h8 style={{color: 'green', fontSize: 24}} >asdf h8</Text>
      </View>
      {/* </Stack> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secContainer: {padding: 5, margin: 5, borderColor: 'red'},
});
