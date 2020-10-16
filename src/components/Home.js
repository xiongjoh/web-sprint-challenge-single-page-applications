import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(props) {

    return (
        <div className='home'>
        <section className="home-landing">
            <h2>Have your favorite food delivered!</h2>
            <Link className='linker' to='/pizza'>Order Now</Link>
        </section>
        <section className="home-delivery">

        </section>
        </div>
    )
}