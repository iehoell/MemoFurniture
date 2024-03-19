import React from 'react';
import catalogueCardsStyles from './catalogueCardsStyles.module.scss';

function CatalogueCards(props){
    return(
        <div className={catalogueCardsStyles.CatalogueSection__productionCards__item}>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    <a href='/catalogue' className={catalogueCardsStyles.link}>
                        Диваны
                    </a>
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    <a href='/catalogue' className={catalogueCardsStyles.link}>
                        Шкафы
                    </a>
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    <a href='/catalogue' className={catalogueCardsStyles.link}>
                        Стулья
                    </a>
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    <a href='/catalogue' className={catalogueCardsStyles.link}>
                        Кровати
                    </a>
                </p>
            </div>
        </div>
    );
}
export default CatalogueCards;