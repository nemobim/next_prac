'use client'

import { SearchInput } from '@/elements/Input'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-8 flex flex-col items-center">
        <div className="text-primary bg-secondary rounded-full px-4 py-2 font-semibold">blog</div>
        <h1 className="ml-4 text-4xl font-bold">bimnemo("개발")</h1>
        <p className="mb-6 mt-3">
          학습한 내용들을 기록하고 정리하는 것을 좋아해 <strong>블로그</strong>에 꾸준히 기록하고 있습니다.
        </p>
        <SearchInput />
      </div>
      <div className="flex h-[36rem] w-[80rem] rounded-lg bg-slate-50 shadow-lg"></div>
    </div>
  )
}

export default Home
