import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const filters = ["All", "Unread", "Favorites", "Groups", "office","Teams"];


  const EmptyScreen = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
           <View style={styles.rupeeCircle}>
            <MaterialCommunityIcons name="currency-inr" size={16} color="#1c1e1d" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="camera-outline" size={24} color="#1c1e1d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="ellipsis-vertical" size={20} color="#1c1e1d" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
      <View style={styles.searchIconCircle}>
        <Ionicons name="search-outline" size={20} color="black"  />
        </View>
        <TextInput
          placeholder="Ask Meta AI or Search"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      </View>

      {/* Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={{ paddingHorizontal: 15, gap: 8 }}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setActiveFilter(filter)}
            style={[
              styles.filterChip,
              activeFilter === filter && styles.filterChipActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}     
        <TouchableOpacity style={styles.filterChip}>
  <Ionicons name="add" size={18} color="#555" />
</TouchableOpacity>
      </ScrollView>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Text style={styles.title}>No Chats Yet</Text>
        <Text style={styles.subtitle}>Start chatting with your friends</Text>
      </View>

      {/* Floating Action Button */}
     
<TouchableOpacity
  style={styles.plusButton}
  activeOpacity={0.2}
  onPress={() => navigation.navigate("Contacts")}
>
  <MaterialCommunityIcons
    name="message-plus"
    size={26}
    color="white"
  />
</TouchableOpacity>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color:"#1daa61",
    
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center", 
  },
  iconBtn: {
    marginLeft: 18,
  },
  rupeeCircle: {
  width: 22,
  height: 22,
  borderRadius: 12,      
  borderWidth: 2,
  borderColor: "#1c1e1d",    
  justifyContent: "center",
  alignItems: "center",
},

  // Search Bar
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f5f4",
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "black",
    padding: 0,
    marginTop:5,
    marginBottom:5,
  },

  // Filter Chips
  filterContainer: {
    flexGrow: 0,
    marginBottom: 5,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  filterChipActive: {
    backgroundColor: "#d9f5e5",
  },
  filterText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#15603e",
    fontWeight: "700",
  },

  // Empty State
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    marginTop: 10,
    color: "gray",
    fontSize: 16,
  },

  // FAB
  plusButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: "#1daa61",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});