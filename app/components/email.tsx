'use client'

import type { ReactNode } from 'react'

// The address is only assembled when clicked, so it never appears in the
// page's HTML for scrapers to harvest.
const user = ['tim', 'tdac']
const domain = ['gmail', 'com']

export function EmailLink({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault()
        window.location.href = `mailto:${user.join('')}@${domain.join('.')}`
      }}
    >
      {children}
    </a>
  )
}
