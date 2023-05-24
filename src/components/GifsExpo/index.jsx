import { useState } from "react"

const GifsExpo = ({categories = []}) => {
    const [urlList, setUrlList] = useState([])
    const getGifs = async (categories) => {

        const responsesList = await Promise.all(categories.map(async (category) => {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=VeCVOs8gbHRU870IasxTSRZJ3pAXxtLq&q=${category}`
            )
            const apiResponse = await response.json()
            return apiResponse.data
        }))
        let gifsList = []
        responsesList.forEach((data) => {
            data.forEach((item) => {
                gifsList = [...gifsList, item.images.fixed_height.url.split('?')[0]]
            })
        })
        setUrlList([...gifsList])
    }
    getGifs(categories)

    return (
        <>
        <div>
            {
                urlList.map((url) => {
                    return (
                        <img key={url} src={url} />
                    )
                })
            }
        </div>
        </>
    )
}

export default GifsExpo