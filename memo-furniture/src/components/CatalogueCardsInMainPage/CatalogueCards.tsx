import React from 'react';
import catalogueCardsStyles from './catalogueCardsStyles.module.scss';

function CatalogueCards(props){
    return(
        <div className={catalogueCardsStyles.CatalogueSection__productionCards__item}>
            <a href='/catalogue' className={catalogueCardsStyles.link}>
                <div className={catalogueCardsStyles.CatalogueCard__sofa}>
                    <p className={catalogueCardsStyles.CatalogueCard__title}>
                        Диваны
                    </p>
                </div>
            </a>
            <a href='/catalogue' className={catalogueCardsStyles.link}>
                <div className={catalogueCardsStyles.CatalogueCard__skaf}>
                    <p className={catalogueCardsStyles.CatalogueCard__title}>
                        Шкафы
                    </p>
                </div>
            </a>
            <a href='/catalogue' className={catalogueCardsStyles.link}>
                <div className={catalogueCardsStyles.CatalogueCard__chair}>
                    <p className={catalogueCardsStyles.CatalogueCard__title}>
                        Стулья
                    </p>
                </div>
            </a>
            <a href='/catalogue' className={catalogueCardsStyles.link}>
                <div className={catalogueCardsStyles.CatalogueCard__bed}>
                    <p className={catalogueCardsStyles.CatalogueCard__title}>
                        Кровати
                    </p>
                </div>
            </a>
        </div>
    );
}
export default CatalogueCards;