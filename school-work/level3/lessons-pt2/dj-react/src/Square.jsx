import { useState } from 'react'

function Square(props) {

    const styles = {
        backgroundColor: props.color
    }

    return (
        <div className='square' style={styles}></div>
    )
}

export default Square