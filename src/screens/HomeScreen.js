import React from 'react'
import Pizza from '../Components/Pizza'
import pizzas from '../pizzasdata'

const HomeScreen = () => {
    return (
        <div>
            <div className="row">
            {pizzas.map((pizza)=>{
                return <div className="col-md-4">
                    <div>
                        <Pizza pizza={pizza}/>
                    </div>
                </div>
            })}

            </div>
            
        </div>
    )
}

export default HomeScreen
