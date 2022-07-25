import Image from "next/image"

const Doctorscard = ({image}) => {
    return (
        <div>
            <Image className="w-full" src={image} alt="" />

            <div>
                <h1 className="text-3xl text-neutral font-bold text-center">{'Chriss Taylor'}</h1>
                <h5 className="text-primary text-center text-xl font-semibold">Internal Medicine</h5>
            </div>
        </div>
    )
}

export default Doctorscard