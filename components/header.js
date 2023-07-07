const header = document.getElementById('headerBox');

header.insertAdjacentHTML('beforeend', `
    <div class="header__container">
    <div class="header__logo">
        <a href="index.html">
            <svg id="b" class="logo" viewBox="0 0 157.96 40.22">
            <defs>
                <style>
                    .d {
                        fill: #ba7e14;
                    }

                    .e {
                        fill: #213546;
                    }
                </style>
            </defs>
            <g id="c">
                <path class="e no-animate"
                    d="m16.43,13.17c-.42,1.26-1.1,2.26-2.04,2.95-.94.69-2.09,1.03-3.42,1.03-1.92,0-3.49-.58-4.62-1.75-1.13-1.17-1.68-2.8-1.68-4.82,0-1.9.53-3.46,1.6-4.63,1.07-1.17,2.52-1.76,4.27-1.76,1.01,0,1.91.2,2.68.6.71.37,1.28.91,1.68,1.59h5.14c-.59-1.93-1.64-3.45-3.23-4.57C15.13.6,13.05,0,10.54,0c-2.06,0-3.88.45-5.47,1.34-1.59.9-2.83,2.14-3.73,3.74C.45,6.69,0,8.51,0,10.57c0,2.06.45,3.88,1.34,5.47.9,1.59,2.14,2.83,3.74,3.73,1.6.89,3.42,1.34,5.49,1.34,1.74,0,3.3-.34,4.67-1,1.38-.67,2.52-1.55,3.41-2.62.89-1.08,1.52-2.23,1.89-3.47v-4.47h-10.69v3.21h6.72l-.14.41Z" />
                <polygon class="e no-animate"
                    points="31.49 .24 24 20.97 28.77 20.97 34.26 4.71 39.74 20.97 44.58 20.97 37.08 .24 31.49 .24" />
                <path class="e no-animate"
                    d="m57.39,16.99c-1.27,0-2.3-.37-3-1.13-.7-.76-1.02-1.83-1.02-3.16V.24h-4.58v12.43c0,1.86.38,3.42,1.11,4.69.74,1.28,1.74,2.22,3.02,2.86,1.28.64,2.73.96,4.38.96,1.64,0,3.12-.33,4.44-.97,1.32-.64,2.36-1.59,3.14-2.86.77-1.26,1.17-2.81,1.17-4.67V.24h-4.58v12.46c0,1.33-.34,2.4-1.06,3.16-.72.76-1.75,1.13-3.02,1.13Z" />
                <polygon class="e no-animate"
                    points="86.27 .24 70.38 .24 70.38 3.79 76.03 3.79 76.03 20.97 80.61 20.97 80.61 3.79 86.27 3.79 86.27 .24" />
                <polygon class="e no-animate"
                    points="104 .24 104 8.6 95.3 8.6 95.3 .24 90.72 .24 90.72 20.97 95.3 20.97 95.3 12.18 104 12.18 104 20.97 108.58 20.97 108.58 .24 104 .24" />
                <rect class="e no-animate" x="114.16" y=".24" width="4.58" height="20.72" />
                <polygon class="e no-animate"
                    points="128.92 12.43 128.92 12.12 135.88 12.12 135.88 8.73 124.34 8.73 124.34 20.97 136.8 20.97 136.8 17.42 128.92 17.42 128.92 12.43" />
                <rect class="e no-animate" x="124.34" y=".24" width="12.46" height="3.55" />
                <path class="e no-animate"
                    d="m148.32,12.91l4.44,8.06h5.15l-4.65-7.99-.2-.34.38-.11c1.51-.45,2.62-1.2,3.37-2.25.77-1.06,1.14-2.25,1.14-3.62,0-1.21-.28-2.29-.84-3.26-.56-.97-1.39-1.73-2.53-2.3-1.13-.56-2.52-.85-4.17-.85h-8.41v3.7h8.11c1,0,1.81.25,2.36.79.54.53.81,1.27.81,2.13,0,.91-.26,1.67-.81,2.2-.55.54-1.36.79-2.36.79h-8.11v11.12h4.58v-8.06h1.73Z" />
                <path class="d no-animate"
                    d="m25.94,39.77c-.7-.3-1.25-.73-1.66-1.29-.41-.56-.62-1.23-.63-1.99h2.69c.04.52.22.92.55,1.22.33.3.78.45,1.36.45s1.05-.14,1.38-.42c.34-.28.5-.65.5-1.1,0-.37-.11-.68-.34-.92-.23-.24-.51-.43-.85-.57-.34-.14-.81-.29-1.41-.46-.81-.24-1.48-.48-1.98-.71-.51-.23-.95-.59-1.31-1.06-.37-.47-.55-1.1-.55-1.89,0-.74.19-1.39.56-1.94.37-.55.89-.97,1.56-1.27.67-.29,1.44-.44,2.3-.44,1.29,0,2.34.31,3.15.94.81.63,1.25,1.51,1.34,2.63h-2.77c-.02-.43-.21-.79-.55-1.07-.34-.28-.79-.42-1.36-.42-.49,0-.88.13-1.18.38-.29.25-.44.62-.44,1.1,0,.34.11.61.33.84.22.22.5.4.83.54.33.14.79.3,1.39.48.81.24,1.48.48,1.99.72.51.24.96.6,1.33,1.08.37.48.56,1.11.56,1.89,0,.67-.17,1.29-.52,1.87-.35.57-.86,1.03-1.53,1.37-.67.34-1.47.51-2.39.51-.87,0-1.66-.15-2.36-.45Z" />
                <path class="d no-animate" d="m49.19,27.56v2.03h-3.34v10.5h-2.51v-10.5h-3.34v-2.03h9.19Z" />
                <path class="d no-animate"
                    d="m59.24,27.56v7.76c0,.85.22,1.5.66,1.95.44.45,1.07.67,1.87.67s1.44-.22,1.89-.67c.44-.45.66-1.1.66-1.95v-7.76h2.53v7.74c0,1.07-.23,1.97-.69,2.7-.46.74-1.08,1.29-1.85,1.66-.77.37-1.63.56-2.58.56s-1.78-.19-2.54-.56c-.76-.37-1.36-.92-1.8-1.66-.44-.74-.66-1.64-.66-2.7v-7.74h2.51Z" />
                <path class="d no-animate"
                    d="m82.88,28.33c1,.51,1.77,1.25,2.32,2.2.54.95.82,2.06.82,3.31s-.27,2.36-.82,3.3c-.55.94-1.32,1.67-2.32,2.18-1,.52-2.16.77-3.47.77h-4.38v-12.53h4.38c1.32,0,2.47.26,3.47.77Zm-.51,8.55c.72-.72,1.08-1.73,1.08-3.03s-.36-2.33-1.08-3.06c-.72-.74-1.74-1.1-3.05-1.1h-1.78v8.28h1.78c1.32,0,2.33-.36,3.05-1.08Z" />
                <path class="d no-animate" d="m96.16,27.56v12.53h-2.51v-12.53h2.51Z" />
                <path class="d no-animate"
                    d="m106.97,39.39c-.98-.55-1.76-1.31-2.34-2.29-.57-.98-.86-2.08-.86-3.31s.29-2.32.86-3.29c.57-.98,1.35-1.74,2.34-2.29.98-.55,2.06-.83,3.23-.83s2.27.28,3.24.83,1.75,1.31,2.32,2.29c.57.98.85,2.07.85,3.29s-.28,2.34-.85,3.31c-.57.98-1.34,1.74-2.32,2.29-.98.55-2.06.83-3.23.83s-2.25-.28-3.23-.83Zm5.22-1.93c.57-.34,1.02-.83,1.35-1.46.32-.63.48-1.37.48-2.21s-.16-1.57-.48-2.2c-.32-.63-.77-1.11-1.35-1.45-.57-.33-1.24-.5-1.99-.5s-1.42.17-2,.5c-.58.34-1.03.82-1.36,1.45-.32.63-.48,1.36-.48,2.2s.16,1.57.48,2.21c.32.63.78,1.12,1.36,1.46.58.34,1.25.51,2,.51s1.42-.17,1.99-.51Z" />
                <path class="d no-animate"
                    d="m126.2,39.77c-.7-.3-1.25-.73-1.66-1.29-.41-.56-.62-1.23-.63-1.99h2.69c.04.52.22.92.55,1.22.33.3.78.45,1.36.45s1.05-.14,1.38-.42c.34-.28.5-.65.5-1.1,0-.37-.11-.68-.34-.92-.23-.24-.51-.43-.85-.57-.34-.14-.81-.29-1.41-.46-.81-.24-1.48-.48-1.98-.71-.51-.23-.95-.59-1.31-1.06-.37-.47-.55-1.1-.55-1.89,0-.74.19-1.39.56-1.94.37-.55.89-.97,1.56-1.27.67-.29,1.44-.44,2.3-.44,1.29,0,2.34.31,3.15.94.81.63,1.25,1.51,1.34,2.63h-2.77c-.02-.43-.21-.79-.55-1.07s-.79-.42-1.36-.42c-.49,0-.88.13-1.18.38-.29.25-.44.62-.44,1.1,0,.34.11.61.33.84.22.22.5.4.83.54.33.14.79.3,1.39.48.81.24,1.48.48,1.99.72.52.24.96.6,1.33,1.08.37.48.56,1.11.56,1.89,0,.67-.17,1.29-.52,1.87-.35.57-.86,1.03-1.53,1.37-.67.34-1.47.51-2.39.51-.87,0-1.66-.15-2.36-.45Z" />
            </g>
        </svg>
        </a>
    </div>
    <div id="menuMobile"  class="header__menu navtoggler">
        <ul class="header__menu-list">
            <li class="header__menu-item">
                <a href="index.html">Home</a>
            </li>
            <li class="header__menu-item">
                <a href="contact.html">Contact</a>
            </li>
        </ul>
        <svg id="closeNav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    <svg id="navtoggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
</div>

`);