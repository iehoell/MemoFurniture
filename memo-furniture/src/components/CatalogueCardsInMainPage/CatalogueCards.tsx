import React from 'react';
import catalogueCardsStyles from './catalogueCardsStyles.module.scss';
import mainPageStyles from "../MainPage/mainPage.module.scss";

function CatalogueCards(props){
        const items  = [
        { id: 1, item: "Диваны" },
        { id: 2, item: "Шкафы" },
        { id: 3, item: "Кровати" },
        { id: 4, item: "Стулья" }
        ];
    return(
        <div className={mainPageStyles.CatalogueSection__productionCards__item}>
            <div className={catalogueCardsStyles.CatalogueCard}>
                    {items.map(item => (
                        <p className={catalogueCardsStyles.CatalogueCard__title} key={item.id}>
                            {item.item}
                        </p>
                    ))}
            </div>
        </div>
    );
}
export default CatalogueCards;