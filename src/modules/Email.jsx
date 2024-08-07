import { useState } from 'react';
import styles from '../styles/Footer.module.css';

function Email() {
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Cria um FormData com os dados do formulário
        const formData = new FormData(event.target);

        try {
            // Envia os dados do formulário usando fetch
            const response = await fetch('https://formsubmit.co/kaio.victormendes43@gmail.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Define o estado para mostrar o alerta de sucesso
                setEnviado(true);
                setErro(false); // Limpa qualquer erro anterior

                // Define um temporizador para esconder a mensagem após 3 segundos
                setTimeout(() => {
                    setEnviado(false);
                }, 3000); // 3000 milissegundos = 3 segundos

                // Limpa o formulário após o envio
                event.target.reset();
            } else {
                // Se a resposta não for ok, define um erro
                setErro(true);
                setEnviado(false);
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setErro(true);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Vamos Conversar!</h1>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Nome*</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nome"
                    name="name"
                    className={styles.name}
                    required
                />
                <label htmlFor="email">Email*</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <label htmlFor="message">Mensagem*</label>
                <textarea
                    id="message"
                    placeholder="Mensagem"
                    name="message"
                    required
                />

                <button type="submit">Enviar</button>

                <input type="hidden" name="_subject" value="Novo Contato - Portfólio" />
                <input type="text" name="_honey" className={styles.honey} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_cc" value="kaio.mendes1911@gmail.com" />
            </form>

            {enviado && <div className={styles.alert}>Mensagem enviada</div>}
            {erro && <div className={styles.alert}>Houve um erro ao enviar a mensagem</div>}
        </div>
    );
}

export default Email;
