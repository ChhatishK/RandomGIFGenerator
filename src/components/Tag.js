import { useEffect, useState } from "react"
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false)
  const [tag, setTag] = useState("car");

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   console.log(data)

  //   setLoading(false)

  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  

  // function clickHandler() {
  //   fetchData()
  // }

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className="w-6/12 bg-blue-600 rounded-lg gap-y-5 mt-[15px] border border-black flex flex-col items-center">

      <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width={450}/>)
      }
      
      <input type="text"
      className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag}
       />

      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[3px]"
      onClick={() => fetchData()}>Generate</button>

    </div>
  )
}


export default Tag;