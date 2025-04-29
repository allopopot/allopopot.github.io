import { useState } from "react"

const links = [
    {
        nav: "Home",
        link: "/"
    },
    {
        nav: "Information",
        link: "/Information"
    },
    {
        nav: "Projects",
        link: "/Projects"
    },
]

export default function Sidebar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div id="Sidebar" className={(toggle ? "w-full sm:w-full md:w-[25rem] lg:w-[25rem]" : "w-0") + " absolute sm:absolute md:relative lg:relative h-full bg-yellow-300 text-gray-900 shadow-lg flex flex-col flex-nowrap transition-all border-t border-gray-900 z-[99]"}>

            <div>
                <button className={"m-2 top-0 fixed bg-gray-700 p-1 rounded-lg transition-all border-2 border-yellow-300 animate-glow-yellow shadow-yellow-300 h-10 w-10"} onClick={() => { setToggle(!toggle) }}>
                    {
                        toggle ?
                            <i className="text-yellow-300 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                            </i>
                            :
                            <i className="text-yellow-300 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </i>
                    }
                </button>
            </div>

            <div className="w-full h-full overflow-hidden mt-5">
                <div className="w-full h-full overflow-auto p-5 pt-0 text-justify">
                    {
                        links.map((el, index) => {
                            return (
                                <a onClick={() => { setToggle(false) }} href={el.link} key={index}>
                                    <div className="w-full py-3 px-4 rounded border-gray-900 mb-3 border-2 hover:bg-gray-900 hover:text-yellow-300 transition-all shadow-lg">
                                        <p className="font-semibold">{el.nav}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}