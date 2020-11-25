import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label: string;
  onPress: () => void;
}

const getBackgroundColor = (variant: string, theme: Theme) => {
  switch (variant) {
    case "primary":
      return theme.colors.primary;
    case "default":
      return theme.colors.grey;
    case "transparent":
      return theme.colors.transparent;
  }
};

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor = getBackgroundColor(variant, theme);
  const color = variant === "primary" ? theme.colors.white : theme.colors.button;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
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
