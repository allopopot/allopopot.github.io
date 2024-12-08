import { useEffect, useRef } from "react"

export default function Carousel({ children }: { children: React.ReactNode }) {
    const CarouselParent = useRef<HTMLDivElement>(null)
    const touchStart = useRef(0)
    const touchEnd = useRef(0)

    useEffect(() => {
        const childrenImage = CarouselParent.current?.children[0]?.children
        if (!childrenImage) { return }
        for (var child of childrenImage!) {
            child.classList.add("rounded-lg")
            child.classList.add("snap-center")
            child.classList.add("snap-always")
        }

        CarouselParent.current?.addEventListener("touchstart", (ev) => {
            ev.preventDefault()
            touchStart.current = ev.changedTouches[0].screenX
        })

        CarouselParent.current?.addEventListener("touchend", (ev) => {
            ev.preventDefault()
            touchEnd.current = ev.changedTouches[0].screenX
            checkDirection()
        })

    }, [])

    function checkDirection() {
        if (touchEnd.current < touchStart.current) next()
        if (touchEnd.current > touchStart.current) prev()
    }

    function next() {
        const totalScollWidth = CarouselParent?.current?.scrollWidth ?? 0
        const currentPos = CarouselParent?.current?.scrollLeft ?? 0
        const totalWidth = CarouselParent?.current?.clientWidth ?? 0

        if (currentPos + totalWidth <= totalScollWidth) {
            CarouselParent.current?.scrollTo({
                left: currentPos + totalWidth
            })
        }
    }

    function prev() {
        const currentPos = CarouselParent?.current?.scrollLeft ?? 0
        const totalWidth = CarouselParent?.current?.clientWidth ?? 0

        if (currentPos - totalWidth >= 0) {
            CarouselParent.current?.scrollTo({
                left: currentPos - totalWidth
            })
        }
    }

    function isTouchDevice() {
        return window.ontouchstart !== undefined;
    }

    return ( children &&
        <div className="relative">
            <button className="z-[2] absolute top-[50%] translate-y-[-50%] left-[2%] bg-gray-900/50 p-1 rounded" onClick={() => { prev() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
            </button>
            <div ref={CarouselParent} className="w-full flex flex-row flex-nowrap overflow-hidden gap-5 scroll-smooth snap-x snap-mandatory">
                {children}
            </div>
            <button className="z-[2] absolute top-[50%] translate-y-[-50%] right-[2%] bg-gray-900/50 p-1 rounded" onClick={() => { next() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
            </button>
            {isTouchDevice() && <p className="p-1 rounded bg-gray-900/50 absolute bottom-[0%] right-[0%] m-2 text-xs">Swipe Enabled</p>}
        </div>
    )
}
