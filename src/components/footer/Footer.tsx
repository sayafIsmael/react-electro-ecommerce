import React from 'react'
import ProductWidget from "./../productwidget/ProductWidget"
import FooterNewsLetter from "./footer-news-letter/FooterNewsLetter"
import FooterSiteMap from "./footer-sitemap/FooterSiteMap"
import FooterCopyright from "./footer-copyright/FooterCopyright"

export default function Footer(){
    return (
        <footer>
            <ProductWidget/>
            <FooterNewsLetter/>
            <FooterSiteMap/>
            <FooterCopyright/>
        </footer>
    )
}