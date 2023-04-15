import {
  Laptop2,
  List,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => (
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
)
export default Footer
