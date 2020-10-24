import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Button,
  TouchableHighlight,
} from "react-native";
import Styles from "../assets/styles.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "../redux/actions/usersActions";

const Home = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, []);

  function removeUser(item) {
    props.deleteUser(item);
  }

  const Item = ({ item }) => {
    return (
      <View style={Styles.item}>
        <View>
          <Text style={Styles.content}>First Name: {item.firstName}</Text>
          <Text style={Styles.content}>Last Name: {item.lastName}</Text>
          <Text style={Styles.content}>Mobile: {item.mobile}</Text>
          <Text style={Styles.content}>Address: {item.address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
            width: "100%",
            padding: 5,
          }}
        >
          <Button
            title="Edit"
            onPress={() =>
              props.navigation.navigate("Update", { userid: item.id })
            }
          />
          <Button
            title="Delete"
            onPress={() => removeUser(item)}
            color="#FF0000"
          ></Button>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={props.users && props.users.length > 0 ? props.users : ""}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ""}
      />
    </SafeAreaView>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadUsers: usersActions.loadUsers,
  deleteUser: usersActions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
