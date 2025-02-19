
const Gallery = () => {
    const images = [
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-10-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-11-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-12-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-13-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-14-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-15-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-16-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-17-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-18-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-19-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-20-300x300.jpg'
        },
        {
            photo: 'https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-21-300x300.jpg'
        },
    ]
    return (
        <div className="bg-[#F7F3F0] relative w-full pt-28 pb-48">
            <div className="absolute top-0 right-0">
                <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-24.png" alt="" />
            </div>
            <div className="text-center pb-16">
                <h1 className="text-3xl">CHECK OUT OUR GALLERY</h1>
                <p className="text-[#6E6E6E] pt-2">Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu consequat ac.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {
                    images.map((image, ind) => <div key={ind}>
                        <img src={image.photo} className="w-full" alt="" />
                    </div>)
                }
            </div>
            <div className="absolute bottom-0 left-14">
                <img className="" src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-27.png" alt="" />
            </div>
        </div>
    );
};

export default Gallery;