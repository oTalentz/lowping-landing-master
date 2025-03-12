import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="mt-24 w-full border-t border-t-white/10 bg-stone-900/10 py-16 px-4 md:px-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
                <div className="flex justify-center md:justify-start">
                    <Logo width={230} height={230} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <h2 className="text-white text-xl md:text-2xl mb-4">Informacoes Legais</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Termos de Serviço
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Politica de Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-xl md:text-2xl mb-4">Contato/Suporte</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Discord
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    WebSite Ticket
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    WhatsApp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-xl md:text-2xl mb-4">A empresa</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Area do Cliente
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Central de Ajuda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="text-white/80 transition duration-300 ease-in-out hover:text-blue-500"
                                >
                                    Status da Rede
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-8 opacity-10" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white text-sm md:text-base">
                    2025 © LOWPING SERVICES - 00.000.0000/0001-00
                </p>
                <p className="text-white text-sm md:text-base">
                    with love by{" "}
                    <Link
                        href={"https://maxyni.com.br"}
                        className="bg-gradient-to-tr from-purple-800 to-sky-500 bg-clip-text text-transparent text-xl"
                    >
                        maxyni
                    </Link>
                </p>
            </div>
        </footer>
    );
}