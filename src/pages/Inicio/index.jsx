import { Card } from '../../components/Card';

import Reading from '../../assets/img/reading.png';
import Balance from '../../assets/img/balance.png';
import Community from '../../assets/img/community.png';
import Transform from '../../assets/img/transform.png';
import { banner, titleBanner, contentCard, cards } from './inicio.module.scss'

export const Inicio = () => {
  return (
    <main>
      <section className={banner}>
        <h2 className={titleBanner}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={contentCard}>
        <h3>Por que devo doar?</h3>
        <section className={cards}>
          <Card
            image={Community}
            text=" Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
          />
          <Card
            image={Reading}
            text="Estimula o hábito da leitura e o aprendizado contínuo."
          />
          <Card
            image={Transform}
            text="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
          />
          <Card
            image={Balance}
            text="Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
          />
        </section>
      </section>
    </main>
  );
};
