import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/index";
import TextField from '@material-ui/core/TextField'
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddressItem from './AddressItem'
import { useHistory } from "react-router-dom";



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
  const history =  useHistory()
  const classes = useStyles()
  const [page,setPage] =  useState(1);
  const [searchedData,setSearchedData] =  useState([]);
  const [searchedText,setSearchedText] =  useState("");

  const spacexAddresses = useSelector((state) => state.addressData);
  useEffect(() => {
    dispatch(actions.getAddress(0));
    //   dispatch(actions.affiliateStatsDaywise(token));
  }, [dispatch]);
  function handleChange(event,value) {
    setSearchedText("");
    setSearchedData([]);
    setPage(value)
    const offset = value>0 ?(value-1)*10:0
      dispatch(actions.getAddress(offset));
  }
 function onFieldChange(event) {
   const value = event.target.value
  setSearchedText(value );
    if (value) {
      const searchedlist = spacexAddresses&&spacexAddresses.length&&
      spacexAddresses.filter(list => {
        if (list.manufacturer) {
          return list.manufacturer.toLowerCase().includes(value)   
        }
      })
      setSearchedData(searchedlist );

    } else if (!value) {
      setSearchedData("");

    }

  }
  console.log(searchedData,searchedText);
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
      <Box display="flex" flexDirection="row">
        <Box flex="1">
      <TextField 
       label="Search" variant="filled"
       value={searchedText}
      onChange={event => {
        onFieldChange(event);
      }}/>
      </Box>
      <Box>
      <Button 
      onClick={()=>history.push('/history')}
       variant="contained" color="primary">
         Go To Next page
         </Button>
      </Box>
      </Box>
      {searchedData &&searchedData.length?
      searchedData.map((list)=>{
        return(
          <AddressItem list={list} />
        )
      }):
      !searchedText&&
      spacexAddresses &&
        spacexAddresses.length ?
        spacexAddresses.map((list) => {
          return (
          <AddressItem list={list}/>)
        })
      :
      <Box display="flex" justifyContent="center" alignItems="center">
      No data
      </Box>
        }
            
    </Container>
  );
};
export default SpacexAddress;
