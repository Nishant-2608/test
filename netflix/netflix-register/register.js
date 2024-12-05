export function Register(){
    return(
        <div className="mt-3">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg">
                <input className="form-control" type="email" placeholder="your email address"/>
                <button className="btn btn-success">Get started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    )
}