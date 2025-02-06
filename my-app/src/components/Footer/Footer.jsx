import Robotic from "../../assets/Robotic.png";
import { Heading } from "@chakra-ui/react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Box mt={"96"}>
        <Flex justify={"center"}>
          <Image src={Robotic} width={"6"} />
          <Heading
            pt={"1.5"}
            pl={"1"}
            size={"xs"}
            color={"gray.500"}
            fontWeight={"normal"}
            fontFamily={"Inter, sans-serif"}
          >
            TEAM TOMI ROBOTIC
          </Heading>
        </Flex>
      </Box>
    </div>
  );
};
export default Footer;
