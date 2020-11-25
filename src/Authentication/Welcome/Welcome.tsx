import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

import theme, { Box, Text } from "../../components/Theme";
import { Button } from "../../components";
const { width, height } = Dimensions.get("window");

interface WelcomeProps {}

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius={theme.borderRadius.xl}
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadius.xl,
            height:
              ((width - theme.borderRadius.xl) * picture.height) /
              picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius={theme.borderRadius.xl}>
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius={theme.borderRadius.xl}
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2" textAlign="center">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" />
          <Button variant="default" label="Join us, it's free" />
          <Button variant="transparent" label="Forgot password?" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
