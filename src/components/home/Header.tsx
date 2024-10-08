import { Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Cedi{" "}
        <Text as={"span"} color={"green.400"}>
          Search
        </Text>
      </Heading>
      <Text fontSize="lg" color="gray.500">
        Ghana&apos;s leading AI powered E-Commerce search engine
      </Text>
    </Fragment>
  );
};

export default Header;
