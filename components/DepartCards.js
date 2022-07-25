import Image from "next/image";
const DepertmentCard = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center justify-center shadow-xl shadow-blue-100 pb-14 pt-5 border-transparent hover:border-primary hover:border-2 border-2 rounded-lg cursor-pointer">
            <Image src={icon} alt="" />
            <h1 className="text-3xl font-bold text-neutral">{name}</h1>
        </div>
    );
}

export default DepertmentCard;

