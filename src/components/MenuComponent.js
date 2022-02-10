import { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paletas: [
                {
                  id: 0,
                  name:'Chocotorro',
                  image: 'assets/images/CHOCOTORRO.jpg',
                  category: 'Pink',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Dalmata',
                  image: 'assets/images/DALMATA.jpg',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Kinder Delice',
                  image: 'assets/images/KINDERDELICE.jpg',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'Nutella',
                  image: 'assets/images/NUTELLA.jpg',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ]
        };
    }

    render() {

        const menu = this.state.paletas.map(paleta =>{
            return(
                <div key={paleta.id} className="col-12 mt-5">   
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={paleta.image} alt={paleta.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{paleta.name}</Media>
                            <p>{paleta.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;