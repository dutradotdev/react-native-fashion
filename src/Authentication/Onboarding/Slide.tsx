import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({});
