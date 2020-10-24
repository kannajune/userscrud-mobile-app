import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Styles from "../assets/styles.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "../redux/actions/usersActions";

const Create = (props) => {
  const [userForm, setUserForm] = React.useState({
    id: Math.random(4).toString(),
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
  });

  function getFormData(key, text) {
    setUserForm((userForm) => ({
      ...userForm,
      [key]: text,
    }));
  }

  function createUser() {
    props.saveUser(userForm);
    props.navigation.goBack();
  }

  return (
    <View style={{ padding: 30, margin: 10 }}>
      <Text style={{ fontSize: 24 }}>Create User</Text>
      <View>
        <TextInput
          style={Styles.formControl}
          onChangeText={(text) => getFormData("firstName", text)}
          value={userForm.firstName}
          name="firstName"
          placeholder="First Name!"
        />
        <TextInput
          style={Styles.formControl}
          onChangeText={(text) => getFormData("lastName", text)}
          value={userForm.lastName}
          name="lastName"
          placeholderTextColor="grey"
          placeholder="Last Name!"
        />
        <TextInput
          style={Styles.formControl}
          onChangeText={(text) => getFormData("mobile", text)}
          value={userForm.mobile}
          name="mobile"
          placeholder="Mobile"
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={Styles.textAreaControl}
          onChangeText={(text) => getFormData("address", text)}
          value={userForm.address}
          name="address"
          placeholder="Address"
        />
        <View>
          <View style={{ margin: 10 }}>
            <Button title="Submit" onPress={createUser} />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              title="Cancel"
              onPress={() => props.navigation.goBack()}
              color="#FF0000"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    users: state.user,
  };
}

const mapDispatchToProps = {
  saveUser: usersActions.saveUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
