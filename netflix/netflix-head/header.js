import './header.css'

export function Header(){
    return(
        <div className='header'>
            <div className='brand'>
               zoro.tv
            </div>
            <div>
                <div id='butt' className='input-group'>
                    <span className='bi bi-globe input-group-text'></span>
                    <select>
                        <option>language</option>
                        <option>English</option>
                        <option>हिंदी</option>
                        <option>తెలుగు</option>
                    </select>
                    <div className='ms-3'>
                        <button className='btn btn-success'>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}