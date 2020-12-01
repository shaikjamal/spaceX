import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/index";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "0px 0px 0px 0px transparent",
  },
  container: {
    height: "calc(100vh - 50px)",
  },
  table: {
    minWidth: 400,
  },
  tableHeadCell: {
    fontSize: "10px",
    color: "rgba(255 255 255 / 0.6)"
  },
  divider: {
    flex: 1,
    background: "#2f3d5d",
  },
  pagination: {
    margin: "8px 0px",
  },
  noData: {
    width: "100%",
    alignSelf: "center",
    textAlign: "center"
  }
});
const SpacexAddress = () => {
  const dispatch = useDispatch();
  const classes = useStyles()
  const [page,setPage] =  useState(1);
  const [searchedData,setSearchedData] =  useState([]);
  const spacexAddresses = useSelector((state) => state.addressData);
  useEffect(() => {
    dispatch(actions.getAddress(0));
    //   dispatch(actions.affiliateStatsDaywise(token));
  }, [dispatch]);
  function handleChange(event,value) {
    console.log(event,value);
    setPage(value)
    const offset = value>0 ?(value-1)*10:0
      dispatch(actions.getAddress(offset));
  }
  return (
    <Container>
        <Pagination
        classes={{
          root: classes.pagination,
        }}
        color="primary"
        variant="outlined"
        page={page}
        count={10}
        onChange={(event,value) => {
          handleChange(event,value);
        }}
      />
      {spacexAddresses &&
        spacexAddresses.length &&
        spacexAddresses.map((list) => {
          return (
          <Box display="flex" flexDirection="column" bgcolor="#ccc" my={1} p={2} px={4} borderRadius={5}>
            {list.customers&&list.customers.length&&list.customers.map(cust=>{
              return(
                <Box>
                 Customers : {cust}
                </Box>
              )
            })}
            <Box>
            Manufacturer : {list.manufacturer}
            </Box>
            <Box>
            Nationality: {list.nationality}
            </Box>
            <Box>
            Orbit: {list.orbit}
            </Box>
            <Box>
              Payload Id : {list.payload_id}
              {list.payload_mass_kg}
              {list.payload_mass_lbs}
            </Box>
            <Box>
            Payload mass kg : {list.payload_mass_kg}
            </Box>
            <Box>
            Payload mass lbs : {list.payload_mass_lbs}
            </Box>
            

          </Box>)
        })}
            
    </Container>
  );
};
export default SpacexAddress;
