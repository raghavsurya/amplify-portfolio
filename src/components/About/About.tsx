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
                <b>Anandh Krishna</b> is a poet, essayist, writer, novelist  and translator. <br />

                He is also a practicing Consultant Psychotherapist and Counselor. He conducts Inner Healing programs based on Self-awareness.<br />

                He has published four volumes of poetry in Tamil: <br />
                <ul>
                    <li><b><i>Avaravar Kaimanal </i></b></li>
                    <li><b><i> Kaladiyil Agayam</i></b></li>
                    <li><b><i>Alavilladha Malar</i></b></li>
                    <li><b><i>Ilavarasi Kavithaikal</i></b></li>
                </ul>

            One volume of essays on poetics:<br />
            Kavithai Ennum Vaalveechu<br /><br />

            One volume of essays on Time and Consciousness:<br />
            Kalaveli Kaadu.<br />

            One slim novel entitled Naan Kaanaamal Pogum Kadhai, which has won wide acclaim.<br />

            He has published a volume containing three short stories and three short novels under the title Pavalamalligai.<br />

            He has published a long novel: Sutru Vazhi Paadhai.<br />

            He has translated into Tamil three books from European languages, through English:<br />

            KA, by Roberto Calasso from Italian, <br />

            The Tale of The Unknown Island by Jose Saramago,  from Portugese<br />

            A Day with Mr. Jules by Diane Broekhoven from Belgian.<br />

            He has been awarded the Sparrow Literary Award for 2015, for his contributions to Tamil Poetry.<br />

            His explorations include investigations of The Collective Unconscious through his poetry, novels, short stories and essays.<br />

            His other interests include the Psychology of the Unconscious, Transpersonal Psychology of Ken Wilber, Analytical Psychology of Carl Gustav Jung, Transactional Analysis of Eric Berne, Gestalt Therapy of Frederick Perls.<br />

            His engages himself deeply with Classical Music, Astrophysics, Self-Knowledge and Eastern spiritual practices.<br />


            </span>
        </div>
    </div>

export default About;