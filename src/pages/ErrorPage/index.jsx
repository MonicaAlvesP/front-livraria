import imageError from "@/assets/img/404 Error.png"
import s from './errorPage.module.scss'

export const ErrorPage = () => {
    return (
        <section className={s.container}>
            <div className={s.imageError}>
                <img src={imageError} alt="Imagem de página nao encontrada" />
            </div>
            <p className={s.textError}>
                A página que você está procurando não existe ou foi removida. Você pode voltar para a página inicial ou entrar em contato com o suporte para mais informações.
            </p>
        </section>
    )
}