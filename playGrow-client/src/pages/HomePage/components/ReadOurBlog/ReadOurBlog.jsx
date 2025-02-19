import Button from "../../../../components/Button/Button";


const ReadOurBlog = () => {
    return (
        <div className=" px-2 md:px-5">
            <div className="mb-10 mt-20 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Read Our Blog</h1>
                <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
                    Dignissim enim sit amet venenatis urna convallis ae nean <br className="hidden md:block" />
                    et tortor etiam non qu.
                </p>
            </div>

            <div className="w-full mx-auto grid 2 lg:grid-cols-3 gap-6">
                {/* Blog Card 1 */}
                <div className="w-full space-y-5">
                    <div 
                        className="h-[213px] md:h-[323px] p-3 sm:h-[213px] lg:h-[315px] w-full  bg-no-repeat bg-cover bg-center rounded-xl transition-all duration-500"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/DH9th1C3/b-m-l-img-1-300x232-Copy.jpg)",
                            backgroundSize: "100%",
                            transition: "background-size 0.5s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundSize = "112%")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundSize = "110%")}
                    >
                        <div className="w-14 h-14 flex flex-col justify-center items-center rounded-lg bg-white m-4">
                            <h1 className="text-[#db915e] font-bold">5</h1>
                            <h1 className="text-sm font-semibold">MAY</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold">
                            Fun colourful cutlery for toddlers to more enjoy dining
                        </h1>
                        <p className="text-[#6E6E6E] pt-3 text-sm sm:text-base">
                            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum.
                        </p>
                        <Button type="button" className="text-[#db915e] mt-3">Read More</Button>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="w-full space-y-5">
                    <div 
                        className="h-64 sm:h-72 lg:h-[407px] p-3 w-full bg-cover bg-center rounded-xl bg-no-repeat transition-all duration-500"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/mFVqtNsL/b-m-l-img-2-650x650-Copy.jpg)",
                            backgroundSize: "100%",
                            transition: "background-size 0.5s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundSize = "102%")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundSize = "100%")}
                    >
                        <div className="w-14 h-14 flex flex-col justify-center items-center rounded-lg bg-white m-4">
                            <h1 className="text-[#db915e] font-bold">9</h1>
                            <h1 className="text-sm font-semibold">MAY</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold">
                            Fun childhood with furry toys ready for best cuddles
                        </h1>
                        <p className="text-[#6E6E6E] pt-3 text-sm sm:text-base">
                            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum.
                        </p>
                        <Button type="button" className="text-[#db915e] mt-3">Read More</Button>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="w-full space-y-5">
                    <div 
                        className="h-64 sm:h-72 lg:h-[265px] w-full p-3 bg-cover bg-no-repeat bg-center rounded-xl transition-all duration-500"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/vG069Rp/b-m-l-img-3-300x195-Copy.jpg)",
                            backgroundSize: "100%",
                            transition: "background-size 0.5s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundSize = "120%")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundSize = "118%")}
                    >
                        <div className="w-14 h-14 flex flex-col justify-center items-center rounded-lg bg-white m-4">
                            <h1 className="text-[#db915e] font-bold">13</h1>
                            <h1 className="text-sm font-semibold">MAY</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold">
                            Dotted design summertime swimsuit collection for toddlers
                        </h1>
                        <p className="text-[#6E6E6E] pt-3 text-sm sm:text-base">
                            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum.
                        </p>
                        <Button type="button" className="text-[#db915e] mt-3">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadOurBlog;