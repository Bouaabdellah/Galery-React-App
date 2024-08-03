import { useSelector } from "react-redux"
import { hit } from "../mold/hit"
import { useState } from "react";

interface State {
    images: { images: hit[] };
}
export const Galery = () => {
    const galery: hit[] = useSelector((state: State) => state.images.images);
    const [open, setOpen] = useState<number>(-1);
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-x-4 gap-y-8 pb-52">
                {galery.map((ele: hit, index: number): JSX.Element => {
                    return (
                        <div key={ele.id} className="relative cursor-pointer" onClick={() => setOpen(index)}>
                            <img src={ele.largeImageURL} alt={ele.tags} className="object-cover h-[300px] rounded-xl" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white text-[18px]">By <span className="font-semibold">{ele.user}</span></div>
                        </div>
                    )
                })}
            </div>
            {open !== -1 &&
                <>
                    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,.4)]"></div>
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <img src={galery[open].largeImageURL} alt={galery[open].tags} className="object-center h-[400px] rounded-xl" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white text-[18px]">By <span className="font-semibold">{galery[open].user}</span></div>
                            <span className="absolute -top-4 -right-4 font-bold rounded-full w-12 h-12 flex justify-center items-center bg-blue-400 text-white text-2xl cursor-pointer"
                                onClick={() => setOpen(-1)}>X</span>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
