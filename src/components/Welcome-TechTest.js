import React from 'react';
 
// Create the WelcomeTitle React component here
 
const WelcomeTitle = ({ techStuff }) => {
    console.log(techStuff)

    console.log(techStuff.user)

    const displayName = !techStuff.user ? "Welcome!" : `Welcome ${techStuff.user}`

    return (
        <div>
            { techStuff.primary ? <h1>{ displayName }</h1> :
            <h2>{ displayName }</h2> }
        </div>
    )
 
}
 
// Do not change
export default WelcomeTitle;