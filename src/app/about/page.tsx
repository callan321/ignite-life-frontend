import ResponsiveImage from "@/components/ui/ResponsiveImage";


export default function About() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <ResponsiveImage url={'/evonne.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    What my client says
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <ResponsiveImage url={'/rosie.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <ResponsiveImage url={'/cindy.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <ResponsiveImage url={'/jen.png'} alt={'test'}/>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 ">
                    <ResponsiveImage url={'/abby.png'} alt={'test'}/>
                </div>
            </div>
        </div>
    )
}