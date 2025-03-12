import { Smartphone, Tag } from "lucide-react";
import Link from "next/link";

export default function Support() {
    return (
        <div className="mt-24 w-full px-4 md:px-16 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold leading-tight bg-gradient-to-t from-blue-700 to-blue-500 bg-clip-text text-transparent">precisa de ajuda</h2>
            <h1 className="text-white text-[2.5rem] leading-[36px]">tem + perguntas? Entre em contato</h1>
            <h1 className="text-white text-[2.5rem] leading-[36px]">para um suporte dedicado</h1>
            <div className="mx-auto grid gap-4 md:grid-cols-2 mt-5">
                <button className="w-80 h-20 rounded-md flex items-center gap-4 px-4 bg-blue-400/10 backdrop-blur-sm border-2 border-blue-700/40 transition duration-300 ease-in-out hover:border-blue-700/100">
                    <div className="bg-white p-4 rounded-full">
                        <Tag strokeWidth={2} color="black" />
                    </div>
                    <div className="text-white text-start">
                        <h1 className="text-2xl">Abra um ticket</h1>
                        <p className="opacity-80">Suporte no site</p>
                    </div>
                </button>
                <Link href={""} className="w-80 h-20 rounded-md flex items-center gap-4 px-4 bg-blue-400/10 backdrop-blur-sm border-2 border-blue-700/40 transition duration-300 ease-in-out hover:border-blue-700/100">
                    <div className="bg-white p-4 rounded-full">
                        <Smartphone strokeWidth={2} color="black" />
                    </div>
                    <div className="text-white text-start">
                        <h1 className="text-2xl">Entre no Discord</h1>
                        <p className="opacity-80">Discord</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}