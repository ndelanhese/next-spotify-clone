import { HomeIcon, Library, Search } from 'lucide-react'

const Sidebar = () => (
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
)
export default Sidebar
