import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [textSearch, setTextSearch] = useState("")
    let history = useNavigate();

    return (
        <div className='container-home'>
            <div className='content-top'>
                <img src='/logo192.png' alt='logo192' />
            </div>
            <div className='content-bottom'>
                <input
                    className='button-ligh'
                    onChange={e => {
                        setTextSearch(e.target.value)
                    }}
                    placeholder="Artist / Album / Title"
                />
                <div
                    className='button-search'
                    onClick={() => history("/result", {
                        replace: true,
                        state: `?text=${textSearch}`,
                    })}
                >Search</div>
            </div>
        </div >
    )
}