'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface IButton {
  /**버튼 텍스트 */
  label: string
  /**버튼 사이즈 */
  size: 'default' | 'full'
  /**아이콘 설정 ex) ri-pencil-fill */
  icons?: string
  /**버튼 컬러 */
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'
  /**버튼 비활성화 */
  disabled?: boolean
  /**버튼 타입 */
  type?: 'button' | 'submit'
  onClick?: () => void
}

/** Basic 버튼 */
export const Button = ({ label, size, color, icons, onClick, disabled, type = 'button' }: IButton) => {
  const sizeList = {
    full: 'w-full h-11 min-h-[44px] text-[0.875rem]',
    default: 'min-w-[103px] min-h-[38px] text-sm',
  }

  const colorList = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
    info: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50',
  }

  const iconSizeList = {
    full: 'text-base',
    default: 'text-base',
  }

  return (
    <button
      className={twMerge('inline-flex items-center justify-center break-all rounded-md px-3.5 py-1 disabled:bg-[#f4f3fe] disabled:text-[#c5c0db]', sizeList[size], colorList[color])}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icons && <i className={`mr-2 ${icons} ${iconSizeList[size]}`}></i>}
      {label}
    </button>
  )
}

interface IBackButton {
  /**페이지 이동 */
  page?: string
}

export const BackButton = ({ page }: IBackButton) => {
  const router = useRouter()

  /**페이지 처리 */
  const handlePage = () => {
    if (page) {
      router.push(page)
    } else {
      //설정된 페이지가 없다면 뒤로가기
      router.back()
    }
  }

  return <Button label="이전 페이지로 돌아가기" size="default" color="primary" onClick={handlePage} />
}
