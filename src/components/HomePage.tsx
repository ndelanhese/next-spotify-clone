import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

const HomePage = () => (
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
        <Image src="/esquenta.jpeg" width={104} height={104} alt="esquenta" />
        <strong>Esquenta Sertanejo</strong>
        <button
          type="button"
          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
        >
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors group">
        <Image src="/metallica.jpg" width={104} height={104} alt="metallica" />
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
    <h2 className="font-semibold text-2xl mt-10">Made for Nathan Delanhese</h2>
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
)
export default HomePage
