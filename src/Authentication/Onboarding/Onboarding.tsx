import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slide from "./Slide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 0.61,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => (
  <View style={styles.container}>
    <View style={styles.slider}>
      <ScrollView>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </ScrollView>
    </View>
    <View style={styles.footer} />
  </View>
);

export default Onboarding;
