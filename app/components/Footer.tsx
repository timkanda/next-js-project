import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>By Tim Kanda</span>
            <Link
              href="https://github.com/timkanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

