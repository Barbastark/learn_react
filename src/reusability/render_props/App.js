import React from "react"
import DataFetcher from "./components/DataFetcher"
import ExternalComponent from "./components/ExternalComponents.js"

const App = () => {
        
    
    /**
     * ***** Method1 *****
     * Passing a function as a prop
     * By convention the function is named render
     * This function is in charge of of the jsx
     * It also takes arguments from the component it's being passed to   
     */
    return (
        <DataFetcher 
        url="https://swapi.dev/api/people/1" 
        render={
            (loading, data, errMsg) => {
                
                const style = { color: errMsg ? 'red' : 'green' }
                
                return <p style={style}> { errMsg ? errMsg : ( loading ? 'Loading...' : JSON.stringify( data )) }  </p>
            }}    
            />
            );
        }
    /**
     * ***** Method2 *****
     * Passing function as child prop  
     */    
    return (
        <div>
            <DataFetcher url="https://swapi.dev/api/people/1">
                {( loading, data, errMsg ) => { 

                    const style = { color: errMsg ? 'red' : 'green' }

                    return <p style={style}> { errMsg ? errMsg : ( loading ? 'Loading...' : JSON.stringify( data )) }  </p>
                }}
            </DataFetcher>
        </div>
    )
    /**
     * ***** Method3 *****
     * - Passing function as prop
     * - Same as method1 with the exception that te render function passed to DataFetcher
     *   returns an external component 
     */
    return (
        <DataFetcher 
            url={"https://swapi.dev/api/people/1"} 
            render={
                ({loading, data, errMsg}) => {
                    const style = { color: errMsg ? 'red' : 'green' }

                    return <ExternalComponent loading={loading} data={data} errMsg={errMsg}/>
                }
            }    
        />
                         
        
    );
} 
export default App

