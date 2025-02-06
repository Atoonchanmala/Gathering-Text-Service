import { Box, Flex } from "@chakra-ui/react";
import { Heading, Highlight } from "@chakra-ui/react";
// import TeaxtImage from "../../components/TextImage/TeaxtImage";
// import ButtonLabel from "../../components/ButtonLabelStart/ButtonLabel";

const HomePage = () => {
  return (
    <div>
      <Box>
        <Flex mt={"24"} justify={"center"}>
          <Heading
            size={"2xl"}
            // boxShadow={"lg"}
            fontFamily={"Inter, sans-serif"}
            fontWeight={"bold"}
          >
            <Highlight query={["O", "I"]} styles={{ color: "#38B6FF" }}>
              TOMI
            </Highlight>
          </Heading>
        </Flex>
        <Flex justify={"center"}>
          <Heading
            size={"md"}
            mt={"4"}
            fontFamily={"Inter, sans-serif"}
            fontWeight={"normal"}
            color={"gray.500"}
          >
            Talking Open-Minded Interactive
          </Heading>
        </Flex>
      </Box>

      {/* Text Image component */}
      {/* <Box>
        <TeaxtImage />
      </Box> */}

      {/* Button start component */}

      {/* <Box>
        <ButtonLabel />
      </Box> */}
    </div>
  );
};
export default HomePage;
