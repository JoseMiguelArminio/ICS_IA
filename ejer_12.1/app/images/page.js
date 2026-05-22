import UploadForm from "@/app/components/UploadForm";

import ImageGrid from "@/app/components/ImageGrid";

import SearchBar from "@/app/components/SearchBar";

import { getImages, searchImages } from "@/lib/images";

export default async function ImagesPage({ searchParams }) {

    let images = [];

    if (searchParams?.search) {

        const tags = searchParams.search.split(",");

        images = await searchImages(tags);

    } else {

        images = await getImages();
    }

    return (

        <main>

            <h1>Gestor de Imágenes</h1>

            <UploadForm />

            <SearchBar />

            <hr />

            <ImageGrid images={images} />

        </main>
    );
}