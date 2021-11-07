import React from 'react'
import { CardPlaceholder } from '..'
import { useMoviesContext } from '../../Context/movies.context'

const LoadingWrapper = ({children}) => {
    const {loading} = useMoviesContext()

    if(loading){
        return (
            <CardPlaceholder/>
        )
    }

    return <div>{children}</div>
}

export default LoadingWrapper;
