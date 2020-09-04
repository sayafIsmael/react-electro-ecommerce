import React from 'react'

export default function GoToTop() {
    return (
        <a className="js-go-to u-go-to animated js-animation-was-fired slideInUp"
            href="#"
            data-position="{&quot;bottom&quot;: 15, &quot;right&quot;: 15 }"
            data-type="fixed"
            data-offset-top="400"
            data-compensation="#header"
            data-show-effect="slideInUp"
            data-hide-effect="slideOutDown"
            style={{ display: 'inline-block', position: 'fixed', bottom: 15, right: 15 }}>
            <span className="fas fa-arrow-up u-go-to__inner"></span>
        </a>
    )
}