export default interface LeftSideProps {
    data: {
        id: number,
        age: number,
        name: string,
        kindness: string,
        country: string,
        city: string,
        post_code: string,
        address: string,
        created_at: string,
        items:
            {
            id: number,
            name: string
            }[],
        status: string
        }
}
