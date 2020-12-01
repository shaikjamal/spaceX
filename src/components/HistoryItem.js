import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";

const HistoryItem = ({list}) => {
  return (
    <Box display="flex" flexDirection="column" bgcolor="#ccc" my={1} p={2} px={4} borderRadius={5}>
            
    <Box>
    Id : {list.id}
    </Box>
    <Box>
    Title: {list.title}
    </Box>
    <Box>
    Details: {list.details}
    </Box>
    <Box>
    Event date unix  : {list.event_date_unix}
    </Box>
    <Box>
    Event date utc : {list.event_date_utc}
    </Box>
    <Box>
    Payload mass lbs : {list.payload_mass_lbs}
    </Box>
    <Box>
    Flight number  : {list.flight_number}
    </Box>
    {list.links ?
        <Box>
         Links : 
         {list.links["article"]}
         {list.links["reddit"]}

         {list.links["wikipedia"]}

        </Box>:<Fragment/>}
  </Box>
  );
};
export default HistoryItem;
