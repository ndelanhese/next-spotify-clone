import React from 'react'

interface SidebarNavLinkProps {
  children: React.ReactNode
  text: string
  url?: string
  isSelected?: boolean
}
const SidebarNavLink = ({
  children,
  text,
  url,
  isSelected,
}: SidebarNavLinkProps) => (
  <a
    href={url ?? 'http://localhost:3000'}
    className={`flex items-center gap-3 text-base font-semibold hover:text-zinc-100 ${
      isSelected ? 'text-white' : 'text-zinc-400'
    }`}
  >
    {children} {text}
  </a>
)
export default SidebarNavLink
