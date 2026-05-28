import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  StyleSheet,
} from "react-native";

import Contacts from "react-native-contacts";

import Ionicons from "react-native-vector-icons/Ionicons";

const ContactsScreen = ({ navigation }) => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {

    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );

    console.log(permission);

    if (permission === PermissionsAndroid.RESULTS.GRANTED) {

      const contactList = await Contacts.getAll();

      console.log(contactList);

      setContacts(contactList);
    }
  };

  return (

    <View style={styles.container}>

      {/* FIXED HEADER */}

      <View style={styles.header}>

        {/* BACK BUTTON */}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {/* TITLE */}

        <View style={styles.headerTextContainer}>

          <Text style={styles.headerTitle}>
            Select Contact
          </Text>

          <Text style={styles.contactCount}>
            {contacts.length} contacts
          </Text>

        </View>

        {/* SEARCH ICON */}

        <TouchableOpacity style={styles.iconButton}>
           <Ionicons name="search" size={22} color="black" />
        </TouchableOpacity>

        {/* MENU ICON */}

        <TouchableOpacity>
           <Ionicons name="ellipsis-vertical"  size={22}  color="black" />
        </TouchableOpacity>

      </View>

      {/* SCROLLABLE CONTENT */}

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}

        ListHeaderComponent={
          <>

            {/* NEW GROUP */}

            <TouchableOpacity style={styles.optionContainer}>

              <View style={styles.iconCircle}>

                <Image
                  source={require("../assets/images/icons/newgroup.webp")}
                  style={styles.optionImage}
                />

              </View>

              <Text style={styles.optionText}>
                New Group
              </Text>

            </TouchableOpacity>

            {/* NEW CONTACT */}

            <TouchableOpacity style={styles.optionContainer}>

              <View style={styles.iconCircle}>

                <Image
                  source={require("../assets/images/icons/newcontact.webp")}
                  style={styles.optionImage}
                />

              </View>

              <Text style={styles.optionText}>
                New Contact
              </Text>

            </TouchableOpacity>

            {/* NEW COMMUNITY */}

            <TouchableOpacity style={styles.optionContainer}>

              <View style={styles.iconCircle}>

                <Image
                  source={require("../assets/images/icons/communities.webp")}
                  style={styles.optionImage}
                />

              </View> 

              <Text style={styles.optionText}>
                New Community
              </Text>

            </TouchableOpacity>

          </>
        }

        renderItem={({ item }) => (
          
<TouchableOpacity
  style={styles.contactItem}
  onPress={() =>
  navigation.navigate("chat", {
  name: item.displayName,
  thumbnailPath: item.thumbnailPath,
})
  }
>

            {/* PROFILE */}

           
            <View style={styles.profileCircle}>
            {/* // CHANGE HERE */}


  {item.thumbnailPath ? (
    
    <Image
      source={{ uri: item.thumbnailPath }}   
      style={styles.profileImage}
    />

  ) : (

    <View style={styles.profileCircleFallback}>
      <Text style={styles.profileLetter}>
        {item.givenName?.charAt(0) || "?"}
      </Text>
    </View>

  )} 

</View>

            {/* NAME */}

            <View style={styles.contactInfo}>

              <Text style={styles.contactName}>
                {item.displayName}
              </Text>

              <Text style={styles.contactStatus}>
                Hey there! I am using chat app
              </Text>

            </View>

          </TouchableOpacity>

        
        )}
      />
      
      
      

    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 45,
    paddingBottom: 15,
    backgroundColor: "white",
  },

  headerTextContainer: {
    marginLeft: 15,
    flex: 1,
  },

  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  contactCount: {
    color: "gray",
    marginTop: 2,
  },

  iconButton: {
    marginRight: 20,
  },

  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: "#1daa61",
    justifyContent: "center",
    alignItems: "center",
  },

  optionImage: {
    width: 22,
    height: 22,
    tintColor: "white",
    resizeMode: "contain",
   
  },

  optionText: {
    color: "black",
    marginLeft: 15,
    fontSize: 17,
    fontWeight: "500",
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },

  profileLetter: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  // ADD HERE
profileImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},

profileCircleFallback: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: "grey",
  justifyContent: "center",
  alignItems: "center",
},

  contactInfo: {
    marginLeft: 15,
  },

  contactName: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
  },

  contactStatus: {
    color: "gray",
    marginTop: 2,
  },

});