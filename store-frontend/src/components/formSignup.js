import React from 'react';

const FormSignup = ({validation, setProfile}) => {

    const signup = async e => {
        e.preventDefault();
        let form = document.getElementById('form');

        let data = new FormData(form);

        await fetch('http://localhost:4000/api/users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.get('email'),
                username: data.get('username'),
                password: data.get('password')
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.token);

            if(validation()){
                localStorage.setItem('name', data.get('username'));
                window.location.href = '/profile';
            }
        });
    }
    return(
        <div className="container col-5">
            <div className="card card-body mt-5">
            <form id="form">
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="password"/>
                </div>
                <button onClick={signup} className="btn btn-primary btn-block">Send</button>
            </form>
            </div>
        </div>
    );
}

export default FormSignup;