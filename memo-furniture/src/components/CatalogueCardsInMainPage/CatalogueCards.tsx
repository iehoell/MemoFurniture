import React from 'react';
import catalogueCardsStyles from './catalogueCardsStyles.module.scss';

function CatalogueCards(props){
    return(
        <div className={catalogueCardsStyles.CatalogueSection__productionCards__item}>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    Диваны
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    Шкафы
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    Стулья
                </p>
            </div>
            <div className={catalogueCardsStyles.CatalogueCard}>
                <p className={catalogueCardsStyles.CatalogueCard__title}>
                    Кровати
                </p>
            </div>
        </div>
    );
}
export default CatalogueCards;