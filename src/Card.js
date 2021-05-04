import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <article>
                <h2 className="card">Titre de la carte</h2>
                <p className="card__description">Le texte est ici. Il n'y rien d'écris pour l'instant</p>
                <a className="card__readmore" href="https://www.google.fr">Voir plus</a>
            </article>
        );
    }
}

