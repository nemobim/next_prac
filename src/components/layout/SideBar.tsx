import Image from 'next/image'
import SideMenu from './SideMenu'

const SideBar = () => {
  return (
    <div className="flex h-[calc(100vh-2.5rem)] w-80 flex-col items-center rounded-md bg-white shadow-lg">
      <div className="mt-10 flex flex-col items-center">
        <p className="mb-5 text-sm">
          <span className="mr-1 text-gray-400">오늘</span>
          <span className="font-bold">11</span>
          <span className="mx-2">|</span>
          <span className="mr-1 text-gray-400">전체</span>
          <span className="font-bold text-red-500">11213</span>
        </p>
        <Image src="/image/profile.jpg" alt="profile" width={128} height={128} priority className="size-32 rounded-full" />
        <h5 className="mt-5 text-lg font-bold">프론트엔드</h5>
      </div>
      <SideMenu />
    </div>
  )
}

export default SideBar
