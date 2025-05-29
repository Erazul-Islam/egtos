import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    return (
        <div>
            <Link href={'/authentication/login'}>Login</Link>
        </div>
    );
};

export default SignUpPage;