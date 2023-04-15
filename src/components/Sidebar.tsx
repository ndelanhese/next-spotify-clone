import { HomeIcon, Library, Search } from 'lucide-react'

import SidebarNavLink from './SidebarNavLink'
import SidebarPlaylistLink from './SidebarPlaylistLink'
import TitleBarBall from './UI/TitleBarBall'

const Sidebar = () => (
  <aside className="w-72 bg-zinc-950 p-6">
    <div className="flex items-center gap-2">
      <TitleBarBall backgroundColor="bg-red-500" />
      <TitleBarBall backgroundColor="bg-yellow-500" />
      <TitleBarBall backgroundColor="bg-green-500" />
    </div>
    <nav className="space-y-5 mt-10">
      <SidebarNavLink text="Home" isSelected>
        <HomeIcon />
      </SidebarNavLink>
      <SidebarNavLink text="Search">
        <Search />
      </SidebarNavLink>
      <SidebarNavLink text="Library">
        <Library />
      </SidebarNavLink>
    </nav>

    <nav className="mt-6 pt-6 border-t border-zinc-1040 flex flex-col gap-3">
      <SidebarPlaylistLink text="Your Top Songs 2022" />
      <SidebarPlaylistLink text="Your Top Songs 2019" />
      <SidebarPlaylistLink text="This is Murilo Huff" />
      <SidebarPlaylistLink text="Made in Mud Official" />
      <SidebarPlaylistLink text="Your Liked Songs" />
    </nav>
  </aside>
)
export default Sidebar
