import React, {useContext, useState} from "react";


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
        <div className="center-a">
            <input type="text" onChange={(e) => setBuscador(e.target.value.toLowerCase())}/>        
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