import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';
import BackArrowIcon from '../assets/add business/arrow_back_ios_new.svg';
import AddLogoIcon from '../assets/add business/Group 1000007138.svg';
import { BusinessContext } from '../context/BusinessContext';
import { Image } from 'react-native';

const AddBusinessScreen = ({ navigation }) => {
  const { addBusiness } = useContext(BusinessContext);
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [logoUri, setLogoUri] = useState(null);

  const handlePickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 0.8 });
    if (!result.didCancel && result.assets && result.assets.length > 0) {
      setLogoUri(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!businessName.trim()) {
      alert('Please enter a business name');
      return;
    }
    const newBusiness = {
      name: businessName,
      category,
      address,
      email,
      phone,
      website,
      logoUri,
    };
    addBusiness(newBusiness);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackArrowIcon width={17} height={17} fill="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Busniess Detail</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Logo Card */}
          <View style={styles.logoCard}>
            <TouchableOpacity style={styles.logoContainer} onPress={handlePickImage}>
              <View style={styles.iconWrapper}>
                {logoUri ? (
                  <Image source={{ uri: logoUri }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                ) : (
                  <AddLogoIcon width={80} height={80} />
                )}
                {!logoUri && (
                  <View style={styles.plusOverlay}>
                    <Text style={styles.plusText}>+</Text>
                  </View>
                )}
              </View>
              <Text style={styles.addLogoText}>{logoUri ? 'Change Logo' : 'Add Logo'}</Text>
            </TouchableOpacity>
          </View>

          {/* Form Card */}
          <View style={styles.formCard}>
            {/* Business Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Busniess Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Beta Angel's"
                placeholderTextColor="#A0A0A0"
                value={businessName}
                onChangeText={setBusinessName}
              />
            </View>

            {/* Category */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Category</Text>
              <TextInput
                style={styles.input}
                placeholder="Software House"
                placeholderTextColor="#A0A0A0"
                value={category}
                onChangeText={setCategory}
              />
            </View>

            {/* Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="123 Beta Angel's, Vibery Tech, City 123"
                placeholderTextColor="#A0A0A0"
                value={address}
                onChangeText={setAddress}
              />
            </View>

            {/* Contact Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contact Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Contact@beta.angel's"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Phone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="+1 (555) 123-4567"
                placeholderTextColor="#A0A0A0"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {/* Website */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Website</Text>
              <TextInput
                style={styles.input}
                placeholder="https://beta.angel's"
                placeholderTextColor="#A0A0A0"
                keyboardType="url"
                value={website}
                onChangeText={setWebsite}
              />
            </View>
          </View>
        </ScrollView>

        {/* Fixed Bottom Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.doneButton} onPress={handleSave}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 50 : 20,
    marginBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for footer
  },
  logoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  logoContainer: {
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  plusOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  plusText: {
    color: '#027BF9',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  addLogoText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#FFFFFF',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    paddingTop: 10,
    backgroundColor: '#F3F4F6',
  },
  doneButton: {
    backgroundColor: '#027BF9',
    borderRadius: 30,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#027BF9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddBusinessScreen;
