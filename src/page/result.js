import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from '../axios'

export default function Result() {
  const [modal, setModal] = useState(false)
  // const [loading, setLoading] = useState(true)
  const search = useLocation().state;
  const queryState = search.split('=')[1]
  const [textSearch, setTextSearch] = useState(queryState || null)
  const [resData, setResData] = useState([])

  const searchService = async () => {
    // setLoading(true)
    const data = await axios.get(`/search?limit=20&version=2&entity=musicVideo&term=${textSearch ? textSearch : queryState || "Mr"}`)
    setResData(data?.results)
    // setLoading(false)
  }

  useEffect(() => {
    searchService()
    return () => { }
  }, [])


  return (
    <div className='container-result'>
      <div className='header'>
        <div>
          <img
            src="menu.png"
            width='14'
            height='11'
            atl="menu"
          />
        </div>
        <img
          src="logo_header.png"
          width='72'
          height='15'
          atl="logo"
        />
        <div>
          <img
            onClick={() => setModal(true)}
            src='search.png'
            width='14'
            height='14'
            atl="search"
          />
        </div>
      </div>

      <div className='content'>
        <div className='result-text'>
          <div className='text'>Search result for :</div>
          <div className='height-result'>{textSearch}</div>
        </div>
        <div className='list-item'>
          {
            resData.map((value, index) => (
              <div key={index} className="item">
                <div className='image' style={{ backgroundImage: `url(${value.artworkUrl100})` }} ></div>
                <div className='wp-right'>
                  <div className='top-item'>
                    <div className='author'>{value.artistName}</div>
                    <div className='title'>{value.trackName}</div>
                  </div>
                  <div className='bottom-item'>
                    <div className='bottom-pop'>Pop</div>
                    <div className='currency'>
                      <img src="currency-dollar.png" atl="currency" style={{ marginRight: 6 }} height="16px" />
                      {value.collectionPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <div className='btn-load-more'>Load More</div>
      </div>

      <div id="demo-modal" className="modal" style={{ visibility: modal ? 'visible' : 'hidden', opacity: modal ? null : 0 }}>
        <div className='wp-close'>
          <img className='close' atl="close" onClick={() => setModal(false)} src='close.png' />
        </div>
        <div className="modal__content">
          <div>Search</div>
          <input
            className='button-ligh'
            onChange={e => {
              setTextSearch(e.target.value)
            }}
            value={textSearch || ""}
            defaultValue={textSearch || ""}
            placeholder="Artist / Album / Title"
          />
          <div
            className='button-search'
            onClick={() => {
              setModal(false)
              searchService()
            }}
          >Search</div>
        </div>
      </div>
    </div>
  )
}