import productPageStyles from '../ProductPage/productPageStyles.module.scss';
import mainPageImage from "../../assets/MainPageImage.webp";
import React from "react";

function Reviews(){
    return(
        <div>
            <div className={productPageStyles.reviewerCard}>
                <div className={productPageStyles.reviewerCard__photo}>
                    <img src={mainPageImage} className={productPageStyles.reviewerCard__photoIMG}></img>
                </div>
                <div className={productPageStyles.reviewerCard__description}>
                    <div className={productPageStyles.reviewerCard__description__title}>
                        <div className={productPageStyles.reviewerCard__description__title__nameAndRating}>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__name}>Марина</p>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__rating}>
                                *****
                            </p>
                        </div>
                        <div className={productPageStyles.reviewerCard__description__title__time}>
                            <p>Вчера в 18:12</p>
                        </div>
                    </div>
                    <div className={productPageStyles.reviewerCard__description__review}>
                        <p>
                            Спасибо за прекрасное кресло, теперь это моё любимое местечко в доме))
                            Переживала за то, что кошка испортит материал обивки, но менеджер рассеяла
                            все мои сомнения
                        </p>
                    </div>
                </div>
            </div>

            <div className={productPageStyles.reviewerCard}>
                <div className={productPageStyles.reviewerCard__photo}>
                    <img src={mainPageImage} className={productPageStyles.reviewerCard__photoIMG}></img>
                </div>
                <div className={productPageStyles.reviewerCard__description}>
                    <div className={productPageStyles.reviewerCard__description__title}>
                        <div className={productPageStyles.reviewerCard__description__title__nameAndRating}>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__name}>Марина</p>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__rating}>
                                *****
                            </p>
                        </div>
                        <div className={productPageStyles.reviewerCard__description__title__time}>
                            <p>Вчера в 18:12</p>
                        </div>
                    </div>
                    <div className={productPageStyles.reviewerCard__description__review}>
                        <p>
                            Спасибо за прекрасное кресло, теперь это моё любимое местечко в доме))
                            Переживала за то, что кошка испортит материал обивки, но менеджер рассеяла
                            все мои сомнения
                        </p>
                    </div>
                </div>
            </div>

            <div className={productPageStyles.reviewerCard}>
                <div className={productPageStyles.reviewerCard__photo}>
                    <img src={mainPageImage} className={productPageStyles.reviewerCard__photoIMG}></img>
                </div>
                <div className={productPageStyles.reviewerCard__description}>
                    <div className={productPageStyles.reviewerCard__description__title}>
                        <div className={productPageStyles.reviewerCard__description__title__nameAndRating}>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__name}>Марина</p>
                            <p className={productPageStyles.reviewerCard__description__title__nameAndRating__rating}>
                                *****
                            </p>
                        </div>
                        <div className={productPageStyles.reviewerCard__description__title__time}>
                            <p>Вчера в 18:12</p>
                        </div>
                    </div>
                    <div className={productPageStyles.reviewerCard__description__review}>
                        <p>
                            Спасибо за прекрасное кресло, теперь это моё любимое местечко в доме))
                            Переживала за то, что кошка испортит материал обивки, но менеджер рассеяла
                            все мои сомнения
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Reviews;