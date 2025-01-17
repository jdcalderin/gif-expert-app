import { useState, useEffect } from "react"
import {getGifs} from "../helpers/getGifs"


export const useFetchGifs = (category) => {


    const [images, setimages] =  useState([])
    const [isLoading, setIsLoading] = useState(true)    

    const getimages = async () => {

       
        const newImages = await getGifs(category)
        setimages(newImages)
        setIsLoading(false)

    }


    useEffect(() => {

        getimages()

    }, [])



    return {
        images: images,
        isLoading: isLoading

    }
}


