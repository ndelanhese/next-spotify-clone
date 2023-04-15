import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  List,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

const Home = () => (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <nav className="space-y-5 mt-10">
          <a
            href="http://localhost:3000"
            className="flex items-center gap-3 text-base font-semibold text-white"
          >
            <HomeIcon /> Home
          </a>
          <a
            href="http://localhost:3000"
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          >
            <Search /> Search
          </a>
          <a
            href="http://localhost:3000"
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          >
            <Library /> Library
          </a>
        </nav>

        <nav className="mt-6 pt-6 border-t border-zinc-1040 flex flex-col gap-3">
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Playlist 1
          </a>
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Your Top Songs 2022
          </a>
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Your Top Songs 2020
          </a>
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Your Top Songs 2019
          </a>
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            This is Murilo Huff
          </a>
          <a
            href="http://localhost:3000"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Made in Mud Official
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center gap-3">
          <button type="button" className="p-1 rounded-full bg-black/40">
            <ChevronLeft />
          </button>
          <button type="button" className="p-1 rounded-full bg-black/40">
            <ChevronRight />
          </button>
        </div>
        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 overflow-hidden mt-4 ">
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image src="/ac-dc.jpeg" width={104} height={104} alt="ac-dc" />
            <strong>AC/DC</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image src="/alok.jpg" width={104} height={104} alt="alok" />
            <strong>Alok Radio</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image
              src="/esquenta.jpeg"
              width={104}
              height={104}
              alt="esquenta"
            />
            <strong>Esquenta Sertanejo</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image
              src="/metallica.jpg"
              width={104}
              height={104}
              alt="metallica"
            />
            <strong>The Best Songs of Metallica</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image
              src="/murillo-huff.jpeg"
              width={104}
              height={104}
              alt="murillo-huff"
            />
            <strong>Ao Vivão 2</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
          <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
            <Image src="/neffex.jpg" width={104} height={104} alt="neffex" />
            <strong>Old Neffex Songs</strong>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
            >
              <Play />
            </button>
          </a>
        </div>
        <h2 className="font-semibold text-2xl mt-10">
          Made for Nathan Delanhese
        </h2>
        <div className="grid grid-cols-8 gap-4 mt-4">
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>{' '}
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>{' '}
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>{' '}
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />

            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>
          <a className="bg-white/5 hover:bg-white/10 flex flex-col gap-2 p-3 group rounded-md">
            <Image
              src="/ac-dc.jpeg"
              className="w-full"
              width={120}
              height={120}
              alt="ac-dc"
            />
            <strong className="font-semibold">Highway to Hell</strong>
            <span className="text-sm text-zinc-400">AC/DC</span>
          </a>
        </div>
      </main>
    </div>
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/ac-dc.jpeg"
          className="w-full"
          width={56}
          height={56}
          alt="ac-dc"
        />
        <div className="flex flex-col gap-1" style={{ whiteSpace: 'nowrap' }}>
          <strong className="font-normal">Highway to Hell</strong>
          <span className="text-xs text-zinc-400">AC/DC</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black"
          >
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">1:31</span>
          <div className="bg-zinc-600 w-96 h-1 rounded-full">
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">5:00</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <List size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="bg-zinc-600 w-24 h-1 rounded-full">
            <div className="bg-zinc-200 w-12 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  </div>
)

export default Home
