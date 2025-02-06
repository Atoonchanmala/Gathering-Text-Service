import TOMIBig from "../../assets/TOMIBig.png";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading, Highlight } from "@chakra-ui/react";
import TeaxtImage from "../TextImage/TeaxtImage";
import ButtonLabel from "../ButtonLabelStart/ButtonLabel";

const Header = () => {
  return (
    <div>
      <Box bg={"brand.500"} width={"full"} height={"24"} boxShadow={"lg"}>
        <Flex>
          <Image src={TOMIBig} width={"20"} height={"20"} mx={8} my={2} />

          <Heading
            mx={-6}
            size={"lg"}
            pt={9}
            color={"white"}
            fontFamily={"Inter, sans-serif"}
          >
            TOMI
          </Heading>
          <Heading
            size={"lg"}
            pt={9}
            pl={7}
            color={"white"}
            fontFamily={"Inter, sans-serif"}
            fontWeight={"bold"}
          >
            <Highlight query={["R", "O"]} styles={{ color: "#38B6FF" }}>
              ROBOT
            </Highlight>
          </Heading>
        </Flex>
          </Box>
          
          <Box>
              <TeaxtImage/>
          </Box>

          <Box>
              <ButtonLabel/>
          </Box>
    </div>
  );
};
export default Header;
