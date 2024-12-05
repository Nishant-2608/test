import './n-index.css';
import { Header } from '../netflix-head/header';
import { Main } from '../netflix-main/n-main';
export function NetfixIndex(){
    return(
        <div id='banner'>
            <div id='shade'>
                < Header/>
                <main>
                    <div>
                    <Main/>
                    </div>
                </main>
            </div> 
        </div>
    )
}