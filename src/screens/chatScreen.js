import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatScreen({ route, navigation }) {
  const {
    name = 'Contact',
    status = 'online',
    thumbnailPath = null,
  } = route.params || {};

  const [message, setMessage] = useState('');

  function getInitials(name) {
    return name
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View style={styles.container}>
          <StatusBar backgroundColor="#075E54" barStyle="light-content" />

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="white"
                style={{ marginTop: 30 }}
              />
            </TouchableOpacity>

            {/* Avatar */}
            {thumbnailPath ? (
              <Image
                source={{ uri: thumbnailPath }}
                style={styles.avatarImage}
              />
            ) : (
              <View style={styles.avatarFallback}>
                <Text style={styles.avatarText}>
                  {getInitials(name)}
                </Text>
              </View>
            )}

            <View style={styles.headerInfo}>
              <Text style={styles.headerName}>{name}</Text>
              <Text style={styles.headerStatus}>{status}</Text>
            </View>

            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                  name="videocam-outline"
                  size={22}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                  name="call-outline"
                  size={22}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                  name="ellipsis-vertical"
                  size={22}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Chat Body */}
          <View style={styles.chatBody} />

          {/* Input Bar */}
          <View style={styles.inputBar}>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="happy-outline"
                size={24}
                color="#777"
              />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="Message"
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
            />

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="attach"
                size={22}
                color="#777"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="camera-outline"
                size={22}
                color="#777"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.micBtn}>
              <Ionicons
                name="mic"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>

          </View>
        </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#075E54',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },

  avatarImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginTop: 30,
  },

  avatarFallback: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#25D366',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  headerInfo: {
    flex: 1,
    marginTop: 30,
  },

  headerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  headerStatus: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 30,
  },

  chatBody: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    marginBottom: 10,

    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  textInput: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 8,
    maxHeight: 100,
    color: '#000',
  },

  iconBtn: {
    padding: 6,
  },

  micBtn: {
    backgroundColor: '#1daa61',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
});