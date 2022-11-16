import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const navigate= 

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

                setAuthToken(user);

                // optional

                // const currentUser = {
                //     email: user.email
                // }

                // // jwt token
                // fetch('https://genius-car-server-rosy-delta.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('genius-token', data.token);
                //         // navigate(from, {})
                //     })

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>
                    Google
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;