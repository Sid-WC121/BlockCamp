import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
    return (
        <div className='header-container'>
            <h2 className='header-logo'>FeedBack <small>HUB</small></h2>
            <ConnectWallet accentColor='black' colorMode='light' />
        </div>
    )
}

export default Header