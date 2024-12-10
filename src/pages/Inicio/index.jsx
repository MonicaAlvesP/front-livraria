import s from '../../styles/layouts/inicio.module.scss';
import Community from '../../assets/img/community.png';
import Reading from '../../assets/img/reading.png';
import Transform from '../../assets/img/transform.png';
import Balance from '../../assets/img/balance.png';
import { Card } from '../../components/Card';

export const Inicio = () => {
  return (
    <main>
      <section className={s.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.contentCard}>
        <h3>Por que devo doar?</h3>
        <div className={s.cards}>
          <Card
            image={Community}
            alt="Comunidade - oferecer livros a quem não tem acesso"
            text=" Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
          />
          <Card
            image={Reading}
            alt="Leitura - estimula o hábito da leitura"
            text="Estimula o hábito da leitura e o aprendizado contínuo."
          />
          <Card
            image={Transform}
            alt="Transformação - conhecimento e inspiração"
            text="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
          />
          <Card
            image={Balance}
            alt="Equilíbrio - oportunidades de aprendizado"
            text="Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
          />
        </div>
      </section>
    </main>
  );
};