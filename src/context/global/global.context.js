import React, {useContext, useState} from "react";
import svg from '../../google-search-ads.svg'


const Searcher = React.createContext({
    finder: "",
    setBuscador: () => {},
});

export function SearchProvider(props) {
    const [finder, setBuscador] = useState();
    const result = React.useMemo(() => ({
        finder, setBuscador
    }), [finder]);

    return (
        <Searcher.Provider value={result} {...props} />
    )
}

export function SearcherConsumer(props) {
    const { setBuscador } = useContext(Searcher);
    return(
        <div>
            <div className="top">
            <h4 className="title">Buscar Pokemon</h4>
            </div>
            <div className="center">
                <img style={{width:"25px", height:"25px", marginRight:"5px"}} src={svg}/>
                <input style={{marginTop:"8px", marginBottom:"8px"}} type="text" onChange={(e) => setBuscador(e.target.value.toLowerCase())}/>        
            </div>
        </div>                
    )
}

export function Show() {
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