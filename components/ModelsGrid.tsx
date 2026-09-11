import ModelCard from './ModelCard'
import type {Model} from '../lib/types'
import SortControls from './SortControls'
import LoadingUI from './LoadingUI'
import type {TransitionStartFunction} from 'react'
import NotFoundUI from './NotFoundUI'

export default function ModelsGrid({models, categoryName, search, isPending, startTransition}:{
  models:Model[],
  categoryName?:string,
  search?:string
  isPending: boolean
  startTransition: TransitionStartFunction
}){

  let title = "3d Models"
  if (categoryName) title = categoryName
  if (search) title = `Search results for "${search}"`
  if (categoryName && search) title = `Search results for "${search}" in ${categoryName}`
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-8"></div>
        <h1 className="mb-8 text-3xl font-bold">{title}</h1>
        <SortControls startTransition={startTransition} />
      <div/>

      {isPending ? (
        <LoadingUI>Loading models...</LoadingUI>
      ) : models.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {models.map((model)=>(
            <ModelCard
              key={model.id}
              model={model}
            />
          ))}

        </div>

      ) : (
          <NotFoundUI
            title="No models found"
            subtitle="Sorry, we couldn't find any models!"
            link_text="See all models"
            link_href="/3d-models"
          />
      )}
    </div>
  )
}