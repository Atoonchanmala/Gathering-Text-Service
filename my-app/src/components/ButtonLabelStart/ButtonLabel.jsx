import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ButtonLabel = () => {
  return (
    <div>
      <Box mt={"10"}>
        <Flex justify={"center"} gap={10}>
          {/* Button 1 */}
          <Button
            bg={"brand.100"}
            color={"white"}
            height={"12"}
            boxShadow={"lg"}
          >
            <NavLink to="/TOMI/Menu1">
              <Text>Lorem, ipsum dolor.</Text>
            </NavLink>
          </Button>

          {/* Button 2 */}
          <Button
            bg={"brand.100"}
            color={"white"}
            height={"12"}
            boxShadow={"lg"}
          >
            <NavLink to="/TOMI/Menu2">
              <Text>Lorem, ipsum.</Text>
            </NavLink>
          </Button>

          {/* Button 3 */}
          <Button
            bg={"brand.100"}
            color={"white"}
            height={"12"}
            boxShadow={"lg"}
            variant="outline"
          >
            <NavLink to="/TOMI/Menu3">
              <Text>loremLorem</Text>
            </NavLink>
          </Button>
        </Flex>

        {/* ຫຍັງເຫລືອໃນສ່ວນຂອງການເຮັດ Hover  ຂອງ Button ແລະ Button ໃດທີ່ບໍ່ຖືກກົດແມ່ນຈະຕ້ອງຖືກ block ປ່ຽນສີ bg ເປັນສີເທົາ  */}
      </Box>
    </div>
  );
};
export default ButtonLabel;
