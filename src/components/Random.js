
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false)

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource)

  //   setLoading(false)

  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  

  const {gif, loading, fetchData} = useGif()

  return (
    <div className="w-6/12 bg-green-600 rounded-lg gap-y-5 mt-[15px] border border-black flex flex-col items-center">

      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width={450}/>)
      }
      

      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-4"
      onClick={() => fetchData()}>Generate</button>

    </div>
  )
}
