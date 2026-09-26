import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  Image,
} from 'react-native';
import ClearAllIcon from '../assets/main/clear_all.svg';
import SearchIcon from '../assets/main/search.svg';
import Vector1Icon from '../assets/main/Vector 1.svg';
import { ClientContext } from '../context/ClientContext';

const ClientScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { clients } = React.useContext(ClientContext);

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderClientCard = ({ item }) => (
    <TouchableOpacity style={styles.clientCard}>
      {item.imageUri ? (
        <Image source={{ uri: item.imageUri }} style={styles.clientImage} />
      ) : (
        <View style={styles.clientImagePlaceholder}>
          <Text style={styles.clientImageText}>{item.name.charAt(0).toUpperCase()}</Text>
        </View>
      )}
      <View style={styles.clientInfo}>
        <Text style={styles.clientName}>{item.name}</Text>
        {item.phone ? <Text style={styles.clientPhone}>{item.phone}</Text> : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <ClearAllIcon width={24} height={24} fill="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Clients</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.searchContainer}>
          <SearchIcon width={20} height={20} fill="#B0B0B0" />
          <Vector1Icon width={2} height={20} style={styles.searchDivider} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tap to search your clients"
            placeholderTextColor="#B0B0B0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {filteredClients.length > 0 ? (
          <FlatList
            data={filteredClients}
            keyExtractor={(item) => item.id}
            renderItem={renderClientCard}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.centerContent}>
            <Text style={styles.emptyText}>No Client's Created Yet !</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => navigation.navigate('AddClient')}
        >
          <Text style={styles.createButtonText}>Add Client</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Light grey matching screenshot
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 50 : 20,
    marginBottom: 20,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchDivider: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, // To make space for floating button
  },
  emptyText: {
    color: '#B0B0B0',
    fontSize: 15,
    marginTop: 20,
  },
  createButton: {
    backgroundColor: '#027BF9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 56,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    shadowColor: '#027BF9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 100,
  },
  clientCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  clientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  clientImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#027BF9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  clientImageText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  clientPhone: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
});

export default ClientScreen;
