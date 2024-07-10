'use client'

import CardBox from '@/components/home/CardBox'
import { SearchInput } from '@/elements/Input'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 mt-3 flex flex-col items-center">
        <h1 className="ml-4 text-4xl font-bold">bimnemo("개발")</h1>
        <p className="mb-6 mt-3 text-sm">
          학습한 내용들을 기록하고 정리하는 것을 좋아해 <strong>블로그</strong>에 꾸준히 기록하고 있습니다.
        </p>
        <SearchInput />
      </div>

      <div className="flex h-[40rem] w-[72rem] flex-col p-4">
        <div className="my-4">
          <span className="text-primary bg-secondary rounded-full px-4 py-2 text-sm font-semibold">최신순</span>
          <span className="ml-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">인기순</span>
        </div>
        <div className="grid h-full w-full grid-cols-3 gap-5">
          {[...Array(6)].map((_, index) => (
            <CardBox key={index} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-secondary text-primary rounded-md px-4 py-2">1</button>
          <button className="text-primary rounded-md bg-white px-4 py-2">2</button>
          <button className="text-primary rounded-md bg-white px-4 py-2">3</button>
          <button className="text-primary rounded-md bg-white px-4 py-2">4</button>
          <button className="text-primary rounded-md bg-white px-4 py-2">
            <i className="ri-arrow-right-s-line" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
