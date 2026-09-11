import NotFoundUI from '../../../../components/NotFoundUI'

export default function CategoryNotFound(){
    return (
        <NotFoundUI
            title="Category Not Found"
            subtitle="Sorry, we couldn't find the requested category!"
            link_text="See all models"
            link_href="/3d-models"
        />
    )
}