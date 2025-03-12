import ChoseGameCard from "./chosegame-card";

export default function ChoseGameHome() {
    return (
        <div className="w-full px-4 md:px-16 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold leading-tight bg-gradient-to-t from-blue-700 to-blue-500 bg-clip-text text-transparent">servidores de jogo</h2>
            <h1 className="text-white text-[2.5rem] leading-[36px]">escolha um jogo</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
                <ChoseGameCard name="Minecraft" image="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a" firstPlanPrice={10.00} href="/minecraft" />
            </div>
        </div>
    )
}