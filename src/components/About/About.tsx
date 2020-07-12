import React, { FunctionComponent } from 'react'
import './About.scss'

type AboutProps = {
    title: string,
    imageUrl: string,
    paragraph: string
}

const About: FunctionComponent<AboutProps> = ({ title, imageUrl, paragraph }) =>
    <div className="about">
        <div className="logo">
            <img src={require('../../assets/anandh.jpg')} />
        </div>
        <div className="content">
            <h3>{title}</h3>
            <span>
                Anandh Krishna is a poet, essayist, writer, novelist  and translator.

                He is also a practicing Consultant Psychotherapist and Counselor. He conducts Inner Healing programs based on Self-awareness.

                He has published four volumes of poetry in Tamil:
            <ul>
                    <li>Avaravar Kaimanal </li>
                    <li> Kaladiyil Agayam</li>
                    <li>Alavilladha Malar</li>
                    <li>Ilavarasi Kavithaikal</li>
                </ul>

            One volume of essays on poetics:
            Kavithai Ennum Vaalveechu

            One volume of essays on Time and Consciousness:
            Kalaveli Kaadu.

            One slim novel entitled Naan Kaanaamal Pogum Kadhai, which has won wide acclaim.

            He has published a volume containing three short stories and three short novels under the title Pavalamalligai.

            He has published a long novel: Sutru Vazhi Paadhai.

            He has translated into Tamil three books from European languages, through English:

            KA, by Roberto Calasso from Italian,

            The Tale of The Unknown Island by Jose Saramago,  from Portugese

            A Day with Mr. Jules by Diane Broekhoven from Belgian.

            He has been awarded the Sparrow Literary Award for 2015, for his contributions to Tamil Poetry.

            His explorations include investigations of The Collective Unconscious through his poetry, novels, short stories and essays.

            His other interests include the Psychology of the Unconscious, Transpersonal Psychology of Ken Wilber, Analytical Psychology of Carl Gustav Jung, Transactional Analysis of Eric Berne, Gestalt Therapy of Frederick Perls.

            His engages himself deeply with Classical Music, Astrophysics, Self-Knowledge and Eastern spiritual practices.


        </span>
        </div>
    </div>

export default About;