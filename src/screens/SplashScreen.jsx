import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import InvoiceIcon from '../assets/splash/Group 1000007156.svg';

const { width, height } = Dimensions.get('window');

const Sparkle = ({ size = 20, opacity = 1, top, left, right, bottom }) => {
  return (
    <View style={[styles.sparkle, { top, left, right, bottom, opacity }]}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        <Path
          fill="#ffffff"
          d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z"
        />
      </Svg>
    </View>
  );
};

const Dot = ({ size = 4, opacity = 1, top, left, right, bottom }) => (
  <View
    style={[
      styles.sparkle,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#ffffff',
        top,
        left,
        right,
        bottom,
        opacity,
      },
    ]}
  />
);

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Decor */}
      <Sparkle size={30} top={height * 0.05} left={width * 0.15} opacity={0.6} />
      <Sparkle size={25} top={height * 0.12} right={width * 0.1} opacity={0.7} />
      <Sparkle size={15} top={height * 0.15} left={width * 0.35} opacity={0.5} />
      <Sparkle size={25} bottom={height * 0.4} right={width * 0.1} opacity={0.4} />
      <Sparkle size={18} bottom={height * 0.6} left={width * 0.08} opacity={0.6} />
      
      <Dot size={4} top={height * 0.08} left={width * 0.5} opacity={0.5} />
      <Dot size={5} top={height * 0.25} right={width * 0.25} opacity={0.4} />
      <Dot size={4} bottom={height * 0.45} right={width * 0.05} opacity={0.6} />
      <Dot size={3} top={height * 0.35} left={width * 0.12} opacity={0.5} />

      {/* Main Content */}
      <View style={styles.iconContainer}>
        <InvoiceIcon width={287} height={279} />
      </View>

      <Text style={styles.title}>Invoice Maker</Text>
      <Text style={styles.subtitle}>Make your business Invoice instantly</Text>

      <ActivityIndicator style={styles.loader} size="large" color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#027BF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkle: {
    position: 'absolute',
  },
  iconContainer: {
    marginBottom: 40,
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 40,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
