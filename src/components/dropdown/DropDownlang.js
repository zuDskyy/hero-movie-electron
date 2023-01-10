import React, { Component } from 'react'
import '../../styles/lang.btn.css'
export default function DropDownlang({languages , changeLang}) {
  
    const lang = languages;
    return (
      <div className='dropdown '>
        <img src="https://img.icons8.com/clouds/70/null/google-translate.png"/>
        <div className='dropdown-content'>
        <button onClick={() => changeLang(lang.english, "en", "ltr")}>Eng</button>
        <button onClick={() => changeLang(lang.russian , "ru", "ltr")}>RUS</button>
        <button onClick={() => changeLang(lang.georgian, "ka", "ltr")}>GEO</button>
        <button>ESP</button>
        </div>
      </div>
    )
  
}




