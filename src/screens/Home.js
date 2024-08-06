import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { useEffect } from "react";
const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />

      <View style={{ flex: 1, marginLeft: 5 }}>
        <Text>Name: {`${user.name.first} ${user.name.last}`}</Text>
        <Text>Age: {user.dob.age}</Text>
        <Text>City: {user.location.city}</Text>
        <Text>Email: {user?.email}</Text>
        <Text>Country: {user.location.country}</Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "🚀 ~ file: Home.js:37 ~ .then ~ data:",
          data?.results.length
        );
        data?.results?.map((item) => {
          // console.log(item.phone);
        });
        setUsers(data?.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(user, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("UserDetails", { user: item });
            }}
          >
            <UserCard user={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    marginBottom: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    resizeMode: "contain",
    // marginBottom: 8,
  },
});

export default Home;
