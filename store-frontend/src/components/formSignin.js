import React from 'react';

const FormSignin = ({validation, setProfile}) => {
    
    const signin = async e => {
        e.preventDefault();
        let form = document.getElementById('form');

        let data = new FormData(form);

        await fetch('http://localhost:4000/api/users/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.get('email'),
                username: data.get('name'),
                password: data.get('password')
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.token);

            if(validation()){
                localStorage.setItem('name', data.get('name'));
                window.location.href = '/profile';
            }
        });
    }
    return (
        <div className="container col-5">
            <div className="card card-body mt-5">
            <form id="form" onSubmit={signin}>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="username"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="password"/>
                </div>
                <button
                 to="/profile" 
                 type="submit"
                 className="btn btn-primary btn-block">
                    Send
                </button>
            </form>
            </div>
        </div>
    );
}

export default FormSignin;