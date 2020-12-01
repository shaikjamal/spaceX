import React, { useEffect ,useState,Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/index";
import { useHistory } from "react-router-dom";

import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HistoryItem from './HistoryItem'
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
  const history =  useHistory()

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
         <Box  display="flex" flexDirection="row" mt={1}>
        <Box flex="1">
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
      </Box>
      <Box >
      <Button 
      onClick={()=>history.push('/')}
       variant="contained" color="primary">
         Go To Prev page
         </Button>
      </Box>
      </Box>
      {spacexHistory &&
        spacexHistory.length ?
        spacexHistory.map((list) => {
          return (
          <HistoryItem list={list}/>)
        }):
        <Box display="flex" justifyContent="center" alignItems="center">
          No Data
        </Box>}
            
    </Container>
  );
};
export default SpacexHistory;
