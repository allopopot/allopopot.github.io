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
        nav: "Portfolio",
        link: "/Portfolio"
    },
    {
        nav: "Resume",
        link: "/Resume"
    }
]

export default function Sidebar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div id="Sidebar" className={(toggle ? "w-full sm:w-full md:w-[25rem] lg:w-[25rem]" : "w-0") + " absolute sm:absolute md:relative lg:relative h-full bg-yellow-300 text-gray-900 shadow-lg flex flex-col flex-nowrap transition-all border-t border-gray-900 z-[99]"}>

            <div>
                <button className={(toggle ? "m-2" : "translate-x-[-30%] my-2") + " hover:translate-x-[0%] bg-gray-700 p-1 rounded transition-all border-2 border-yellow-300 animate-glow-yellow shadow-yellow-300"} onClick={() => { setToggle(!toggle) }}>
                    {
                        toggle ?
                            <i className="text-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </i>
                            :
                            <i className="text-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </i>
                    }
                </button>
            </div>

            <div className="w-full h-full overflow-hidden mt-5">
                <div className="w-full h-full overflow-auto p-5 pt-0 text-justify">
                    {
                        links.map((el) => {
                            return (
                                <a href={el.link}>
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