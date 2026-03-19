// frontend/src/lib/strapi.ts
export async function getPosts() {
    const res = await fetch("http://localhost:1337/api/posts?populate=*");
    const data = await res.json();

    return data.data.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        content: item.attributes.content,
        image: item.attributes.image?.data?.attributes?.url,
    }));
}