import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.text;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignContent: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});
