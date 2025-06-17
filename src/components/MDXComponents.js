import { Heading, Text, Link, List, Code, Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react"

const MDXComponents = {
  h1: (props) => <Heading as="h1" fontSize="2xl" mt={6} mb={4} {...props} />,
  h2: (props) => <Heading as="h2" fontSize="xl" mt={6} mb={3} {...props} />,
  h3: (props) => <Heading as="h3" fontSize="lg" mt={5} mb={2} {...props} />,
  h4: (props) => <Heading as="h4" fontSize="md" mt={4} mb={2} {...props} />,
  p: (props) => <Text fontSize="md" mt={2} mb={3} {...props} />,
  a: (props) => <Link color="blue.500" {...props} />,
  ul: (props) => <List.Root pl={6} {...props} />,
  ol: (props) => <List.Root as={"ol"} styleType="decimal" pl={6} {...props} />,
  li: (props) => <List.Item {...props} />,
  code: (props) => <Code {...props} p={4} backgroundColor='blackAlpha.100'/>,
  img: (props) => <Image my={4} alt={props.alt || ""} {...props} />,
  table: (props) => (
    <Table my={4} size="md" colorScheme="gray">
      {props.children}
    </Table>
  ),
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  tr: (props) => <Tr {...props} />,
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
};

export default MDXComponents;
