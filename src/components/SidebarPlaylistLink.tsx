interface SidebarPlaylistLinkProps {
  text: string
  url?: string
}

const SidebarPlaylistLink = ({ text, url }: SidebarPlaylistLinkProps) => (
  <a
    href={url ?? 'http://localhost:3000'}
    className="text-sm text-zinc-400 hover:text-zinc-100"
  >
    {text}
  </a>
)
export default SidebarPlaylistLink
