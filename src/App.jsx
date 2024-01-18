import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box minH="100vh" w="100vw" backgroundColor="#406254">
        <Box w={{ lg: 1240 }} mx="auto" minH="100vh" padding={4}>
          <Flex gap={4} mb={{base: 5, lg: 0}}>
            <Image src="/src/assets/logo.svg" width={10} />
            <Text color="white" alignSelf="center" fontWeight='bold'>
              ECOBUDDi
            </Text>
          </Flex>
          <Flex gap={{base:12, lg: 8}} minH="80vh" justifyContent="center" alignItems="center" flexDir={{base: 'column', md: 'row'}}>
            <Box w={{lg: "50%"}}>
              <Flex flexDir="column" gap={4}>
                <Text color="#FF8E27" fontSize={56} fontWeight='bold'>
                  {"IT'S"} <br />
                  TIME TO
                </Text>
                <Text color="white" fontSize={28} fontWeight='bold'>
                  TURN CLUTTER INTO CASH
                </Text>
                <Text color="white" fontSize={20}>
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
                  as='a'
                  href="https://whatsapp.com/channel/0029VaKkHJv5kg75Lci8qg34"
                  target="_blank"
                >
                  Join Community
                </Button>
              </Flex>
            </Box>
            <Box position='relative' overflow={{base: "hidden", lg: "visible"}}>
              <Image src="/src/assets/Polygon 5.svg" position='absolute' left={{base: "80%",lg:'20%'}} top={{base: 20,lg:-10}}/>
              <Image src="/src/assets/Polygon 9.svg" position='absolute' top={{lg:200}} right={0} display={{base:"none", lg:"block"}}/>
              <Image src="/src/assets/hero_img.png" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
