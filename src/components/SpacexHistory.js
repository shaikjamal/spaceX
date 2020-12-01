import React, { useEffect ,useState,Fragment} from "react";
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
const SpacexHistory = () => {
  const dispatch = useDispatch();
  const classes = useStyles()
  const [page,setPage] =  useState(1);
  const spacexHistory = useSelector(
    (state) => state.historyData
  );
  console.log(spacexHistory,"allStats");
useEffect(() => {
      dispatch(actions.getHistory(0));
    //   dispatch(actions.affiliateStatsDaywise(token));
    
  }, [dispatch]);
  function handleChange(event,value) {
    console.log(event,value);
    setPage(value)
    const offset = value>0 ?(value-1)*5:0
      dispatch(actions.getHistory(offset));
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
      {spacexHistory &&
        spacexHistory.length &&
        spacexHistory.map((list) => {
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
          </Box>)
        })}
            
    </Container>
  );
};
export default SpacexHistory;
