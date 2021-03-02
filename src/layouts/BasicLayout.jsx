import React from 'react';

const style = {
    height: '100%'
}

const Layout = ({ children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Layout