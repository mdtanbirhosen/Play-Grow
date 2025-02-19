import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";

const NEWSLETTER = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div
            className="h-[calc(100vh)] py-24 pl-52"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/XnJBnFx/Screenshot-2025-02-19-092607.png)",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-white px-10 w-[416px] py-16">
                <div className="pb-5 text-center">
                    <h1 className="text-2xl ">NEWSLETTER</h1>
                    <h4 className="text-[#6E6E6E] pt-3">Risus viverra adipiscing at in tellus.</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-5 space-y-2">
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Your Name"
                            className="border p-3 placeholder:text-sm w-full outline-none "
                        />
                        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="my-5 space-y-2">
                        <input
                            type="text"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
                            })}
                            placeholder="Your Email"
                            className="border p-3 placeholder:text-sm w-full outline-none "
                        />
                        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                    </div>

                    <button
                        className="w-full justify-center items-center cursor-pointer py-4 bg-[#E38443] my-5 text-white flex group transition-all duration-300 overflow-hidden"
                        type="submit"
                    >
                        <span className="transition-all duration-300 group-hover:-translate-x-2">
                            SEND MESSAGE
                        </span>
                        <FaChevronRight className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </button>

                    {Object.keys(errors).length > 1 && (
                        <div className="w-full border border-[#E38443] p-4">
                            <p className="text-[#6E6E6E] text-sm">
                                One or more fields have an error. Please check and try again.
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default NEWSLETTER;