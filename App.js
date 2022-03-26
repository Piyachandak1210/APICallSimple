
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';




const createuser = () => {
  console.log('Fetch Api Call');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer 1018b656cdda24afcb3c84440c7a7e94b1f5da2eae9329379b4d04ccef4f985f' },
    body: JSON.stringify({
      email: "piya@qfnf.vom",
      name: "piu",
      gender: 'female',
      status: 'active'
    })
  };

  fetch('https://gorest.co.in/public/v1/users',requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('fetch Api response', json.data);
    })
    .catch((error) =>
      console.error(error));

}
const getUser = () => { 
  console.log('Fetch Api Call');

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer 1018b656cdda24afcb3c84440c7a7e94b1f5da2eae9329379b4d04ccef4f985f' },
   
  };

  fetch('https://gorest.co.in/public/v1/users',requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('fetch Api response', json.data);
    })
    .catch((error) =>
      console.error(error));
}
//1653
const updateuser = () => {
  console.log('Fetch Api Call');

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer 1018b656cdda24afcb3c84440c7a7e94b1f5da2eae9329379b4d04ccef4f985f' },
    body: JSON.stringify({
      email: "piya@qfnf.vom",
      name: "piu chandak",
      gender: 'female',
      status: 'inactive'
    })
  };

  fetch('https://gorest.co.in/public/v1/users/1653',requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('fetch Api response', json.data);
    })
    .catch((error) =>
      console.error(error));
 }
const deleteuser = () => {
  console.log('Fetch Api Call');

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer 1018b656cdda24afcb3c84440c7a7e94b1f5da2eae9329379b4d04ccef4f985f' },
  
  };

  fetch('https://gorest.co.in/public/v1/users/1653',requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('fetch Api response', json.Ok);
    })
    .catch((error) =>
      console.error(error));
 }

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Button
          style={styles.btn}
          title="Get Api Call"
          onPress={() => getUser()} />

        <Button
          style={styles.btn}
          title="POst Api Call"
          onPress={() => createuser()} />

        <Button
          style={styles.btn}
          title="Put Api Call"
          onPress={() => updateuser()} />

        <Button
          style={styles.btn}
          title="Delete Api Call"
          onPress={() => deleteuser()} />
      </View>

    )
  }

}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    marginTop: 50,
    padding: 10
  }
})
