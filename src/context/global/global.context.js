import React, {creatContext, useState} from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      height: "35px",
      marginTop: "8px",
      alignContent: "left",
      textAlign: "left",
      width: 'auto',
      '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        width: '95%',
        fontFamily: 'Poppins',
        borderRadius: "10px",
        background: "white",
        color: "#353535",
        border: "solid transparent 0px",
        padding: '0 3px',        
      },
      '& .Mui-focused': {
        borderColor: "#00B1FF"
      },
      '& .MuiInput-root.Mui-error': {
        borderColor: '#FF2F54',
        color: '#FF2F54',
        '&:focus, &:hover, &:focus-visible, &:active': {
          borderColor: '#FF2F54',
        },
      },
      '& .MuiOutlinedInput-root.Mui-disabled, & .MuiInputBase-root.Mui-disabled': {
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5',
        color: '#BEBEBE',
        '&:focus, &:hover, &:focus-visible, &:active': {
          borderColor: '#F5F5F5',
        },
      },
      '& .MuiFormHelperText-root.Mui-error': {
        color: '#FF2F54',
      },
      '& .MuiInput-underline': {
        '&:before, &:after, &:focus, &:hover, &:focus-visible': {
          borderColor: 'transparent',
        },
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderColor: 'transparent'
      },
      '& ::-webkit-calendar-picker-indicator': {
        filter: 'invert(51%) sepia(85%) saturate(2108%) hue-rotate(166deg) brightness(101%) contrast(102%)'
      },
      '& .MuiInput-inputMultiline': {
        padding: '5px 3px',
      }
    },
  }))

const Searcher = React.createContext({
    finder: "",
    setBuscador: () => {},
});

export function SearchProvider(props) {
    const [finder, setSearch] = useState();
    const result = React.useMemo(() => ({
        finder, setSearch
    }), [finder]);

    return (
        <Searcher.Provider value={result} {...props} />
    )
}

export function SearcherConsumer(props) {
    const classes = useStyles(props);
    const { finder, setSearch } = useContext(Searcher);
    return(  
        <div className="center-a" style={{paddingTop: '100px'}}>
            <TextField className={classes.textField} type="text" onChange={(e) => setSearch(e.target.value)}/>        
        </div>                
    )
}

export function Result() {
    const datos = useContext(Searcher);
    return datos;
}

// export const GlobalContext = creatContext(initialState);

// export const GlobalProvider = ({children})=>{

//     return (
//         <GlobalContext.Provider>
//             {children}
//         </GlobalContext.Provider>
//     )
// }