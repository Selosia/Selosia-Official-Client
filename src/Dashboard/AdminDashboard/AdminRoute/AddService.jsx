import { useEffect, useState } from "react";

const AddService = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://web-tech-official-server.vercel.app/get/service/admin")
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])
    return (
        <div className="p-10">
            <div className="text-center mb-10">
                <h1 className="text-xl">Add Services</h1>
                <p>Total service: {services?.length}</p>
            </div>
            {
                services?.map((service) => <>
                    <section className="pt-10 bg-[#27E8B3] 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
                        <div className="px-4 mx-auto rounded-md bg-[#27E8B3] max-w-7xl sm:px-6 lg:px-8">
                            <div className="2xl:pl-24 mb-10">
                                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                                    <div className="text-center md:py-10 xl:py-20 md:text-left">
                                        <blockquote>
                                            <h1 className="text-2xl text-white">{service.title}</h1>
                                        </blockquote>
                                        <div className="mt-3 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                                            <p className="text-white">{service.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative w-full">
                                        <img className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 p-6" src={service.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>)
            }
        </div>
    );
};

export default AddService;