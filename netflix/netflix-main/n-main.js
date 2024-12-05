import './n-main.css'
import { Register } from '../netflix-register/register'

export function Main(){
    return(
        <div className='text-white text-center'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <div>
            <Register/>
            </div>
        </div>
    )
}