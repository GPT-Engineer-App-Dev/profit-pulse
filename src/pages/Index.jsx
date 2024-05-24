import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Flex>
            <Link href="#" mx={2}>Home</Link>
            <Link href="#" mx={2}>World</Link>
            <Link href="#" mx={2}>Business</Link>
            <Link href="#" mx={2}>Tech</Link>
            <Link href="#" mx={2}>Culture</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Container>
      </Box>

      {/* Articles Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </GridItem>
            <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </GridItem>
            <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </GridItem>
            <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article 4</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <Flex>
              <Link href="#" mx={2}>Contact</Link>
              <Link href="#" mx={2}>Privacy</Link>
              <Link href="#" mx={2}>Terms</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;