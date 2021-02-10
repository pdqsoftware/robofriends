import React from 'react';


const DeleteMe = () => {
    const id = 1
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>DELETE ME!!</h2>
                <p>This new component is not used and can be deleted after lecture 125</p>
            </div>
        </div>
    )
}

export default DeleteMe;