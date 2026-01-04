import { useEffect, useState } from "react"
import { baseAxios } from "../api/baseAxios"

function useApi() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async ()=>{
        setLoading(true)
        try {
            const response = await baseAxios.get("/")
            setData(response.data)
        }catch(error){
            setError(error.massage)
        }finally{
            setLoading(false)
        }       
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    {data, loading, error}
  )
}

export default useApi