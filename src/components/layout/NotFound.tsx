import { BackButton } from '@/elements/Button'

const NotFoundLayout = ({ page, title = '존재하지 않는 게시물입니다.', text = '게시물이 삭제되었거나 다른 페이지로 변경되었습니다.' }: { page?: string; title?: string; text?: string }) => {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <i className="ri-error-warning-line mb-5 text-9xl text-red-500" />
        <h1 className="text-5xl">{title}</h1>
        <p className="mb-8 mt-5 text-base">{text}</p>
        <BackButton page={page} />
      </div>
    </div>
  )
}

export default NotFoundLayout
