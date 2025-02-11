import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import PropTypes from 'prop-types';

const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;