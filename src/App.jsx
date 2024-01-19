import { Box, Image, Text, Flex, Button, Heading } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Box minH="100vh" backgroundColor="#406254" overflowX="hidden">
        <Box position='relative'>
          <Image
            src="assets/Polygon 9.svg"
            position="absolute"
            top={144}
            left={-56}
            opacity={0.7}
            // display={{ base: "none", lg: "block" }}
          />
        </Box>
        <Box w={{ lg: 1240 }} mx="auto" minH="100vh" padding={4}>
          <Flex gap={4} mb={{ base: 5, lg: 0 }}>
            <Image src="/assets/logo.svg" width={10} />
            <Text
              color="white"
              alignSelf="center"
              fontWeight="bold"
              fontSize={24}
            >
              ECOBUDDi
            </Text>
          </Flex>
          <Flex
            gap={{ base: 12, lg: 8 }}
            minH="80vh"
            // overflow='hidden'
            justifyContent="center"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box w={{ lg: "55%" }}>
              <Flex flexDir="column" gap={4}>
                <Heading
                  color="#FF8E27"
                  fontSize={72}
                  fontWeight={700}
                  letterSpacing={{ base: 8, lg: 12 }}
                >
                  {"IT'S"} <br />
                  TIME TO
                </Heading>
                <Heading
                  color="white"
                  fontSize={28}
                  fontWeight="bold"
                  letterSpacing={8}
                >
                  TURN CLUTTER INTO CASH
                </Heading>
                <Text color="white" fontSize={16} letterSpacing={1}>
                  Ecobuddi helps you earn money by selling your used and
                  unwanted goods or partner with us and donate to our platform.
                </Text>
                <Text color="#EFB343" fontSize={16}>
                  51 people currently signed up
                </Text>
                <Button
                  bgColor="#F94D1C"
                  color="white"
                  w="fit-content"
                  _hover={{ bgColor: "#F94D1C" }}
                  as="a"
                  href="https://whatsapp.com/channel/0029VaKkHJv5kg75Lci8qg34"
                  target="_blank"
                  leftIcon={<FaWhatsapp />}
                  size="lg"
                >
                  Join Community
                </Button>
              </Flex>
            </Box>
            <Box
              position="relative"
              // overflow={{ base: "hidden", lg: "visible" }}
              // order={-1}
            >
              <Image
                src="assets/Polygon 5.svg"
                position="absolute"
                left={{ base: "85%", lg: "20%" }}
                top={{ base: "-25%", lg: -10 }}
              />
              <Image
                src="assets/Polygon 9.svg"
                position="absolute"
                top={{ lg: 144 }}
                right={-144}
                display={{ base: "none", lg: "block" }}
              />
              <Image src="assets/hero_img.png" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
