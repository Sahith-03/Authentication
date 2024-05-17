import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Form(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

}

const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Validate the form data

    // TODO: Sign up the user

    // Redirect the user to the home page
    router.push('/');
};



module.exports = {Form,handleSubmit}