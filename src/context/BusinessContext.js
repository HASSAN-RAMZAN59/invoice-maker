import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        const storedBusinesses = await AsyncStorage.getItem('businesses');
        if (storedBusinesses) {
          setBusinesses(JSON.parse(storedBusinesses));
        }
      } catch (error) {
        console.error('Failed to load businesses:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBusinesses();
  }, []);

  // Add a new business
  const addBusiness = async (newBusiness) => {
    try {
      const updatedBusinesses = [...businesses, { id: Date.now().toString(), ...newBusiness }];
      setBusinesses(updatedBusinesses);
      await AsyncStorage.setItem('businesses', JSON.stringify(updatedBusinesses));
    } catch (error) {
      console.error('Failed to add business:', error);
    }
  };

  // Update a business
  const updateBusiness = async (id, updatedData) => {
    try {
      const updatedBusinesses = businesses.map(b => (b.id === id ? { ...b, ...updatedData } : b));
      setBusinesses(updatedBusinesses);
      await AsyncStorage.setItem('businesses', JSON.stringify(updatedBusinesses));
    } catch (error) {
      console.error('Failed to update business:', error);
    }
  };

  // Delete a business
  const deleteBusiness = async (id) => {
    try {
      const updatedBusinesses = businesses.filter(b => b.id !== id);
      setBusinesses(updatedBusinesses);
      await AsyncStorage.setItem('businesses', JSON.stringify(updatedBusinesses));
    } catch (error) {
      console.error('Failed to delete business:', error);
    }
  };

  return (
    <BusinessContext.Provider value={{ businesses, addBusiness, updateBusiness, deleteBusiness, loading }}>
      {children}
    </BusinessContext.Provider>
  );
};
