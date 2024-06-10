import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="w-full flex flex-col background p-2 mx-auto">
      <h1 className="bg-white rounded-lg text-center p-2 text-3xl font-bold w-11/12 mx-auto mt-4">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>

    </div>
  );
}
