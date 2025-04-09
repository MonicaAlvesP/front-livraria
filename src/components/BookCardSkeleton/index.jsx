import s from './cardSkeleton.module.scss'

export const BookCardSkeleton = () => {
  return (
    <section className={s.card}>
      <div className={s.cover}></div>
      <div className={s.info}>
        <div className={s.title}></div>
        <div className={s.author}></div>
        <div className={s.year}></div>
        <div className={s.buttonViewDetails}></div>
      </div>
    </section>
  )
}