import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Styles from "../assets/styles.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "../redux/actions/usersActions";
import ApiService from "./../APIService";

const applicationAPI = new ApiService();

const Update = (props) => {
  const [userForm, setUserForm] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
  });

  useEffect(() => {
    console.log(props["route"]["params"]["userid"]);
    const userId = props["route"]["params"]["userid"];
    applicationAPI
      .getUserById(userId)
      .then((user) => {
        setUserForm(user);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  function getFormData(key, text) {
    setUserForm((userForm) => ({
      ...userForm,
      [key]: text,
    }));
  }

  function updateUser() {
    props.updateUser(userForm);
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
            <Button title="Submit" onPress={updateUser} />
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
    user: state.user,
  };
}

const mapDispatchToProps = {
  updateUser: usersActions.updateUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);
