import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadClients = async () => {
      try {
        const storedClients = await AsyncStorage.getItem('clients');
        if (storedClients) {
          setClients(JSON.parse(storedClients));
        }
      } catch (error) {
        console.error('Failed to load clients:', error);
      } finally {
        setLoading(false);
      }
    };
    loadClients();
  }, []);

  // Add a new client
  const addClient = async (newClient) => {
    try {
      const updatedClients = [...clients, { id: Date.now().toString(), ...newClient }];
      setClients(updatedClients);
      await AsyncStorage.setItem('clients', JSON.stringify(updatedClients));
    } catch (error) {
      console.error('Failed to add client:', error);
    }
  };

  // Update a client
  const updateClient = async (id, updatedData) => {
    try {
      const updatedClients = clients.map(c => (c.id === id ? { ...c, ...updatedData } : c));
      setClients(updatedClients);
      await AsyncStorage.setItem('clients', JSON.stringify(updatedClients));
    } catch (error) {
      console.error('Failed to update client:', error);
    }
  };

  // Delete a client
  const deleteClient = async (id) => {
    try {
      const updatedClients = clients.filter(c => c.id !== id);
      setClients(updatedClients);
      await AsyncStorage.setItem('clients', JSON.stringify(updatedClients));
    } catch (error) {
      console.error('Failed to delete client:', error);
    }
  };

  return (
    <ClientContext.Provider value={{ clients, addClient, updateClient, deleteClient, loading }}>
      {children}
    </ClientContext.Provider>
  );
};
