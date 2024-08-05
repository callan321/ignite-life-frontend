import React from 'react';

const Page = () => {
    return (
        <div className="w-full flex flex-col main-content-wrapper">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col">
                    <div id="YNPjxf" className="w-full flex flex-col mb-6 p-6 bg-white text-black">
                        <div className="flex flex-col items-start text-left">
                            <div className="w-full flex flex-row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
function contact() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-0">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-0">
                <div className="location-details">
                    <p className="text-lg">Ignite Life Bowen Therapy<br/>10, Granite St<br/>Lennox Head, New South Wales
                        2478<br/><a href="tel:0490 034 249" className="text-primary">0490 034 249</a><br/><a
                            href="mailto:ignitelifehealing@gmail.com"
                            className="text-primary">ignitelifehealing@gmail.com</a></p>
                </div>
                <div className="w-full">
                    <a href="https://www.google.com/maps/dir/?api=1&amp;destination=Granite+St/10+Lennox+Head+NSW+2478"
                       target="_blank" rel="noopener noreferrer" className="w-full text-primary">
                        <p>Get directions</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

function map() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-0 pr-8">
            <div className="w-full">
                <iframe
                    src="https://www.editmysite.com/ajax/apps/generateMap.php?elementid=867fa810-52c6-11ef-b2b6-6dad00b81f04&amp;map=google&amp;ineditor=0&amp;width=auto&amp;point=1&amp;control=3&amp;scalecontrol=1&amp;height=350px&amp;zoom=10&amp;zoomScale=70&amp;lat=-28.792261&amp;long=153.591599&amp;pincolor=%23000000&amp;pincontrastcolor=%23ffffff&amp;styles=%5B%7B%22featureType%22%3A%22poi%22%2C%22elementType%22%3A%22labels.text%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22poi.business%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22road%22%2C%22elementType%22%3A%22labels.icon%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22transit%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%5D&amp;touch=1&amp;forcemapdrag=1"
                    title="Location Map"
                    loading="lazy"
                    className="w-full h-[350px]"
                ></iframe>
            </div>
        </div>
    )
}

function times() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="hours-grid">
                {[
                    {day: "Monday", hours: "9:00 am - 5:00 pm"},
                    {day: "Tuesday", hours: "3:30 pm - 5:00 pm"},
                    {day: "Wednesday", hours: "12:00 am - 5:00 pm"},
                    {day: "Thursday", hours: "12:00 am - 5:00 pm"},
                    {day: "Friday", hours: "9:00 am - 5:00 pm"},
                    {day: "Saturday", hours: "12:00 am - 4:00 pm"},
                    {day: "Sunday", hours: "Closed"},
                ].map(({day, hours}) => (
                    <div key={day} className="flex flex-col text-left mb-4">
                        <div className="font-medium">{day}</div>
                        <div>{hours}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}