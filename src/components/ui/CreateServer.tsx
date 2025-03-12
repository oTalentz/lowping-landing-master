import { Rocket } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
    className?: string;
    h1ClassName?: string;
}

export default function CreateServerButton({
    className,
    h1ClassName
}: ButtonProps) {
    return (
        <Link href={"/games"} className={`${className} w-fit h-fit flex items-center gap-1 text-white bg-blue-500 p-2 rounded-md border-2 border-blue-300 transition duration-300 ease-in-out hover:-translate-y-1`}>
            <Rocket strokeWidth={1} />
            <h1 className={h1ClassName}>Criar um servidor</h1>
        </Link>
    )
}