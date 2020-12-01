import React from "react";
import Box from "@material-ui/core/Box";

const AddressItem = ({list}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#ccc"
      my={1}
      p={2}
      px={4}
      borderRadius={5}
    >
      {list.customers &&
        list.customers.length &&
        list.customers.map((cust) => {
          return <Box>Customers : {cust}</Box>;
        })}
      <Box>Manufacturer : {list.manufacturer}</Box>
      <Box>Nationality: {list.nationality}</Box>
      <Box>Orbit: {list.orbit}</Box>
      <Box>
        Payload Id : {list.payload_id}
        {list.payload_mass_kg}
        {list.payload_mass_lbs}
      </Box>
      <Box>Payload mass kg : {list.payload_mass_kg}</Box>
      <Box>Payload mass lbs : {list.payload_mass_lbs}</Box>
    </Box>
  );
};
export default AddressItem;
