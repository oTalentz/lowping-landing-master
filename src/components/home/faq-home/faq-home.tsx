import Image from "next/image";
import FaqComponent from "./faq-component";

export default function FAQ() {
    const faqItems = [
        {
            question: "Por que devo escolher a LowPing?",
            answer:
                "A LowPing Host oferece servidores de alta performance com baixissima latencia, garantindo uma experiencia de jogo fluida e sem interrupcoes. Nosso suporte técnico esta disponivel 24/7, pronto para ajudar em qualquer necessidade. Alem disso, temos planos flexiveis e opcões de servidores localizados em diversas regioes, permitindo que voce escolha a melhor performance para o seu jogo.",
        },
        {
            question: "Quanto tempo demora para eu comecar a jogar?",
            answer:
                "Após a confirmacao do seu pagamento, o seu servidor sera ativado automaticamente. O tempo para comecar a jogar depende do seu plano e da configuracao escolhida, mas em geral, voce pode comecar em questao de minutos. A LowPing Host garante um processo rapido e eficiente para que voce aproveite ao maximo a sua experiencia de jogo.",
        },
        {
            question: "Posso alterar meu plano depois?",
            answer:
                "Sim, voce pode alterar seu plano a qualquer momento! Se precisar de mais recursos ou quiser reduzir seu pacote, nossa plataforma permite que voce faca mudancas facilmente, sem interrupcões no seu servidor. Fique a vontade para ajustar seu plano conforme as suas necessidades.",
        },
        {
            question: "Consigo transferir meu servidor pra LowPing?",
            answer:
                "Sim, a LowPing Host oferece suporte para a migracao do seu servidor. Caso voce ja tenha um servidor em outro provedor, nossa equipe pode ajuda-lo a transferir seus dados sem perder nenhuma informacao. Oferecemos toda a assistencia necessaria para tornar a migracao o mais tranquila possivel.",
        },
    ]

    return (
        <div className="mt-24 w-full px-4 md:px-16 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold leading-tight bg-gradient-to-t from-blue-700 to-blue-500 bg-clip-text text-transparent">precisa de ajuda</h2>
            <h1 className="text-white text-[2.5rem] leading-[36px]">tem perguntas?</h1>
            <h1 className="text-white text-[2.5rem] leading-[36px]">temos as respostas</h1>
            <div className="w-full mx-auto grid gap-16 md:grid-cols-2 md:gap-8 mt-5">
                <div className="flex items-start justify-center">
                    <Image className="max-w-[400px] object-contain" src={"https://i.imgur.com/0BZAOYu.png"} alt="Image FAQ Error" quality={100} width={500} height={500} />
                </div>
                <div className="w-full overflow-hidden">
                    <FaqComponent items={faqItems} title="Perguntas Frequentes sobre Framer Motion" />
                </div>
            </div>
        </div>
    )
}