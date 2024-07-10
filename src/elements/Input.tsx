'use client'

import { useCallback, useState } from 'react'

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  const handleClear = useCallback(() => {
    setSearchTerm('')
  }, [])

  return (
    <div className="relative">
      <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 pr-10 text-gray-900 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        placeholder="게시물을 검색해보세요."
        value={searchTerm}
        onChange={handleChange}
        required
      />
      {searchTerm && (
        <button onClick={handleClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="검색어 지우기">
          <i className="ri-close-line" />
        </button>
      )}
    </div>
  )
}
