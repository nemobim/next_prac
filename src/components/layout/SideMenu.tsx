'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SideMenu = () => {
  const router = useRouter()
  const navMenu = [
    { name: '전체', link: '/', children: [] },
    {
      name: 'Programming',
      link: '/programming',
      children: [
        { name: 'javascript', link: '/programming/javascript' },
        { name: 'typescript', link: '/programming/typescript' },
      ],
    },
    { name: 'React', link: '/react', children: [] },
    { name: 'Next.js', link: '/next', children: [] },
    { name: 'UI/UX', link: '/uiux', children: [] },
    { name: 'Project', link: '/project', children: [] },
  ]

  // 서브메뉴의 확장/축소 상태를 관리합니다.
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({})

  const handleToggle = (index: number): void => {
    router.push(navMenu[index].link)
    setOpenIndexes(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="mt-14 w-full px-8">
      <ul className="mt-4">
        {navMenu.map((item, index) => (
          <li key={index} className="py-2">
            <button onClick={() => handleToggle(index)} className="w-full px-4 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              {item.name}
            </button>
            {item.children.length > 0 && openIndexes[index] && (
              <ul className="mt-2 pl-4">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="px-4 py-1 hover:bg-gray-100">
                    <Link href={child.link} className="text-gray-700 hover:text-gray-900">
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
