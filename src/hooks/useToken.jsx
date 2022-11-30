import { useEffect, useState } from 'react'

function useToken(email) {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/jwt?email=${ email }`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.access_token) {
                        localStorage.setItem("auth_token", data.access_token);
                        setToken(data.access_token);
                    };
                })
        }
    }, [email]);
    return [token];
}

export default useToken;