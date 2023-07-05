import React from 'react'
import './Widgets.css'
import { FiberManualRecord, InfoOutlined } from '@mui/icons-material'

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="article">
            <div className="article__left">
                <FiberManualRecord />
            </div>
            <div className="article__right">
                <h4>{heading}</h4>
                <p> {subtitle} </p>
            </div>
        </div>
    )
  return (
    <div className='widgets' >
        <div className="widget__header">
            <h2>LinkedIn news</h2>
            <InfoOutlined />
        </div>
        {newsArticle("power over the seas", "Top article -999views-") }
        {newsArticle("Tesla gets agreement from the UK", "Top article -999views- ") }
        {newsArticle("Corona virus spreads out faster than expected", "Top article -1000views-") }
        {newsArticle("Somthing misterious going to happen to earth", "Top article -999views-") }
        {newsArticle("Hot market Jobs on south Korea see way...", "Top article -1570views-") }
    </div>
  )
}

export default Widgets