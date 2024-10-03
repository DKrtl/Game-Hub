import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>
        {colorMode.charAt(0).toUpperCase() + colorMode.slice(1) + " Mode"}
      </Text>
    </HStack>
  );
};

export default ColourModeSwitch;
