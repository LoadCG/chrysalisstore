import React from 'react';
import image from './images/roupas/camisetateste.png';


const Card = () => {
    return (
        <div className="container p-2 " >
            <div className="row" >
                <div className="col-lg-4 col-md-6 mb-4" >
                    <div className="card text-center" style={{width: '18rem', backgroundColor:'#fff'}}>
                        <img src={image} className="card-img-top"/>
                        <div className="card-body ">
                            <h5 className="card-title " style={{color:'#000',}}>TITULO DO PRODUTO</h5>
                            <p className="card-text text-dark">R$ 00,00</p>
                            <a href="#" className="btn btn-outline-light text-light center" style={{backgroundColor:'#f98600'}}>CLIQUE AQUI!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;