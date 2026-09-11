'use client'

import SearchForm from './SearchForm'
import ModelsGrid from './ModelsGrid'
import type { Model } from '../lib/types'
import {useTransition} from 'react'
import PaginationControls from './PaginationControls'

export default function ModelsBrowser({
  models,
  categoryName,
  search,
  totalPages,
  currentPage
}: {
  models: Model[]
  categoryName?: string
  search?: string
  totalPages: number
  currentPage: number
}) {
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <SearchForm search={search} startTransition={startTransition} />
      <ModelsGrid isPending={isPending} models={models} categoryName={categoryName} search={search} startTransition={startTransition} />
      {totalPages > 1 && (<PaginationControls totalPages={totalPages} currentPage={currentPage} />)}
    </div>
  )
}