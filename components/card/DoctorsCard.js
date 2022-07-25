

const Doctorscard = ({doctor}) => {
    return (
        <div className="hover:border-primary border-2 border-transparent rounded-2xl">
            <img  className="w-full mb-5" src={doctor.image} alt="" />
            <div>
                <h1 className="text-3xl text-neutral font-bold text-center">{'Chriss Taylor'}</h1>
                <h5 className="text-primary text-center text-xl font-semibold">Internal Medicine</h5>
            </div>
        </div>
    )
}

export default Doctorscard