import React from 'react';
import catalogueStyles from './catalogueStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import ProductCard from "../ProductCard/ProductCard";
import productsData from '../../mockData/productsData';

class Catalogue extends React.Component{
    linkChecker = () => {
        let result = new URL(window.location.href).searchParams.get("seWork");
        switch (result) {
            case '1':
                this.radio2Click()
                document.getElementById('radio2').setAttribute('checked', 'checked');
                break;
            case '2':
                this.radio4Click()
                document.getElementById('radio4').setAttribute('checked', 'checked');
                break;
            case '3':
                this.radio1Click()
                document.getElementById('radio1').setAttribute('checked', 'checked');
                break;
            case '4':
                this.radio3Click()
                document.getElementById('radio3').setAttribute('checked', 'checked');
                break;
            default:
                console.log(result);
        }
    }
    brand1 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';

        productCardsArea__triniti.style.display = 'flex';
        productCardsArea__triniti.style.height = '100%';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
    }
    brand2 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'flex';
        productCardsArea__talot.style.height = '100%';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
    }
    brand3 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'flex';
        productCardsArea__tacery.style.height = '100%';

        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
    }
    material1 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'flex';
        productCardsArea__chair.style.height = '33%';
        productCardsArea__sofa.style.display = 'flex';
        productCardsArea__sofa.style.height = '33%';
        productCardsArea__bed.style.display = 'flex';
        productCardsArea__bed.style.height = '33%';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    }
    material2 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'flex';
        productCardsArea__chair.style.height = '50%';
        productCardsArea__sofa.style.display = 'flex';
        productCardsArea__sofa.style.height = '50%';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    }
    material3 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__bed.style.display = 'flex';
        productCardsArea__bed.style.height = '90%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    }
    material4 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'flex';
        productCardsArea__cabinet.style.height = '50%';
        productCardsArea__closet.style.display = 'flex';
        productCardsArea__closet.style.height = '50%';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    }
    material5 = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'flex';
        productCardsArea__cabinet.style.height = '50%';
        productCardsArea__closet.style.display = 'flex';
        productCardsArea__closet.style.height = '50%';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    }
    radio1Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__chair.style.display = 'flex';
        productCardsArea__chair.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio2Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__sofa.style.display = 'flex';
        productCardsArea__sofa.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio3Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__bed.style.display = 'flex';
        productCardsArea__bed.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio4Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__cabinet.style.display = 'flex';
        productCardsArea__cabinet.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio5Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__closet.style.display = 'flex';
        productCardsArea__closet.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
    };
    radio6Click(){
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        let productCardsArea__triniti = document.getElementById('productCardsArea__triniti')
        let productCardsArea__talot = document.getElementById('productCardsArea__talot')
        let productCardsArea__tacery = document.getElementById('productCardsArea__tacery')
        productCardsArea__all.style.display = 'flex';
        productCardsArea__all.style.height = '100%';

        productCardsArea__triniti.style.display = 'none';
        productCardsArea__triniti.style.height = '0';
        productCardsArea__talot.style.display = 'none';
        productCardsArea__talot.style.height = '0';
        productCardsArea__tacery.style.display = 'none';
        productCardsArea__tacery.style.height = '0';

        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';

    }
    TrinitiComponents = productsData.TrinitiList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    TalotComponents = productsData.TalotList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    TaceryComponents = productsData.TaceryList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    chairComponents = productsData.chairList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    bedComponents = productsData.bedList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    sofaComponents = productsData.sofaList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    cabinetComponents = productsData.cabinetList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    closetComponents = productsData.closetList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    cardsComponents = productsData.productsData.map(cards => <ProductCard
        key={cards.key}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    render(){
        window.onload = this.linkChecker
        return(
            <div className={catalogueStyles.mainContainer}>
                <div className={catalogueStyles.routing}>
                    Главная-Каталог
                </div>
                <p className={catalogueStyles.title}>
                    Каталог
                </p>
                <div className={catalogueStyles.flexBlocks}>
                    <div className={catalogueStyles.sortMenu}>
                        <div className={catalogueStyles.sortMenu__category}>
                            <p className={catalogueStyles.sortMenu__category__title}>Категория</p>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio6'
                                       onClick={() => this.radio6Click()}
                                />
                                <p>Все товары</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio1'
                                       onClick={() => this.radio1Click()}
                                />
                                <p>Кресла и стулья</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio2'
                                       onClick={() => this.radio2Click()}
                                />
                                <p>Диваны</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio3'
                                       onClick={() => this.radio3Click()}
                                />
                                <p>Кровати</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio4'
                                       onClick={() => this.radio4Click()}
                                />
                                <p>Шкафы и стеллажи</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio5'
                                       onClick={() => this.radio5Click()}
                                />
                                <p>Комоды и тумбы</p>
                            </div>
                        </div>
                        <div className={catalogueStyles.sortMenu__category}>
                            <p className={catalogueStyles.titleOfDropdown}>Назначение</p>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input type='radio' checked>
                                </input>
                                <p>Предмет декора</p>
                            </div>
                            <p className={catalogueStyles.titleOfDropdown}>Материал</p>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='material1'
                                        onClick={() => this.material1()}>
                                </input>
                                <p>Ткань</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='material2'
                                        onClick={() => this.material2()}>
                                </input>
                                <p>Кожа</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='material3'
                                        onClick={() => this.material3()}>
                                </input>
                                <p>Велюр</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='material4'
                                        onClick={() => this.material4()}>
                                </input>
                                <p>Дерево</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='material5'
                                        onClick={() => this.material5()}>
                                </input>
                                <p>ДСП</p>
                            </div>
                            <p className={catalogueStyles.titleOfDropdown}>Стиль</p>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input type='radio' checked>
                                </input>
                                <p>modern</p>
                            </div>
                            <p className={catalogueStyles.titleOfDropdown}>Бренд</p>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='brand1'
                                        onClick={() => this.brand1()}>
                                </input>
                                <p>Triniti</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='brand2'
                                        onClick={() => this.brand2()}>
                                </input>
                                <p>Talot</p>
                            </div>
                            <div  className={catalogueStyles.flexRadioInputs}>
                                <input  className={catalogueStyles.sortMenu__category__radio}
                                        type='radio'
                                        name='radio'
                                        id='brand3'
                                        onClick={() => this.brand3()}>
                                </input>
                                <p>Tacery</p>
                            </div>
                        </div>
                    </div>
                    <div className={catalogueStyles.productCardsArea}>
                        <div className={catalogueStyles.productCardsArea__all} id='productCardsArea__all'>
                            {this.cardsComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__chair'>
                            {this.chairComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__sofa'>
                            {this.sofaComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__bed'>
                            {this.bedComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__cabinet'>
                            {this.cabinetComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__closet'>
                            {this.closetComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__triniti} id='productCardsArea__triniti'>
                            {this.TrinitiComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__talot} id='productCardsArea__talot'>
                            {this.TalotComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__tacery} id='productCardsArea__tacery'>
                            {this.TaceryComponents}
                        </div>
                        <button className={catalogueStyles.showMoreButton}>
                            Показать еще товары
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Catalogue;