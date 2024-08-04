import TestimonialImage from "@/components/TestimonialImage";


export default function TestimonialSection() {
    return (
        <div className="div">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <TestimonialImage url={'/evonne.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    What my client says
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <TestimonialImage url={'/rosie.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <TestimonialImage url={'/cindy.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <TestimonialImage url={'/jen.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <TestimonialImage url={'/abby.png'} alt={'test'}/>
                </div>
            </div>
        </div>
    )
}