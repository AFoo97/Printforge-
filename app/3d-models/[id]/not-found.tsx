import NotFoundUI from '../../../components/NotFoundUI'

export default function NotFound(){
    return (
        <NotFoundUI
            title="Model Not Found"
            subtitle="Sorry, we couldn't find the requested model!"
            link_text="See all models"
            link_href="/"
        />
    )
}