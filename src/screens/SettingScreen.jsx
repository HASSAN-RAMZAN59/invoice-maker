import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';

import PersonPinIcon from '../assets/setting/person_pin.svg';
import DeleteIcon from '../assets/setting/delete.svg';
import GlobeIcon from '../assets/setting/globe_asia.svg';
import MoneyIcon from '../assets/setting/attach_money.svg';
import SecurityIcon from '../assets/setting/security.svg';
import ShareIcon from '../assets/setting/share.svg';
import StarIcon from '../assets/setting/family_star.svg';
import ChevronRight from '../assets/setting/arrow_back_ios_new.svg';
import ClearAllIcon from '../assets/main/clear_all.svg';

const SettingScreen = () => {
  const [saveContact, setSaveContact] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <ClearAllIcon width={24} height={24} fill="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Setting</Text>
          <View style={{ width: 24 }} />        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <PersonPinIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Save Customer Contact</Text>
              </View>
              <Switch
                trackColor={{ false: '#767577', true: '#027BF9' }}
                thumbColor={'#ffffff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setSaveContact}
                value={saveContact}
              />
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <PersonPinIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Auto Save</Text>
              </View>
              <Switch
                trackColor={{ false: '#767577', true: '#027BF9' }}
                thumbColor={'#ffffff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setAutoSave}
                value={autoSave}
              />
            </View>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <DeleteIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Recycle Bin</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <GlobeIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Language</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <MoneyIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Currency</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <SecurityIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Privacy Policy</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <ShareIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Share with Friends</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.row}>
              <View style={styles.rowLeft}>
                <StarIcon width={20} height={20} fill="#027BF9" />
                <Text style={styles.rowText}>Rate Us</Text>
              </View>
              <ChevronRight width={16} height={16} fill="#6A6A74" />
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 15,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 0,
  },
});

export default SettingScreen;
