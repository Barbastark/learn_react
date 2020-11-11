import React from 'react';

const SiteContent = props => {
    return (
        <main className="site-content">
            {props.children}
        </main>
    )
}

export default SiteContent;