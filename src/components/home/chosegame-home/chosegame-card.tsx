import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ChoseGameCardProps {
    name: string;
    image: string;
    firstPlanPrice: number;
    href: string;
}

export default function ChoseGameCard({
    name,
    image,
    firstPlanPrice,
    href
}: ChoseGameCardProps) {
    return (
        <Link href={href} className="relative block w-72 h-40 rounded-xl overflow-hidden group border-2 border-white/20">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="relative w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex flex-col justify-end p-4">
                <ExternalLink strokeWidth={1.5} color="white" className="absolute top-1 right-1 opacity-0 group-hover:opacity-100" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h1 className="text-white text-2xl font-medium leading-2">{name}</h1>
                    <h2 className="text-white text-lg leading-3">A partir de R${firstPlanPrice},00</h2>
                </div>
            </div>
        </Link>
    )
}