import { createRoot } from 'react-dom/client'

/**로딩 */
export const Loading = {
  start: () => {
    // 컨테이너 생성
    const container = document.createElement('div')
    document.body.appendChild(container)
    document.body.style.overflow = 'hidden'

    // root 생성
    const root = createRoot(container)

    root.render(<LoadingSpinner />)

    // remove 메서드를 반환
    return () => {
      root.unmount()
      document.body.removeChild(container)
      document.body.style.overflow = 'auto'
    }
  },
}

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-10">
      <div className="flex h-full items-center justify-center bg-black bg-opacity-70">
        <div className="border-t-primary h-[3.75rem] w-[3.75rem] animate-spin rounded-[50%] border-[0.25rem] border-white border-opacity-50"></div>
      </div>
    </div>
  )
}
