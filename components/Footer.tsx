import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-[10em] py-[1.25em] max-[1000px]:px-[5em] max-[1000px]:py-[1em] max-[450px]:px-[3em]">
      <div className="email">
        <a href="mailto:graham7438@icloud.com" className="font-medium hover:underline">
          Email: graham7438@icloud.com
        </a>
      </div>
      <ul className="flex gap-6">
        <li>
          <a href="https://www.linkedin.com/in/graham-pfeifer/" target="_blank" rel="noreferrer noopener">
            <Image src="/linkedin.png" alt="linkedin logo" width={20} height={20} className="hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://github.com/grahampfeifer1/" target="_blank" rel="noreferrer noopener">
            <Image src="/github.png" alt="github logo" width={20} height={20} className="hover:scale-110 transition-transform" />
          </a>
        </li>
      </ul>
    </footer>
  )
}