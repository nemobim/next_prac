'use client'

import { BackButton, Button } from '@/elements/Button'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[calc(100vh-10rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <i className="ri-error-warning-line mb-5 text-8xl text-red-500" />
        <h1>요청하신 페이지를 처리하는 동안 오류가 발생했습니다.</h1>
        <p className="mb-8 mt-3">잠시후 다시 시도해주세요.</p>
        <div className="flex gap-5">
          <BackButton />
          <Button label="다시 시도" size="default" color="secondary" onClick={reset} />
        </div>
      </div>
    </div>
  )
}
