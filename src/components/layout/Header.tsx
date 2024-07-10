import { Button } from '@/elements/Button'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex w-full flex-row items-center justify-between px-10 py-4">
      <div className="flex flex-row items-center">
        <Image src={'/image/profile.jpg'} alt="logo" width={50} height={50} className="rounded-full" />
        <Link href="/" className="hover:text-primary ml-4 text-xl font-semibold">
          nemobim
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-primary font-semibold hover:underline">
          전체
        </Link>
        <Link href="/knowledge" className="hover:text-primary font-semibold hover:underline">
          지식
        </Link>
        <Link href="/programing" className="hover:text-primary font-semibold hover:underline">
          개발
        </Link>
        <Link href="/project" className="hover:text-primary font-semibold hover:underline">
          프로젝트
        </Link>
        <Link href="/etc" className="hover:text-primary font-semibold hover:underline">
          기타
        </Link>
      </div>
      <div className="flex gap-3">
        <Button icons="ri-pencil-fill" label="글 작성" size="default" color="primary" />
        <Button icons="ri-settings-3-fill" label="설정" size="default" color="secondary" />
      </div>
    </header>
  )
}

export default Header
