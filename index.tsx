// --- UTILITY FUNCTIONS ---
/**
 * A helper function to create DOM elements with attributes and children.
 * This is a security best practice over using `innerHTML` to prevent XSS attacks.
 * @param {string} tag - The HTML tag for the element.
 * @param {object} [attributes={}] - An object of attributes to set on the element.
 * @param {(string|Node)[]} [children=[]] - An array of child nodes or strings to append.
 * @returns {HTMLElement} The created element.
 */
const createElement = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (key === 'className') {
            element.setAttribute('class', attributes[key]);
        } else if (key === 'style' && typeof attributes[key] === 'object') {
            for (const styleKey in attributes[key]) {
                element.style[styleKey] = attributes[key][styleKey];
            }
        } else if (key.startsWith('data-')) {
            const propName = key.substring(5).replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
            element.dataset[propName] = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    }
    return element;
};

/**
 * Creates an SVG element from an HTML string.
 * This should only be used with trusted SVG strings defined in this file.
 * @param {string} svgString - The SVG markup.
 * @returns {SVGSVGElement | null}
 */
const createSVG = (svgString) => {
    const div = document.createElement('div');
    div.innerHTML = svgString;
    return div.querySelector('svg');
};


// --- ICON CONSTANTS ---
const ICONS = {
    PRINT: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>',
    FASHION: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>',
    OFFICE: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7L12 12 2 7"></path></svg>',
    SIGNAGES: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"></path><path d="M12.5 6H17l4 4-4 4H12.5"></path><path d="M11.5 12H7l-4-4 4-4h4.5"></path><path d="M12 12v9"></path></svg>',
    FLAGS: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
    STANDEES: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20v12h-20z"></path><path d="M12 15v6"></path><path d="M8 21h8"></path></svg>',
    GIFTS: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>',
    CHECK_CIRCLE: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-accent mr-2 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    CLOSE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    WHATSAPP: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>',
    EDIT: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    DELETE: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',
    QUOTE: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"></path></svg>',
    CREATIVE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    CLIENT_CENTRIC: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    PROVEN_RESULTS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88"></polyline></svg>',
    CLIENT_LOGO: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-70"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"></path></svg>',
    EMAIL: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    PHONE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    FACEBOOK: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
    INSTAGRAM: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 8 0zm0 1.442a6.556 6.556 0 0 1 3.25 0c.806.035 1.22.166 1.554.292.42.164.69.375.962.646.272.272.482.542.646.962.126.334.257.748.292 1.554A6.554 6.554 0 0 1 14.558 8a6.558 6.558 0 0 1 0 3.25c-.035.806-.166 1.22-.292 1.554a2.478 2.478 0 0 1-.646.962c-.272.272-.542.482-.962.646-.334.126-.748.257-1.554.292A6.554 6.554 0 0 1 8 14.558a6.558 6.558 0 0 1-3.25 0c-.806-.035-1.22-.166-1.554-.292a2.479 2.479 0 0 1-.962-.646c-.272-.272-.482-.542-.646-.962-.126-.334-.257-.748-.292-1.554A6.554 6.554 0 0 1 1.442 8a6.558 6.558 0 0 1 0-3.25c.035-.806.166-1.22.292-1.554.164-.42.375-.69.646-.962.272-.272.542-.482.962-.646.334-.126.748.257 1.554-.292A6.554 6.554 0 0 1 8 1.442zM8 4.25A3.75 3.75 0 1 0 8 11.75 3.75 3.75 0 0 0 8 4.25zM8 9.5A1.5 1.5 0 1 1 8 6.5a1.5 1.5 0 0 1 0 3zM12.5 3.1a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25z"/></svg>',
    TWITTER: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>',
    YOUTUBE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M10.805 7.458c.27.152.27.524 0 .676l-4.5 2.54A.48.48 0 0 1 5.5 10.33V5.67a.48.48 0 0 1 .805-.347l4.5 2.135z"/><path d="M15.625 4.312a2.003 2.003 0 0 0-1.414-1.414C12.812 2.5 8 2.5 8 2.5s-4.813 0-6.21.398a2.003 2.003 0 0 0-1.414 1.414C.001 5.718 0 8 0 8s0 2.282.377 3.688a2.003 2.003 0 0 0 1.414 1.414C3.187 13.5 8 13.5 8 13.5s4.813 0 6.21-.398a2.003 2.003 0 0 0 1.414-1.414C15.999 10.282 16 8 16 8s0-2.282-.375-3.688z"/></svg>',
    TIKTOK: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>',
    THREADS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.17,11.58c0,1.25-.43,2.33-1.28,3.25s-1.9,1.38-3.13,1.38c-1.39,0-2.58-.61-3.54-1.83L4.8,14.77c1.19,1.4,2.83,2.1,4.92,2.1,1.93,0,3.48-.56,4.64-1.68,1.16-1.12,1.74-2.62,1.74-4.52,0-1.88-.63-3.47-1.88-4.78s-2.76-1.96-4.51-1.96c-2.15,0-3.83,.79-5.04,2.36l.42-.16c.33-.13,.67-.2,1.03-.2,.55,0,1.02,.17,1.4,.51,.39,.34,.58,.82,.58,1.43,0,.5-.17,1.02-.52,1.55s-.77,.8-1.28,.8c-.53,0-1-.21-1.39-.64s-.58-.99-.58-1.69c0-1.21,.53-2.2,1.59-2.98,1.06-.78,2.4-1.17,4.02-1.17,1.88,0,3.41,.6,4.59,1.81,1.18,1.2,1.77,2.77,1.77,4.68Z"/></svg>',
    TELEGRAM: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>',
    SEARCH: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path></svg>',
    CONSULTATION: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    DESIGN: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    PRODUCTION: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    DELIVERY: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    CHEVRON_DOWN: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
};

// --- CONSTANTS AND STATE MANAGEMENT ---

// --- ADMIN CREDENTIALS ---
// To change the admin login, update these values.
const ADMIN_USERNAME = 'inkspire';
const ADMIN_PASSWORD = 'password123';


const initialProductsData = [
    { name: 'Premium Business Cards (x100)', price: 'LKR 2,500', description: '350gsm matte laminated cards with sharp, vibrant colors.', image: 'https://images.unsplash.com/photo-1619454018014-a3c3b2f5b61c?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'A5 Flyers (x500)', price: 'LKR 8,000', description: 'High-quality 150gsm gloss paper, perfect for promotions.', image: 'https://images.unsplash.com/photo-1599310219803-7023051005a9?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Roll-Up Banner (Standard)', price: 'LKR 12,500', description: 'Durable, portable, and easy to set up for any event.', image: 'https://images.unsplash.com/photo-1611754407519-281b1e96a4e3?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Custom Mugs (x10)', price: 'LKR 4,500', description: 'Personalized ceramic mugs, ideal for corporate branding.', image: 'https://images.unsplash.com/photo-1611937553538-4a4a5b5a2a2a?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'A4 Branded Notepads (x25)', price: 'LKR 6,000', description: 'Professionally designed notepads for office or client use.', image: 'https://images.unsplash.com/photo-1583485312954-07318a38a1e8?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Event T-Shirts (x20)', price: 'LKR 15,000', description: 'High-quality cotton t-shirts with custom screen printing.', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Die-Cut Stickers (x100)', price: 'LKR 3,000', description: 'Custom shape vinyl stickers, waterproof and durable.', image: 'https://images.unsplash.com/photo-1621987569796-1c223c52a0d9?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Canvas Tote Bags (x50)', price: 'LKR 20,000', description: 'Eco-friendly tote bags with your custom design printed.', image: 'https://images.unsplash.com/photo-1572196242099-61c16b4457d4?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Wall Calendars (A3, x10)', price: 'LKR 15,000', description: '12-page calendar, perfect for corporate new year gifts.', image: 'https://images.unsplash.com/photo-1606823354313-a4a90f84570c?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Presentation Folders (x50)', price: 'LKR 9,500', description: 'A4 size folders with pockets, printed on 300gsm card.', image: 'https://images.unsplash.com/photo-1596496098-502624c9ae43?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Hardcover Journals (x10)', price: 'LKR 7,500', description: 'A5 hardcover journals with debossed or printed logos.', image: 'https://images.unsplash.com/photo-1516146553225-29e4e73dc44a?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Embroidery Patches (x100)', price: 'LKR 10,000', description: 'High-quality custom embroidered patches for apparel.', image: 'https://images.unsplash.com/photo-1632723382362-ac8d728b9d3e?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'PVC ID Cards (x50)', price: 'LKR 5,000', description: 'Durable, credit-card sized PVC cards for staff identification.', image: 'https://images.unsplash.com/photo-1634986666675-697a82e2d832?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Branded Paper Bags (x100)', price: 'LKR 7,000', description: 'Custom printed paper bags for retail and events.', image: 'https://images.unsplash.com/photo-1591561934423-07c47c0b348b?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Custom Lanyards (x100)', price: 'LKR 6,500', description: 'Satin finish lanyards with full-color sublimation printing.', image: 'https://images.unsplash.com/photo-1629907490279-a78b871c5a4a?q=80&w=400&h=300&auto=format&fit=crop' },
    { name: 'Acrylic Keychains (x100)', price: 'LKR 9,000', description: 'Laser-cut acrylic keychains with your custom design.', image: 'https://images.unsplash.com/photo-1601813411438-518b9a1b15a6?q=80&w=400&h=300&auto=format&fit=crop' }
];

const initialSiteData = {
    images: {
        logo: 'https://i.imgur.com/gJeS3c4.png',
        hero: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&h=600&auto=format&fit=crop',
        about: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&h=600&auto=format&fit=crop',
    },
    projects: [
      { category: 'Print & Marketing', title: 'Kattankudy Municipal Council Brochures', description: 'Designed and printed informative brochures for local government initiatives.', image: 'https://images.unsplash.com/photo-1599946347372-f8a63a56d98d?q=80&w=600&h=400&auto=format&fit=crop' },
      { category: 'Stationery & Branding', title: 'Batticaloa Cafe Menu Printing', description: 'Created durable, beautifully designed menus for a popular local cafe.', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&h=400&auto=format&fit=crop' },
      { category: 'Print & Marketing', title: 'Arugam Bay Surf Season Flyers', description: 'Produced vibrant, eye-catching flyers to promote events during the surf season.', image: 'https://images.unsplash.com/photo-1582287232363-5c82a55a0242?q=80&w=600&h=400&auto=format&fit=crop' },
      { category: 'Corporate Gifts', title: 'Pasikudah Resort Welcome Kit Printing', description: 'Assembled and printed premium welcome kits for a luxury beach resort.', image: 'https://images.unsplash.com/photo-1614036125032-005667425934?q=80&w=600&h=400&auto=format&fit=crop' },
      { category: 'Event Branding', title: 'Eastern University Event Banners', description: 'Delivered large-format banners and branding materials for a university event.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&h=400&auto=format&fit=crop' },
      { category: 'Signages & Backdrops', title: 'Batticaloa Food Festival Backdrop', description: 'Constructed a large, themed backdrop for the city\'s annual food festival.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51725?q=80&w=600&h=400&auto=format&fit=crop' },
    ],
    team: [
        { name: 'Alex Johnson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop' },
        { name: 'Samantha Lee', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop' },
    ],
    testimonials: [
        { quote: "INK Spire transformed our local cafe's branding with their incredible menu and flyer designs. The quality was exceptional, and our customers in Batticaloa love the new look!", name: 'Sahan Perera', title: 'Owner, The Lighthouse Cafe', image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=100&h=100&auto=format&fit=crop' },
        { quote: "Their team handled all the branding for our annual tech conference in Colombo, from banners to corporate gifts. Professional, creative, and delivered on time. Highly recommended.", name: 'Fathima Rauf', title: 'Event Coordinator, CodeFest Sri Lanka', image: 'https://images.unsplash.com/photo-1619208479987-a3e9057b5a2b?q=80&w=100&h=100&auto=format&fit=crop' },
        { quote: "We needed high-quality custom apparel for our new clothing line. INK Spire's textile printing service was flawless. The colors are vibrant and the fabric quality is excellent.", name: 'Rajiv Kumar', title: 'Founder, Kandy Trends', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop' },
        { quote: "The team at INK Spire delivered stunning standees and backdrops for our hotel launch in Galle. Their attention to detail and creative input was invaluable.", name: 'Anusha Silva', title: 'Marketing Manager, Galle Fort Hotel', image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=100&h=100&auto=format&fit=crop' },
        { quote: "For our resort in Trincomalee, we needed durable and beautiful outdoor signage. INK Spire exceeded our expectations with weather-resistant signs that perfectly match our brand.", name: 'David Ratnayake', title: 'General Manager, Trinco Blu', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop' },
    ],
    process: [
        { icon: 'CONSULTATION', title: 'Consultation & Quote', description: "We start by understanding your vision, requirements, and budget to provide a tailored quote and timeline." },
        { icon: 'DESIGN', title: 'Design & Proofing', description: "Our creative team designs the artwork. You'll receive a digital proof for approval before we proceed to print." },
        { icon: 'PRODUCTION', title: 'Production', description: 'Once approved, your project moves to our state-of-the-art production facility where we bring it to life with precision.' },
        { icon: 'DELIVERY', title: 'Delivery & Follow-up', description: 'We ensure your finished products are delivered safely and on time. We follow up to guarantee your complete satisfaction.' }
    ],
    faq: [
        { question: 'What are your business hours?', answer: 'Our office is open from 9:00 AM to 6:00 PM, Monday through Saturday. We are closed on Sundays and public holidays.' },
        { question: 'What file formats do you accept for printing?', answer: 'We prefer print-ready PDF files. We also accept Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEGs or PNGs. For best results, please ensure your files have a 300 DPI resolution and are in CMYK color mode.' },
        { question: 'What is your typical turnaround time?', answer: 'Turnaround time varies depending on the project complexity and quantity. Standard business cards take 2-3 business days, while larger projects like banners may take 5-7 business days. We will provide a precise timeline with your quote.' },
        { question: 'Can you ship orders outside of the Eastern Province?', answer: 'Yes, we offer island-wide delivery across Sri Lanka. Shipping charges will be calculated based on your location and the weight of the order.' },
        { question: 'Do you offer design services?', answer: 'Absolutely! Our talented team of designers can help you create stunning artwork from scratch or refine your existing designs. Just let us know your requirements during the consultation.' }
    ]
};

let state = {
    siteData: JSON.parse(JSON.stringify(initialSiteData)),
    productsData: JSON.parse(JSON.stringify(initialProductsData)),
    draftSiteData: null,
    draftProductsData: null,
    searchableData: [],
    testimonialIntervalId: null,
    isAdmin: false,
    editingContext: null,
};

const servicesData = {
    print: { title: 'Print & Marketing Services', data: { 'Stationery & Corporate Identity': ['Business Cards', 'Letterheads', 'Envelopes', 'Folders', 'Notepads', 'Notebook & Journal', 'Binding', 'Thank You Cards', 'Certificates', 'Calendars', 'Hang Tags'], 'Brochures & Flyers': ['Brochures', 'Flyers', 'Booklets & Catalogues', 'Seals', 'Self Ink Stamps', 'Wax Seal', 'Embossing Seal', 'Voucher Books', 'Invoice Books', 'Receipt Vouchers'], 'Stickers': ['Die Cut Stickers', 'Print & Cut Stickers', 'Paper Sticker Gloss / Matt', 'Transparent Stickers', 'PVC Stickers White', 'Epoxy Stickers', 'Windshield Stickers', 'Stencil Stickers', 'Foil Stickers', 'Metal Stickers', 'Embossing Seal Stickers', 'Hologram Stickers', 'Kraft Paper Stickers'], 'Crowd Promotion': ['Compliment Slips', 'Tickets & Coupons', 'Scratch & Win Coupons', 'Tent Cards', 'Car Mat', 'Table Mat', 'CD / DVD', 'CD / DVD Printing', 'CD / DVD Covers'] } },
    fashion: { title: 'Fashion & Textile Services', data: { 'Fashion': ['Scarf', 'Sheila', 'Bandana', 'Hair Scarf', 'Bag Scarf', 'Abaya', 'Sarong', 'Beach Shorts', 'Pocket Handkerchief', 'Woven Fabric Labels', 'Scrunchie'], 'Soft Furnishing': ['Curtains', 'Blanket', 'Decorative Pillows', 'Tiny Cushion', 'Floor Cushion', 'Bolster Pillow', 'Bean Bags', 'Fabric Wrap'], 'Pouches': ['Velvet Pouches', 'Tote Pouches', 'Silk Sensation Pouches', 'Zipper Pouches'], 'Lifestyle & Dining': ['Armband', 'Sash', 'Hand Umbrella', 'Beach Towel', 'Apron', 'Face Masks', 'Placemat', 'Table Napkin', 'Dinning Table Cloth'], 'HOT Textile Roll': ['Fabric Range', 'Haute Couture', 'Fashion Wear', 'Monroe Satin', 'Patterns', 'Floral', 'Geometric', 'Landscape'] } },
    office: { title: 'Office & Store Branding Services', data: { 'Frosted Sticker': ['Reverse Cut', 'Standard Cut', 'Printed', 'Blank'], 'Window Branding': ['Vinyl Lettering', 'Graphics', 'One Way Vision Sticker', 'Window Films'], 'Wall Branding': ['Vinyl Lettering', 'Sticker', 'Decal'], 'Wall Décor': ['Bedroom Wallpaper', 'Living Room Wallpaper'], 'Wall Frames': ['Canvas', 'Wooden', 'Acrylic', 'Metal Art'], 'POS Display Stands': ['Floor Display Gondola', '3D Display Stand', 'Counter Top Stand'], 'Posters': ['Large Posters', 'Wall Mounted', 'Hanging Posters'], 'Magnetic Sheet': ['Car Magnets', 'Fridge Magnets', 'Magnetic Wall', 'Domed Magnet'], 'Vehicle Graphics': ['Car Branding', 'Boat/Yacht Branding'], 'Repositionable Cling': ['Clear Static Cling', 'Shape Cut Out Cling'], 'Floor Sticker': ['Direction Sticker', 'Footprint Floor Sticker'], 'Workplace': ['Ceremonial Ribbon', 'Counter Partition'] } },
    signages: { title: 'All Signages Services', data: { 'Sign Board / Signage': ['3D Signage (Unlit)', 'Backlit Signage', 'Outlit 3D Signage', 'Flex Face Signage', 'Frontlit Signage', 'Push Through Signage', 'Neon Signage'], 'Name Plate': ['Metal Name Plates', 'Acrylic Name Plates', 'Wooden Name Plates', 'Table Top Signage'], 'Light Box Signages': ['Flex Face Signs (Light Box)', 'Fabric Light Box', 'Acrylic Signage Board', 'Poster Light Box'], 'Self Standing Letters': ['Metal Letters', 'Wooden Letters', 'Acrylic Letters', 'Forex / Foam Letters'], 'Direction / Wayfinding Signage': ['Wall Mounted Signage', 'Hanging Signage', 'Self Standing Signage', 'Directory Signage'], 'Labels & Safety Signage': ['Traffolyte / PVC / Acrylic Labels', 'Metal Labels', 'Wooden Labels', 'Safety Signage', 'Floor Sign / Signage'] } },
    flags: { title: 'All Flags Services', data: { 'Event & Branding Flags': ['Sail Flags', 'Tear Drop Flags', 'L Shape Flags', 'Blade Flags', 'Telescopic Flags'], 'Flag Bases & Accessories': ['Concrete Base', 'Cross Base', 'Water Base', 'Advertising Flags'], 'Office & Outdoor Flags': ['Table Flags (Standard & Royal)', 'Conference Flags (Standing & Hanging)', 'Hoisting Flags', 'Wall Mounted Flags', 'Stadium Flags', 'Festival Flags'], 'Event & Decorative Gear': ['Pole Flags', 'Hand Flags', 'Finish Line Banners', 'Body Flags', 'Fan Scarves', 'Car Flags', 'Dashboard Flags', 'Pennant Flags', 'Bunting Flags'] } },
    standees: { title: 'Standees and Backdrops Services', data: { 'Standees': ['Roll-Up Banners', 'X-Stand Banners', 'L-Stand Banners', 'Pop-Up A-Frame Banners', 'Custom Cutout Standees'], 'Backdrops': ['Pop-Up Displays', 'Fabric Tube Displays', 'Step & Repeat Banners', 'Stage Backdrops', 'Photo Booth Backdrops'], 'Accessories & Frames': ['Banner Stand Hardware', 'Adjustable Backdrop Frames', 'Travel Cases & Bags', 'LED Lighting Kits'] } },
    gifts: { title: 'Corporate Gifts & Bags Services', data: { 'Office Essentials': ['Pens', 'PU Notebooks', 'PU Organizer', 'Corporate Gift Sets', 'Mouse Pad'], 'Drinkware': ['Mugs', 'Bottles', 'Tumblers', 'Coaster', 'Coffee Stencil'], 'Apparel': ['T-Shirt', 'Jersey', 'Caps', 'Neck Tie', 'Safety Vest', 'Embroidery Patches', 'Silicone Labels'], 'Event Disposables': ['Napkin', 'Paper Cup', 'Water Bottle Label'], 'Trade Shows & Events': ['Wristband', 'Lanyards', 'ID Cards & Badge Reel', 'Name Badges', 'Lapel Pins', 'Keychain', 'Silicone Fridge Magnet'], 'Tech Products': ['USB', 'Power Banks', 'Bluetooth Speakers', 'Charging Cables'], 'Shopping/Promotional Bags': ['Paper Bag', 'Kraft Bag', 'Jute Bag', 'Tote Bag', 'Canvas Bag', 'Drawstring Bag', 'Cotton String Bag'] } }
};

function loadData() {
    state.isAdmin = sessionStorage.getItem('isAdminLoggedIn') === 'true';

    const savedSiteData = localStorage.getItem('inkSpireSiteData');
    if (savedSiteData) {
        state.siteData = JSON.parse(savedSiteData);
    }
    
    const savedProducts = localStorage.getItem('inkSpireProducts');
    if (savedProducts) {
        state.productsData = JSON.parse(savedProducts);
    }

    if(state.isAdmin) {
        state.draftSiteData = JSON.parse(JSON.stringify(state.siteData));
        state.draftProductsData = JSON.parse(JSON.stringify(state.productsData));
    }
}

function saveData() {
    localStorage.setItem('inkSpireSiteData', JSON.stringify(state.siteData));
    localStorage.setItem('inkSpireProducts', JSON.stringify(state.productsData));
}

const getCurrentData = () => {
    if (state.isAdmin && state.draftSiteData) {
        return {
            siteData: state.draftSiteData,
            productsData: state.draftProductsData
        };
    }
    return {
        siteData: state.siteData,
        productsData: state.productsData
    };
};


// --- RENDER FUNCTIONS ---
function createSearchIndex() {
    state.searchableData = [];
    const { productsData, siteData } = getCurrentData();

    // Index products
    productsData.forEach(product => {
        state.searchableData.push({ type: 'Product', title: product.name, description: product.description, link: '#products' });
    });

    // Index services
    for (const serviceId in servicesData) {
        const service = servicesData[serviceId];
        state.searchableData.push({ type: 'Service', title: service.title, description: `A wide range of services including ${Object.keys(service.data).join(', ')}.`, link: '#services' });
        for (const category in service.data) {
            service.data[category].forEach(item => {
                state.searchableData.push({ type: 'Service Item', title: item, description: `${category} under ${service.title}`, link: '#services' });
            });
        }
    }

    // Index process steps
    siteData.process.forEach(step => {
        state.searchableData.push({ type: 'Process', title: step.title, description: step.description, link: '#process' });
    });

    // Index FAQs
    siteData.faq.forEach(item => {
        state.searchableData.push({ type: 'FAQ', title: item.question, description: item.answer, link: '#faq' });
    });
}

function renderAllSections() {
    renderStaticImages();
    renderServices();
    renderProducts();
    renderProjects();
    renderWhyChooseUs();
    renderPrintingProcess();
    renderTeam();
    renderClients();
    renderTestimonials();
    renderFAQ();
    renderContactCTA();
    renderContactSection();
    renderFooter();
    createSearchIndex();
    updateAdminUI();
}

function renderStaticImages() {
    const { siteData } = getCurrentData();
    const { logo, hero, about } = siteData.images;
    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) headerLogo.setAttribute('src', logo);

    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) footerLogo.setAttribute('src', logo);

    const heroImage = document.getElementById('hero-image');
    if (heroImage) heroImage.setAttribute('src', hero);
    
    const aboutImage = document.getElementById('about-image');
    if (aboutImage) aboutImage.setAttribute('src', about);
}

function renderServices() {
    const container = document.getElementById('services');
    if (!container) return;
    container.innerHTML = ''; 

    const mainServices = [
        { id: 'print', icon: ICONS.PRINT, title: 'Print & Marketing', description: 'Comprehensive printing solutions and marketing materials to elevate your brand presence, from business cards to large-scale campaigns.'},
        { id: 'fashion', icon: ICONS.FASHION, title: 'Fashion & Textile', description: 'Custom designs and high-quality printing for apparel and textiles, perfect for fashion lines, uniforms, and promotional wear.'},
        { id: 'office', icon: ICONS.OFFICE, title: 'Office & Store Branding', description: 'Transform your commercial spaces with cohesive branding solutions, including wall graphics, window decals, and interior decor.'},
        { id: 'signages', icon: ICONS.SIGNAGES, title: 'All Signages', description: 'Eye-catching and durable signages of all types, including illuminated signs, wayfinding systems, and promotional boards.'},
        { id: 'flags', icon: ICONS.FLAGS, title: 'All Flags', description: 'Custom-printed flags for events, promotions, and corporate displays, available in various sizes and materials.'},
        { id: 'standees', icon: ICONS.STANDEES, title: 'Standees and Backdrops', description: 'Portable and professional standees and backdrops for trade shows, conferences, and photo shoots that make a big impact.'},
        { id: 'gifts', icon: ICONS.GIFTS, title: 'Corporate Gifts & Bags', description: 'A wide range of customizable corporate gifts and bags that leave a lasting impression on clients and employees.'},
    ];

    const serviceCards = mainServices.map((service, index) => {
        const iconContainer = createElement('div', { className: 'text-brand-accent mb-4 transition-transform duration-300 group-hover:rotate-12' }, [createSVG(service.icon)]);
        
        return createElement('div', {
            className: 'bg-brand-secondary p-8 rounded-lg shadow-lg hover:shadow-brand-accent/20 border border-transparent hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden flex flex-col',
            style: { animationDelay: `${index * 0.1}s` }
        }, [
            createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-pan-fast [background-size:200%_200%]' }),
            createElement('div', { className: 'relative z-10 flex-grow' }, [
                iconContainer,
                createElement('h3', { className: 'text-xl font-bold text-white mb-3' }, [service.title]),
                createElement('p', { className: 'text-gray-400 leading-relaxed' }, [service.description])
            ]),
            createElement('div', { className: 'relative z-10 mt-6' }, [
                createElement('button', {
                    'data-modal-id': service.id,
                    className: 'font-semibold text-brand-accent hover:text-yellow-300 transition-colors duration-300'
                }, ['View Details →'])
            ])
        ]);
    });
    
    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Services']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['What We Do']),
            createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['We offer a complete suite of printing and branding services to bring your vision to life in the physical world.'])
        ]),
        createElement('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' }, serviceCards)
    ]);
    
    container.appendChild(content);

    document.querySelectorAll('.service-modal').forEach(m => m.remove());
    Object.entries(servicesData).forEach(([id, content]) => {
        const modal = createServiceModal(id, content);
        document.body.appendChild(modal);
    });
}

function createServiceModal(id, content) {
  const listItems = Object.entries(content.data).map(([category, items]) => {
    const categoryItems = (Array.isArray(items) ? items : []).map(item =>
      createElement('li', { className: 'flex items-start text-gray-300' }, [
        createSVG(ICONS.CHECK_CIRCLE),
        createElement('span', {}, [item])
      ])
    );
    return createElement('div', {}, [
      createElement('h4', { className: 'text-lg font-semibold text-brand-accent mb-3 border-b border-brand-accent/20 pb-2' }, [category]),
      createElement('ul', { className: 'space-y-2' }, categoryItems)
    ]);
  });

  return createElement('div', { id: `modal-${id}`, className: 'service-modal hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in' }, [
    createElement('div', { className: 'bg-brand-secondary rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up modal-content' }, [
      createElement('div', { className: 'flex justify-between items-center mb-6' }, [
        createElement('h3', { className: 'text-2xl md:text-3xl font-bold text-white' }, [content.title]),
        createElement('button', { className: 'close-modal-btn text-gray-400 hover:text-white transition-colors' }, [
          createSVG(ICONS.CLOSE)
        ])
      ]),
      createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6' }, listItems)
    ])
  ]);
}

function renderProducts() {
    const container = document.getElementById('products');
    if (!container) return;
    container.innerHTML = '';
    
    const { productsData } = getCurrentData();
    const productList = createElement('div', { id: 'product-list', className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' });
    productsData.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productList.appendChild(productCard);
    });

    const header = createElement('div', { className: 'text-center mb-16' }, [
        createElement('div', { className: 'flex justify-center items-center gap-4 mb-4' }, [
            createElement('button', { id: 'admin-auth-btn', className: 'bg-brand-purple text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors' }, ['Admin Login'])
        ]),
        createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Products']),
        createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Products & Pricing']),
        createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['Select a product to start your order. We offer high-quality printing solutions for all your needs.'])
    ]);

    if (state.isAdmin) {
        header.appendChild(createElement('button', { id: 'add-product-btn', className: 'mt-6 bg-brand-accent text-brand-primary font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors' }, ['Add New Product']));
    }

    container.appendChild(createElement('div', { className: 'container mx-auto px-6' }, [header, productList]));
}

function createProductCard(product, index) {
  const cardContent = [
    createElement('div', { className: 'relative h-48 group' }, [
      createElement('img', { src: product.image, alt: product.name, className: 'w-full h-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110' })
    ]),
    createElement('div', { className: 'p-6 flex flex-col flex-grow relative' }, [
      createElement('h3', { className: `text-xl font-bold text-white mb-2 ${state.isAdmin ? 'pr-12' : ''}` }, [product.name]),
      createElement('p', { className: 'text-gray-400 leading-relaxed mb-4 flex-grow' }, [product.description]),
      createElement('div', { className: 'mt-auto' }, [
        createElement('p', { className: 'text-2xl font-bold text-brand-accent mb-4' }, [product.price]),
        createElement('a', {
          href: `https://wa.me/+940742200156?text=${encodeURIComponent(`Hello INK Spire, I'm interested in ordering the "${product.name}". Can we discuss the details?`)}`,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'inline-flex items-center justify-center w-full bg-brand-accent text-brand-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105'
        }, [
          'Order on WhatsApp',
          createElement('span', { className: 'ml-2 w-5 h-5' }, [createSVG(ICONS.WHATSAPP)])
        ])
      ])
    ])
  ];

  if (state.isAdmin) {
    const imageContainer = cardContent[0];
    const editImageBtn = createElement('button', {
      'data-image-id': `product-${index}`,
      className: 'edit-image-btn absolute top-2 right-2 z-20 w-10 h-10 bg-blue-600/80 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:bg-blue-500 hover:scale-110 opacity-0 group-hover:opacity-100',
      title: 'Edit Image'
    }, [createSVG(ICONS.EDIT)]);
    imageContainer.appendChild(editImageBtn);

    const contentContainer = cardContent[1];
    const editControls = createElement('div', { className: 'absolute top-4 right-4 z-10 flex flex-col gap-2' }, [
      createElement('button', {
        className: 'edit-btn p-2 bg-blue-600 rounded-full hover:bg-blue-500',
        'data-type': 'product',
        'data-index': index.toString(),
        title: 'Edit Product Details'
      }, [createSVG(ICONS.EDIT)]),
      createElement('button', {
        className: 'delete-btn p-2 bg-red-600 rounded-full hover:bg-red-500',
        'data-type': 'product',
        'data-index': index.toString(),
        title: 'Delete Product'
      }, [createSVG(ICONS.DELETE)])
    ]);
    contentContainer.appendChild(editControls);
  }

  return createElement('div', {
    className: 'group',
    style: { animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`, opacity: '0' }
  }, [
    createElement('div', {
      className: 'relative flex flex-col h-full bg-brand-secondary rounded-lg shadow-lg border border-transparent hover:border-brand-accent/30 transition-all duration-300 ease-in-out group-hover:shadow-brand-accent/20 group-hover:-translate-y-2'
    }, cardContent)
  ]);
}

function renderProjects() {
    const container = document.getElementById('projects');
    if (!container) return;
    container.innerHTML = '';
    
    const { siteData } = getCurrentData();
    const projectCards = siteData.projects.map((project, index) => createProjectCard(project, index));

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Local Impact']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Featured Printing Projects']),
            createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ["Take a look at some of the high-quality printing work we've delivered for our clients in the Eastern Province."])
        ]),
        createElement('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' }, projectCards)
    ]);
    container.appendChild(content);
}

function createProjectCard(project, index) {
  const card = createElement('div', {
    className: 'bg-brand-secondary rounded-lg shadow-lg animate-fade-in-up border border-transparent hover:border-brand-accent/50 transition-all duration-300 flex flex-col overflow-hidden group',
    style: { animationDelay: `${index * 0.1}s` }
  }, [
    createElement('div', { className: 'relative overflow-hidden h-48 group' }, [
      createElement('img', { src: project.image, alt: project.title, className: 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' })
    ]),
    createElement('div', { className: 'p-8 flex flex-col flex-grow relative' }, [
      createElement('p', { className: 'text-sm font-medium text-brand-accent uppercase tracking-wider' }, [project.category]),
      createElement('h3', { className: 'text-2xl font-bold mt-2 text-white' }, [project.title]),
      createElement('p', { className: 'text-gray-400 mt-3 leading-relaxed flex-grow' }, [project.description]),
      createElement('div', { className: 'mt-6' }, [
        createElement('a', { href: '#', className: 'font-semibold text-brand-accent hover:text-yellow-300 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0' }, ['View Project →'])
      ])
    ])
  ]);

  if (state.isAdmin) {
    const imageContainer = card.querySelector('.relative.overflow-hidden');
    if (imageContainer) {
        imageContainer.appendChild(
            createElement('button', {
                'data-image-id': `project-${index}`,
                className: 'edit-image-btn absolute top-2 right-2 z-20 w-10 h-10 bg-blue-600/80 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:bg-blue-500 hover:scale-110 opacity-0 group-hover:opacity-100',
                title: 'Edit Image'
            }, [createSVG(ICONS.EDIT)])
        );
    }
     const contentContainer = card.querySelector('.p-8');
     if (contentContainer) {
        contentContainer.appendChild(
            createElement('button', {
                className: 'edit-btn absolute top-4 right-4 p-2 bg-blue-600 rounded-full hover:bg-blue-500 z-10',
                'data-type': 'project', 'data-index': index.toString(), title: 'Edit Project Details'
            }, [createSVG(ICONS.EDIT)])
        );
     }
  }

  return card;
}

function renderTeam() {
    const container = document.getElementById('team');
    if (!container) return;
    container.innerHTML = '';
    
    const { siteData } = getCurrentData();

    const teamCards = siteData.team.map((member, index) => {
        const card = createElement('div', {
            className: 'text-center bg-brand-secondary p-8 rounded-lg shadow-lg border border-transparent hover:border-brand-accent/50 transition-all duration-300 relative',
            style: { animation: `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`, opacity: '0' }
        }, [
            createElement('div', { className: 'relative w-32 h-32 mx-auto group' }, [
                createElement('img', { src: member.image, alt: member.name, className: 'w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-purple/50' })
            ]),
            createElement('h3', { className: 'text-xl font-bold text-white mt-4' }, [member.name]),
            createElement('p', { className: 'text-brand-accent font-semibold' }, [member.role])
        ]);

        if (state.isAdmin) {
            const imageContainer = card.querySelector('.relative.group');
            if (imageContainer) {
                imageContainer.appendChild(
                    createElement('button', {
                        'data-image-id': `team-${index}`,
                        className: 'edit-image-btn absolute top-0 right-0 z-20 w-10 h-10 bg-blue-600/80 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:bg-blue-500 hover:scale-110 opacity-0 group-hover:opacity-100',
                        title: 'Edit Image'
                    }, [createSVG(ICONS.EDIT)])
                );
            }
            card.appendChild(
                createElement('button', {
                    className: 'edit-btn absolute top-4 right-4 p-2 bg-blue-600 rounded-full hover:bg-blue-500',
                    'data-type': 'team', 'data-index': index.toString(), title: 'Edit Team Member'
                }, [createSVG(ICONS.EDIT)])
            );
        }
        return card;
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Experts']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Meet the Creative Minds']),
            createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['The passionate people behind our innovative digital solutions.'])
        ]),
        createElement('div', { className: 'max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center' }, teamCards)
    ]);
    container.appendChild(content);
}

function renderTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;
    container.innerHTML = '';

    const content = createElement('div', { className: 'container mx-auto px-6 relative z-10' }, [
        createElement('div', { className: 'text-center mb-16' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['What Our Clients Say']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Real Feedback from Valued Partners'])
        ]),
        createElement('div', { className: 'max-w-3xl mx-auto group', style: { perspective: '1200px' } }, [
            createElement('div', { id: 'testimonial-card', className: 'relative text-center bg-brand-secondary p-8 md:p-12 rounded-lg shadow-2xl border border-brand-accent/20 transition-transform duration-500 ease-in-out group-hover:rotate-y-1 group-hover:-rotate-x-1', style: { transformStyle: 'preserve-3d' } }, [
                createElement('div', { id: 'testimonial-content' }),
                createElement('div', { className: 'absolute bottom-6 left-12 right-12' }, [
                    createElement('div', { id: 'testimonial-dots', className: 'flex items-center justify-center space-x-2 mt-8' }),
                    createElement('div', { className: 'absolute -bottom-4 left-0 w-full h-1 bg-gray-700 rounded-full overflow-hidden' }, [
                        createElement('div', { id: 'testimonial-progress', className: 'h-full bg-brand-accent' })
                    ])
                ])
            ])
        ])
    ]);
    
    const quote1 = createElement('div', {className: 'absolute -top-10 -left-10 text-brand-primary opacity-5 text-9xl z-0 transform -rotate-12'}, [createSVG(ICONS.QUOTE)]);
    const quote2 = createElement('div', {className: 'absolute -bottom-10 -right-10 text-brand-primary opacity-5 text-9xl z-0 transform rotate-12'}, [createSVG(ICONS.QUOTE)]);

    container.append(quote1, quote2, content);
    setupTestimonialsCarousel();
}

function hasUnsavedChanges() {
    if (!state.isAdmin || !state.draftSiteData) return false;
    const siteDataChanged = JSON.stringify(state.siteData) !== JSON.stringify(state.draftSiteData);
    const productsDataChanged = JSON.stringify(state.productsData) !== JSON.stringify(state.draftProductsData);
    return siteDataChanged || productsDataChanged;
}

function updateAdminBarState() {
    if (!state.isAdmin) return;
    const saveBtn = document.getElementById('save-changes-btn');
    const discardBtn = document.getElementById('discard-changes-btn');
    if (!(saveBtn instanceof HTMLButtonElement) || !(discardBtn instanceof HTMLButtonElement)) return;

    if (hasUnsavedChanges()) {
        saveBtn.disabled = false;
        discardBtn.disabled = false;
    } else {
        saveBtn.disabled = true;
        discardBtn.disabled = true;
    }
}

function updateAdminUI() {
    const adminBar = document.getElementById('admin-bar');
    const authBtn = document.getElementById('admin-auth-btn');

    const staticImageMap = {
        'header-logo': 'logo',
        'footer-logo': 'logo',
        'hero-image': 'hero',
        'about-image': 'about',
    };

    if (state.isAdmin) {
        if (adminBar) adminBar.classList.remove('hidden');
        if (authBtn) {
            authBtn.textContent = 'Logout';
            authBtn.classList.remove('bg-brand-purple', 'hover:bg-purple-700');
            authBtn.classList.add('bg-red-600', 'hover:bg-red-500');
        }
        
        Object.entries(staticImageMap).forEach(([elementId, imageKey]) => {
            const imgElement = document.getElementById(elementId);
            if (imgElement && !imgElement.closest('.static-edit-wrapper')) {
                const wrapper = createElement('div', { className: 'relative group static-edit-wrapper inline-block' });
                imgElement.parentNode.insertBefore(wrapper, imgElement);
                wrapper.appendChild(imgElement);

                const editBtn = createElement('button', {
                    'data-image-id': `image-${imageKey}`,
                    className: 'edit-image-btn absolute top-1 right-1 z-20 w-8 h-8 bg-blue-600/80 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:bg-blue-500 hover:scale-110 opacity-0 group-hover:opacity-100',
                    title: `Edit ${imageKey}`
                }, [createSVG(ICONS.EDIT)]);
                wrapper.appendChild(editBtn);
            }
        });
        updateAdminBarState();
    } else {
        if (adminBar) adminBar.classList.add('hidden');
        if (authBtn) {
            authBtn.textContent = 'Admin Login';
            authBtn.classList.add('bg-brand-purple', 'hover:bg-purple-700');
            authBtn.classList.remove('bg-red-600', 'hover:bg-red-500');
        }

        document.querySelectorAll('.static-edit-wrapper').forEach(wrapper => {
            const img = wrapper.querySelector('img');
            if(img) {
                wrapper.parentNode.replaceChild(img, wrapper);
            } else {
                wrapper.remove();
            }
        });
    }
}

function renderWhyChooseUs() {
    const container = document.getElementById('why-choose-us');
    if (!container) return;
    container.innerHTML = '';
    const whyChooseUsData = [ { icon: ICONS.CREATIVE, title: 'Creative Solutions', description: 'We think outside the box to deliver unique and innovative solutions that set you apart from the competition.', }, { icon: ICONS.CLIENT_CENTRIC, title: 'Client-Centric Approach', description: 'Your success is our priority. We work collaboratively to understand your needs and deliver tailored strategies.', }, { icon: ICONS.PROVEN_RESULTS, title: 'Proven Results', description: 'Our data-driven methods ensure we deliver measurable results that contribute to your bottom line.', }, ];
    const features = whyChooseUsData.map((feature, index) => {
        const icon = createSVG(feature.icon);
        const iconLg = createSVG(feature.icon);
        return createElement('div', {className: 'group', style: {perspective: '1000px'}}, [
            createElement('div', {className: 'relative p-8 text-center bg-brand-secondary rounded-lg shadow-lg border border-transparent hover:border-brand-accent/30 transition-all duration-500 ease-in-out group-hover:shadow-brand-accent/20 group-hover:-translate-y-2', style: {animation: `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`, opacity: '0', transformStyle: 'preserve-3d'}}, [
                createElement('div', {className: 'absolute -top-10 -right-10 text-brand-primary opacity-5 text-8xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110'}, [iconLg]),
                createElement('div', {className: 'relative z-10 transition-transform duration-500 group-hover:translate-z-10', style: {transform: 'translateZ(20px)'}}, [
                    createElement('div', {className: 'inline-block p-4 bg-brand-primary rounded-full mb-4 text-brand-accent transition-transform duration-500 group-hover:scale-110'}, [icon]),
                    createElement('h4', {className: 'text-xl font-bold text-white mb-2'}, [feature.title]),
                    createElement('p', {className: 'text-gray-400'}, [feature.description])
                ])
            ])
        ])
    });
    const content = createElement('div', {className: 'container mx-auto px-6'}, [
        createElement('div', {className: 'text-center mb-16'}, [
            createElement('h2', {className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2'}, ['Our Advantage']),
            createElement('h3', {className: 'text-3xl md:text-4xl font-bold text-white'}, ['Why Choose INK Spire?'])
        ]),
        createElement('div', {className: 'grid md:grid-cols-3 gap-10'}, features)
    ]);
    container.appendChild(content);
}

function renderPrintingProcess() {
    const container = document.getElementById('process');
    if (!container) return;
    container.innerHTML = '';
    const { siteData } = getCurrentData();

    const steps = siteData.process.map((step, index) => {
        const stepElement = createElement('div', { className: 'relative flex items-start group' }, [
            createElement('div', { className: 'flex-shrink-0 flex flex-col items-center w-24' }, [
                createElement('div', { className: 'z-10 w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center border-4 border-brand-accent/50 group-hover:border-brand-accent transition-colors duration-300' }, [
                    createSVG(ICONS[step.icon])
                ]),
                index < siteData.process.length - 1 ? createElement('div', { className: 'w-1 h-24 bg-brand-purple/50 mt-2' }) : null,
            ].filter(Boolean)),
            createElement('div', { className: 'ml-6 pb-24 relative' }, [
                createElement('h4', { className: 'text-2xl font-bold text-white mb-2' }, [step.title]),
                createElement('p', { className: 'text-gray-400' }, [step.description]),
            ])
        ]);

        if (state.isAdmin) {
            const editButton = createElement('button', {
                className: 'edit-btn absolute top-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity',
                'data-type': 'process',
                'data-index': index.toString(),
                title: 'Edit Step'
            }, [createSVG(ICONS.EDIT)]);
            stepElement.querySelector('div.ml-6')?.appendChild(editButton);
        }
        return stepElement;
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-16' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Workflow']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Our Simple 4-Step Process']),
            createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['From concept to completion, we make the printing process seamless and transparent.'])
        ]),
        createElement('div', { className: 'max-w-2xl mx-auto' }, steps)
    ]);

    container.appendChild(content);
}

function renderFAQ() {
    const container = document.getElementById('faq');
    if (!container) return;
    container.innerHTML = '';
    const { siteData } = getCurrentData();

    const faqItems = siteData.faq.map((item, index) => {
        const faqItem = createElement('div', { className: 'border-b border-brand-purple/50 group' }, [
            createElement('button', {
                className: 'faq-question w-full flex justify-between items-center text-left py-6',
                'aria-expanded': 'false'
            }, [
                createElement('h4', { className: 'text-xl font-semibold text-white' }, [item.question]),
                createElement('span', { className: 'text-brand-accent transition-transform duration-300' }, [createSVG(ICONS.CHEVRON_DOWN)])
            ]),
            createElement('div', { className: 'faq-answer overflow-hidden transition-all duration-300 ease-in-out', style: { maxHeight: '0px' } }, [
                createElement('p', { className: 'pb-6 text-gray-400' }, [item.answer])
            ])
        ]);

        if (state.isAdmin) {
            const controls = createElement('div', { className: 'absolute top-4 right-12 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity' }, [
                createElement('button', { className: 'edit-btn p-2 bg-blue-600 rounded-full hover:bg-blue-500', 'data-type': 'faq', 'data-index': index.toString(), title: 'Edit FAQ' }, [createSVG(ICONS.EDIT)]),
                createElement('button', { className: 'delete-btn p-2 bg-red-600 rounded-full hover:bg-red-500', 'data-type': 'faq', 'data-index': index.toString(), title: 'Delete FAQ' }, [createSVG(ICONS.DELETE)])
            ]);
            const questionButton = faqItem.querySelector('.faq-question');
            questionButton?.appendChild(controls);
        }

        return faqItem;
    });

    const header = createElement('div', { className: 'text-center mb-12' }, [
        createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Help Center']),
        createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Frequently Asked Questions']),
        createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['Find answers to common questions about our services, process, and policies.'])
    ]);

    if (state.isAdmin) {
        header.appendChild(createElement('button', { id: 'add-faq-btn', className: 'mt-6 bg-brand-accent text-brand-primary font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors' }, ['Add New FAQ']));
    }
    
    container.appendChild(createElement('div', { className: 'container mx-auto px-6' }, [
        header,
        createElement('div', { className: 'max-w-3xl mx-auto' }, faqItems)
    ]));
}

function renderClients() {
    const container = document.getElementById('clients');
    if (!container) return;
    container.innerHTML = '';
    const clientsData = ['Dialog', 'Brandix', 'MAS Holdings', 'Hemas', 'John Keells', 'Hayleys'];
    const allLogos = [...clientsData, ...clientsData];
    const createMarquee = (delay = null) => {
        const logos = allLogos.map(logo => {
            return createElement('div', {className: 'flex-shrink-0 w-64 mx-4 flex justify-center'}, [
                createElement('div', {className: 'flex items-center justify-center space-x-3 text-gray-500 hover:text-white transition-colors duration-300'}, [
                    createSVG(ICONS.CLIENT_LOGO),
                    createElement('span', {className: 'text-2xl font-semibold whitespace-nowrap'}, [logo])
                ])
            ]);
        });
        const marqueeDiv = createElement('div', {className: 'flex animate-marquee-slow group-hover:[animation-play-state:paused]'}, logos);
        if(delay) {
            marqueeDiv.classList.add('absolute', 'top-0', 'left-0');
            marqueeDiv.style.animationDelay = delay;
        }
        return marqueeDiv;
    }
    const content = [
        createElement('div', {className: 'container mx-auto px-6'}, [
            createElement('div', {className: 'text-center mb-12'}, [
                createElement('h2', {className: 'text-3xl md:text-4xl font-bold text-white'}, ['Trusted by Industry Leaders']),
                createElement('p', {className: 'text-gray-400 mt-4'}, ['We are proud to have partnered with a diverse range of clients.'])
            ])
        ]),
        createElement('div', {className: 'relative flex group'}, [
            createMarquee(),
            createMarquee('-30s')
        ])
    ];
    container.append(...content);
}
function renderContactCTA() {
    const container = document.getElementById('contact-cta');
    if (!container) return;
    container.innerHTML = '';
    const content = createElement('div', {className: 'container mx-auto px-6'}, [
        createElement('div', {className: 'bg-brand-secondary rounded-lg p-10 md:p-16 shadow-2xl text-center max-w-4xl mx-auto'}, [
            createElement('h2', {className: 'text-4xl md:text-5xl font-extrabold text-white mb-4'}, ['Have a Project in Mind?']),
            createElement('p', {className: 'max-w-2xl mx-auto text-gray-300 text-lg mb-8 leading-relaxed'}, ["Let's turn your idea into a digital reality. We're here to help you every step of the way. Reach out to us for a free consultation."]),
            createElement('a', {href: `https://wa.me/+940742200156?text=${encodeURIComponent("Hello INK Spire, I'd like to get a free quote.")}`, target: '_blank', rel: 'noopener noreferrer', className: 'inline-block bg-brand-accent text-brand-primary font-bold py-4 px-8 text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20'}, ['Get a Free Quote'])
        ])
    ]);
    container.appendChild(content);
}
function renderContactSection() {
    const container = document.getElementById('contact');
    if (!container) return;
    container.innerHTML = '';
    
    const createInput = (id, type, name, required, label) => createElement('div', {}, [
        createElement('label', { htmlFor: id, className: 'block text-sm font-medium text-gray-300 mb-1' }, [label]),
        createElement('input', { type, id, name, required, className: 'w-full bg-brand-primary border border-brand-purple/50 rounded-md px-3 py-2 text-white focus:ring-brand-accent focus:border-brand-accent transition' })
    ]);
    
    const contactForm = createElement('form', {id: 'contact-form', className: 'space-y-4'}, [
        createInput('contact-name', 'text', 'name', true, 'Full Name'),
        createInput('contact-email', 'email', 'email', true, 'Email Address'),
        createInput('contact-phone', 'tel', 'phone', false, 'Phone Number (Optional)'),
        createElement('div', {}, [
            createElement('label', { htmlFor: 'contact-service', className: 'block text-sm font-medium text-gray-300 mb-1' }, ['Service of Interest']),
            createElement('select', { id: 'contact-service', name: 'service', className: 'w-full bg-brand-primary border border-brand-purple/50 rounded-md px-3 py-2 text-white focus:ring-brand-accent focus:border-brand-accent transition' }, 
                ['General Inquiry', 'Print & Marketing', 'Fashion & Textile', 'Office & Store Branding', 'All Signages', 'All Flags', 'Standees and Backdrops', 'Corporate Gifts & Bags'].map(s => createElement('option', {}, [s]))
            )
        ]),
        createElement('div', {}, [
            createElement('label', { htmlFor: 'contact-message', className: 'block text-sm font-medium text-gray-300 mb-1' }, ['Message']),
            createElement('textarea', { id: 'contact-message', name: 'message', rows: '4', required: true, className: 'w-full bg-brand-primary border border-brand-purple/50 rounded-md px-3 py-2 text-white focus:ring-brand-accent focus:border-brand-accent transition' })
        ]),
        createElement('div', {className: 'pt-2'}, [
            createElement('button', {type: 'submit', className: 'w-full bg-brand-accent text-brand-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105'}, ['Send Message'])
        ])
    ]);

    const successMessage = createElement('div', {id: 'contact-form-success', className: 'hidden text-center p-8 bg-green-900/50 border border-green-500 rounded-lg'}, [
        createElement('h4', {className: 'text-xl font-bold text-white mb-2'}, ['Thank You!']),
        createElement('p', {className: 'text-gray-300'}, ['Your message has been sent successfully. We will get back to you shortly.'])
    ]);

    const contactInfo = createElement('div', {className: 'space-y-8'}, [
        createElement('div', {className: 'bg-brand-secondary p-8 rounded-lg shadow-lg flex items-start space-x-4'}, [
            createElement('div', {className: 'flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center border-2 border-brand-accent/20 text-brand-accent'}, [createSVG(ICONS.EMAIL)]),
            createElement('div', {}, [
                createElement('h4', {className: 'text-xl font-semibold text-white'}, ['Email Us']),
                createElement('p', {className: 'text-gray-400 mt-1'}, ['Send us an email for any inquiries or support.']),
                createElement('a', {href: 'mailto:inkspire.lk@gmail.com', className: 'text-brand-accent hover:text-yellow-300 transition-colors mt-2 inline-block'}, ['inkspire.lk@gmail.com'])
            ])
        ]),
        createElement('div', {className: 'bg-brand-secondary p-8 rounded-lg shadow-lg flex items-start space-x-4'}, [
            createElement('div', {className: 'flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center border-2 border-brand-accent/20 text-brand-accent'}, [createSVG(ICONS.PHONE)]),
            createElement('div', {}, [
                createElement('h4', {className: 'text-xl font-semibold text-white'}, ['Call Us']),
                createElement('p', {className: 'text-gray-400 mt-1'}, ['Talk to our team for immediate assistance.']),
                createElement('a', {href: 'tel:+94742200156', className: 'text-brand-accent hover:text-yellow-300 transition-colors mt-2 inline-block'}, ['+94 74 220 0156'])
            ])
        ])
    ]);
    
    const content = createElement('div', {className: 'container mx-auto px-6'}, [
        createElement('div', {className: 'text-center mb-12'}, [
            createElement('h2', {className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2'}, ['Get In Touch']),
            createElement('h3', {className: 'text-3xl md:text-4xl font-bold text-white'}, ['Contact Us']),
            createElement('p', {className: 'max-w-2xl mx-auto text-gray-400 mt-4'}, ['Have a question or a project in mind? Fill out the form below or reach out to us directly.'])
        ]),
        createElement('div', {className: 'max-w-5xl mx-auto grid md:grid-cols-2 gap-12'}, [
            createElement('div', {className: 'bg-brand-secondary p-8 rounded-lg shadow-lg'}, [
                createElement('h4', {className: 'text-2xl font-bold text-white mb-6'}, ['Send us a Message']),
                contactForm,
                successMessage
            ]),
            contactInfo
        ])
    ]);
    container.appendChild(content);
}
function renderFooter() {
    const container = document.getElementById('page-footer');
    if (!container) return;
    container.innerHTML = '';
    const footerData = {
        socialLinks: [
            { name: 'Facebook', icon: ICONS.FACEBOOK, href: 'https://www.facebook.com/InkSpire2k25' },
            { name: 'Instagram', icon: ICONS.INSTAGRAM, href: 'https://www.instagram.com/ink_spire.lk' },
            { name: 'X / Twitter', icon: ICONS.TWITTER, href: 'https://x.com/InkSpire_lk' },
            { name: 'YouTube', icon: ICONS.YOUTUBE, href: 'https://www.youtube.com/@Ink_Spire_lk' },
            { name: 'TikTok', icon: ICONS.TIKTOK, href: 'https://www.tiktok.com/@ink_spire.lk' },
            { name: 'Threads', icon: ICONS.THREADS, href: 'https://www.threads.net/@ink_spire.lk' },
            { name: 'WhatsApp', icon: ICONS.WHATSAPP, href: 'https://wa.me/+940742200156' },
            { name: 'WhatsApp Channel', icon: ICONS.WHATSAPP, href: 'https://whatsapp.com/channel/0029Vb6TVIK0G0XjsQu8gl2s' },
            { name: 'Telegram', icon: ICONS.TELEGRAM, href: 'https://t.me/ink_spire_lk' },
        ]
    };

    const createSocialLink = (link) => {
        const icon = createSVG(link.icon);
        if (icon) icon.setAttribute('class', 'w-6 h-6');
        return createElement('a', {
            href: link.href,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': link.name,
            className: 'text-gray-400 hover:text-brand-accent transition-colors duration-300'
        }, [icon]);
    };

    const content = createElement('div', {className: 'container mx-auto px-6'}, [
        createElement('div', {className: 'grid md:grid-cols-3 gap-12 text-center md:text-left'}, [
            createElement('div', {className: 'md:col-span-1'}, [
                createElement('img', {id: 'footer-logo', src: '', alt: 'Image/InkSpireLogo.PNG', className: 'h-16 w-auto mx-auto md:mx-0 mb-4'}),
                createElement('p', {className: 'text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0'}, ['Crafting memorable brand experiences with passion, precision, and a touch of digital magic.'])
            ]),
            createElement('div', {}, [
                createElement('h4', {className: 'text-lg font-bold text-white mb-4'}, ['Quick Links']),
                createElement('ul', {className: 'space-y-2'}, [
                    ...['About Us', 'Services', 'Products', 'Projects', 'Contact'].map(item => {
                        return createElement('li', {}, [
                            createElement('a', {href: `#${item.toLowerCase().replace(' ', '-')}`, className: 'text-gray-400 hover:text-brand-accent transition-colors'}, [item])
                        ]);
                    })
                ])
            ]),
            createElement('div', {}, [
                createElement('h4', {className: 'text-lg font-bold text-white mb-4'}, ['Connect With Us']),
                createElement('p', {className: 'text-gray-400 mb-6'}, ['Kattankudy-06, Batticaloa, Sri Lanka.']),
                createElement('div', {className: 'flex justify-center md:justify-start space-x-4'}, footerData.socialLinks.map(createSocialLink))
            ])
        ]),
        createElement('div', {className: 'mt-12 border-t border-gray-800 pt-8 text-center text-gray-500'}, [
            createElement('p', {}, [`© ${new Date().getFullYear()} INK Spire. All Rights Reserved. Crafted with ❤️ in Sri Lanka.`])
        ])
    ]);
    container.appendChild(content);
}

// --- EVENT HANDLERS & INITIALIZATION ---

function setupEventListeners() {
    document.getElementById('menu-toggle')?.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        const toggle = document.getElementById('menu-toggle');
        if (menu && toggle) {
            const isExpanded = menu.classList.toggle('hidden');
            toggle.setAttribute('aria-expanded', String(!isExpanded));
        }
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu')?.classList.add('hidden');
            const toggle = document.getElementById('menu-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('bg-brand-primary/80', 'backdrop-blur-sm', 'shadow-lg');
            } else {
                header.classList.remove('bg-brand-primary/80', 'backdrop-blur-sm', 'shadow-lg');
            }
        }
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
            } else {
                backToTop.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
            }
        }
    });
    
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;

        const button = target.closest('[data-modal-id]');
        if (button instanceof HTMLElement && button.dataset.modalId) {
            const modal = document.getElementById(`modal-${button.dataset.modalId}`);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }

        const modal = target.closest('.service-modal');
        if (target.closest('.close-modal-btn') || (modal && target === modal)) {
             if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }
    });

    const faqContainer = document.getElementById('faq');
    faqContainer?.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        const questionButton = target.closest('.faq-question');
        if (questionButton) {
            const answer = questionButton.nextElementSibling;
            const icon = questionButton.querySelector('svg');
            const isOpen = questionButton.getAttribute('aria-expanded') === 'true';

            questionButton.setAttribute('aria-expanded', String(!isOpen));
            if (answer instanceof HTMLElement) {
                if (isOpen) {
                    answer.style.maxHeight = '0px';
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
            icon?.classList.toggle('rotate-180', !isOpen);
        }
    });

    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');

    const openSearch = () => {
        if (searchModal && searchInput instanceof HTMLInputElement) {
            searchModal.classList.remove('hidden');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        }
    };
    const closeSearch = () => {
        if (searchModal && searchInput instanceof HTMLInputElement && searchResultsContainer) {
            searchModal.classList.add('hidden');
            searchInput.value = '';
            searchResultsContainer.innerHTML = '';
            document.body.style.overflow = '';
        }
    };

    document.getElementById('open-search-desktop')?.addEventListener('click', openSearch);
    document.getElementById('open-search-mobile')?.addEventListener('click', openSearch);
    document.getElementById('close-search-modal')?.addEventListener('click', closeSearch);
    if(searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }
    
    if (searchInput instanceof HTMLInputElement && searchResultsContainer) {
        searchInput.addEventListener('input', (e) => {
            // FIX: Cast e.target to HTMLInputElement to access value property.
            const query = ((e.target as HTMLInputElement).value || '').toLowerCase();
            searchResultsContainer.innerHTML = '';
            if (query.length < 2) return;

            const results = state.searchableData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.description.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                searchResultsContainer.appendChild(createElement('div', {className: 'p-6 text-center text-gray-400'}, ['No results found.']));
                return;
            }

            const resultElements = results.map(item => {
                const resultLink = createElement('a', {href: item.link, className: 'block p-4 hover:bg-brand-primary/50 rounded-lg transition-colors'}, [
                    createElement('div', {className: 'flex items-center space-x-4'}, [
                        createElement('div', {className: 'flex-shrink-0 w-10 h-10 bg-brand-primary rounded-md flex items-center justify-center text-brand-accent'}, [createSVG(ICONS.SEARCH)]),
                        createElement('div', {}, [
                            createElement('h4', {className: 'font-bold text-white'}, [item.title]),
                            createElement('p', {className: 'text-sm text-gray-400'}, [`${item.type} - ${item.description.substring(0, 50)}...`])
                        ])
                    ])
                ]);
                resultLink.addEventListener('click', closeSearch);
                return resultLink;
            });

            searchResultsContainer.append(...resultElements);
        });
    }

    setupAdminListeners();
}

function setupAdminListeners() {
    const adminAuthBtn = document.getElementById('admin-auth-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const adminLoginModal = document.getElementById('admin-login-modal');
    
    adminAuthBtn?.addEventListener('click', () => {
        if (state.isAdmin) {
            logout();
        } else if (adminLoginModal) {
            adminLoginModal.classList.remove('hidden');
        }
    });

    logoutBtn?.addEventListener('click', logout);
    
    document.getElementById('close-login-modal')?.addEventListener('click', () => {
        if (adminLoginModal) adminLoginModal.classList.add('hidden');
    });

    document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;
        
        const usernameInput = form.elements.namedItem('username');
        const passwordInput = form.elements.namedItem('password');
        const errorEl = document.getElementById('login-error');

        if (!(usernameInput instanceof HTMLInputElement) || !(passwordInput instanceof HTMLInputElement) || !errorEl) return;
        
        if (usernameInput.value === ADMIN_USERNAME && passwordInput.value === ADMIN_PASSWORD) {
            state.isAdmin = true;
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            state.draftSiteData = JSON.parse(JSON.stringify(state.siteData));
            state.draftProductsData = JSON.parse(JSON.stringify(state.productsData));

            if(adminLoginModal) adminLoginModal.classList.add('hidden');
            form.reset();
            errorEl.classList.add('hidden');
            renderAllSections();
        } else {
            errorEl.classList.remove('hidden');
        }
    });
    
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;

        const addProductBtn = target.closest('#add-product-btn');
        if (addProductBtn) {
            openEditModal('product', null);
        }

        const addFaqBtn = target.closest('#add-faq-btn');
        if (addFaqBtn) {
            openEditModal('faq', null);
        }

        const editBtn = target.closest('.edit-btn');
        if (editBtn instanceof HTMLElement && editBtn.dataset.type && editBtn.dataset.index) {
            const index = parseInt(editBtn.dataset.index, 10);
            openEditModal(editBtn.dataset.type, index);
        }
        
        const deleteBtn = target.closest('.delete-btn');
        if(deleteBtn instanceof HTMLElement && deleteBtn.dataset.type && deleteBtn.dataset.index) {
            const { type, index: indexStr } = deleteBtn.dataset;
            const index = parseInt(indexStr, 10);
            if (confirm(`Are you sure you want to delete this ${type}? This action will be staged until you save all changes.`)) {
                if (type === 'product' && state.draftProductsData[index]) {
                    state.draftProductsData.splice(index, 1);
                    renderProducts();
                } else if (type === 'faq' && state.draftSiteData.faq[index]) {
                    state.draftSiteData.faq.splice(index, 1);
                    renderFAQ();
                }
                updateAdminBarState();
            }
        }
        
        const editImageBtn = target.closest('.edit-image-btn');
        if(editImageBtn instanceof HTMLElement && editImageBtn.dataset.imageId) {
            openImageEditModal(editImageBtn.dataset.imageId);
        }
    });
    
    const editModal = document.getElementById('edit-modal');
    if (!editModal) return;
    const closeEditModal = () => {
        editModal.classList.add('hidden');
        state.editingContext = null;
    };
    document.getElementById('close-edit-modal')?.addEventListener('click', closeEditModal);
    document.getElementById('cancel-edit-form')?.addEventListener('click', closeEditModal);
    
    document.getElementById('edit-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!state.editingContext) return;

        const { type, index } = state.editingContext;
        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;

        const getValue = (name) => (form.elements.namedItem(name) as HTMLInputElement)?.value || '';
        
        if (type === 'product') {
            const updatedProduct = {
                name: getValue('name'),
                price: getValue('price'),
                description: getValue('description'),
                image: state.editingContext.data.image
            };
            if (index !== null) {
                state.draftProductsData[index] = updatedProduct;
            } else {
                state.draftProductsData.push({ ...updatedProduct, image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&h=300&auto=format&fit=crop' });
            }
            renderProducts();
        } else if (type === 'project') {
            const updatedProject = {
                category: getValue('category'),
                title: getValue('title'),
                description: getValue('description'),
                image: state.editingContext.data.image
            };
            state.draftSiteData.projects[index] = updatedProject;
            renderProjects();
        } else if (type === 'team') {
            const updatedMember = {
                name: getValue('name'),
                role: getValue('role'),
                image: state.editingContext.data.image
            };
            state.draftSiteData.team[index] = updatedMember;
            renderTeam();
        } else if (type === 'process') {
            const updatedStep = {
                ...state.editingContext.data,
                title: getValue('title'),
                description: getValue('description'),
            };
            state.draftSiteData.process[index] = updatedStep;
            renderPrintingProcess();
        } else if (type === 'faq') {
            const updatedFaq = {
                question: getValue('question'),
                answer: getValue('answer'),
            };
            if (index !== null) {
                state.draftSiteData.faq[index] = updatedFaq;
            } else {
                state.draftSiteData.faq.push(updatedFaq);
            }
            renderFAQ();
        }
        
        updateAdminBarState();
        closeEditModal();
    });

    document.getElementById('reset-data-btn')?.addEventListener('click', () => {
        if(confirm('Are you sure you want to reset all site and product data to their defaults? This cannot be undone.')) {
            state.siteData = JSON.parse(JSON.stringify(initialSiteData));
            state.productsData = JSON.parse(JSON.stringify(initialProductsData));
            if (state.isAdmin) {
                state.draftSiteData = JSON.parse(JSON.stringify(state.siteData));
                state.draftProductsData = JSON.parse(JSON.stringify(state.productsData));
            }
            saveData();
            renderAllSections();
            alert('Site data has been reset to default.');
        }
    });

    document.getElementById('save-changes-btn')?.addEventListener('click', () => {
        if (!hasUnsavedChanges()) return;
        if (confirm('Are you sure you want to save all changes? This will overwrite the live data.')) {
            state.siteData = JSON.parse(JSON.stringify(state.draftSiteData));
            state.productsData = JSON.parse(JSON.stringify(state.draftProductsData));
            saveData();
            updateAdminBarState();
            alert('All changes have been saved successfully!');
        }
    });

    document.getElementById('discard-changes-btn')?.addEventListener('click', () => {
        if (!hasUnsavedChanges()) return;
        if (confirm('Are you sure you want to discard all changes made in this session?')) {
            state.draftSiteData = JSON.parse(JSON.stringify(state.siteData));
            state.draftProductsData = JSON.parse(JSON.stringify(state.productsData));
            renderAllSections();
            updateAdminBarState();
            alert('All changes have been discarded.');
        }
    });
}

function openEditModal(type, index) {
    const modal = document.getElementById('edit-modal');
    const titleEl = document.getElementById('edit-modal-title');
    const fieldsContainer = document.getElementById('edit-form-fields');
    if (!modal || !titleEl || !fieldsContainer) return;
    fieldsContainer.innerHTML = '';

    const createField = (name, label, value = '', type = 'text') => {
        const input = createElement(type === 'textarea' ? 'textarea' : 'input', {
            id: `edit-${name}`, name, value, required: true,
            className: 'w-full bg-brand-primary border border-brand-purple/50 rounded-md px-3 py-2 text-white focus:ring-brand-accent focus:border-brand-accent transition'
        });
        if (type === 'textarea' && input instanceof HTMLTextAreaElement) input.rows = 3;

        return createElement('div', {}, [
            createElement('label', { htmlFor: `edit-${name}`, className: 'block text-sm font-medium text-gray-300 mb-1' }, [label]),
            input
        ]);
    };

    let data;
    if (type === 'product') {
        const isNew = index === null;
        data = isNew ? {} : state.draftProductsData[index];
        titleEl.textContent = isNew ? 'Add New Product' : 'Edit Product';
        fieldsContainer.appendChild(createField('name', 'Product Name', data.name));
        fieldsContainer.appendChild(createField('price', 'Price', data.price));
        fieldsContainer.appendChild(createField('description', 'Description', data.description, 'textarea'));
    } else if (type === 'project') {
        data = state.draftSiteData.projects[index];
        titleEl.textContent = 'Edit Project';
        fieldsContainer.appendChild(createField('category', 'Category', data.category));
        fieldsContainer.appendChild(createField('title', 'Title', data.title));
        fieldsContainer.appendChild(createField('description', 'Description', data.description, 'textarea'));
    } else if (type === 'team') {
        data = state.draftSiteData.team[index];
        titleEl.textContent = 'Edit Team Member';
        fieldsContainer.appendChild(createField('name', 'Name', data.name));
        fieldsContainer.appendChild(createField('role', 'Role', data.role));
    } else if (type === 'process') {
        data = state.draftSiteData.process[index];
        titleEl.textContent = 'Edit Process Step';
        fieldsContainer.appendChild(createField('title', 'Title', data.title));
        fieldsContainer.appendChild(createField('description', 'Description', data.description, 'textarea'));
    } else if (type === 'faq') {
        const isNew = index === null;
        data = isNew ? {} : state.draftSiteData.faq[index];
        titleEl.textContent = isNew ? 'Add New FAQ' : 'Edit FAQ';
        fieldsContainer.appendChild(createField('question', 'Question', data.question, 'textarea'));
        fieldsContainer.appendChild(createField('answer', 'Answer', data.answer, 'textarea'));
    }
    
    state.editingContext = { type, index, data };
    modal.classList.remove('hidden');
}

function openImageEditModal(imageId) {
    const modal = document.getElementById('image-edit-modal');
    const preview = document.getElementById('image-preview');
    const urlInput = document.getElementById('image-url-input');
    const fileInput = document.getElementById('image-file-input');
    if (!modal || !(preview instanceof HTMLImageElement) || !(urlInput instanceof HTMLInputElement) || !(fileInput instanceof HTMLInputElement)) return;

    const [type, key] = imageId.split(/-(.+)/);
    const index = parseInt(key, 10);

    let currentImageUrl = '';
    if (type === 'product' && state.draftProductsData[index]) {
        currentImageUrl = state.draftProductsData[index].image;
        state.editingContext = { type: 'product', index };
    } else if (type === 'project' && state.draftSiteData.projects[index]) {
        currentImageUrl = state.draftSiteData.projects[index].image;
        state.editingContext = { type: 'project', index };
    } else if (type === 'team' && state.draftSiteData.team[index]) {
        currentImageUrl = state.draftSiteData.team[index].image;
        state.editingContext = { type: 'team', index };
    } else if (type === 'image' && state.draftSiteData.images[key]) {
        currentImageUrl = state.draftSiteData.images[key];
        state.editingContext = { type: 'staticImage', key };
    } else {
        return; // Invalid imageId
    }

    preview.src = currentImageUrl;
    urlInput.value = currentImageUrl;
    fileInput.value = ''; // Reset file input
    modal.classList.remove('hidden');
}

function setupImageEditModalListeners() {
    const modal = document.getElementById('image-edit-modal');
    if (!modal) return;
    
    const urlInput = document.getElementById('image-url-input');
    const fileInput = document.getElementById('image-file-input');
    const preview = document.getElementById('image-preview');

    const closeModal = () => {
        modal.classList.add('hidden');
        state.editingContext = null;
    };
    document.getElementById('close-image-modal')?.addEventListener('click', closeModal);

    if (urlInput instanceof HTMLInputElement && preview instanceof HTMLImageElement) {
        urlInput.addEventListener('input', () => {
            preview.src = urlInput.value;
        });
    }

    if (fileInput instanceof HTMLInputElement && preview instanceof HTMLImageElement && urlInput instanceof HTMLInputElement) {
        fileInput.addEventListener('change', () => {
            const file = fileInput.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (typeof e.target?.result === 'string') {
                        preview.src = e.target.result;
                        urlInput.value = ''; 
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    document.getElementById('save-image-btn')?.addEventListener('click', () => {
        if (!state.editingContext || !(urlInput instanceof HTMLInputElement) || !(preview instanceof HTMLImageElement)) return;
        
        const newImageUrl = urlInput.value || preview.src;
        const { type, index, key } = state.editingContext;
        
        let renderFunc = null;

        if (type === 'product' && state.draftProductsData[index]) {
            state.draftProductsData[index].image = newImageUrl;
            renderFunc = renderProducts;
        } else if (type === 'project' && state.draftSiteData.projects[index]) {
            state.draftSiteData.projects[index].image = newImageUrl;
            renderFunc = renderProjects;
        } else if (type === 'team' && state.draftSiteData.team[index]) {
            state.draftSiteData.team[index].image = newImageUrl;
            renderFunc = renderTeam;
        } else if (type === 'staticImage' && state.draftSiteData.images[key]) {
            state.draftSiteData.images[key] = newImageUrl;
            renderFunc = renderStaticImages;
        }
        
        if (renderFunc) {
            renderFunc();
            // Special case for logo, since it's in header and footer
            if (key === 'logo') {
                renderFooter();
                updateAdminUI(); // Re-apply wrappers
            }
            updateAdminBarState();
        }
        closeModal();
    });
    
    document.getElementById('remove-image-btn')?.addEventListener('click', () => {
        if (!state.editingContext || !confirm('Are you sure you want to remove this image? This will be replaced by a placeholder.')) return;
        
        const placeholderImage = 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&h=300&auto=format&fit=crop';
        const { type, index, key } = state.editingContext;
        
        let renderFunc = null;

        if (type === 'product' && state.draftProductsData[index]) {
            state.draftProductsData[index].image = placeholderImage;
            renderFunc = renderProducts;
        } else if (type === 'project' && state.draftSiteData.projects[index]) {
            state.draftSiteData.projects[index].image = placeholderImage;
            renderFunc = renderProjects;
        } else if (type === 'team' && state.draftSiteData.team[index]) {
            state.draftSiteData.team[index].image = placeholderImage;
            renderFunc = renderTeam;
        } else if (type === 'staticImage' && state.draftSiteData.images[key]) {
            state.draftSiteData.images[key] = placeholderImage;
            renderFunc = renderStaticImages;
        }
        
        if (renderFunc) {
            renderFunc();
             if (key === 'logo') {
                renderFooter();
                updateAdminUI(); // Re-apply wrappers
            }
            updateAdminBarState();
        }
        closeModal();
    });
}

function logout() {
    if (hasUnsavedChanges() && !confirm('You have unsaved changes. Are you sure you want to log out and discard them?')) {
        return;
    }
    state.isAdmin = false;
    state.draftSiteData = null;
    state.draftProductsData = null;
    sessionStorage.removeItem('isAdminLoggedIn');
    renderAllSections();
}

function typeWriterEffect() {
    const element = document.getElementById('typewriter');
    if (!element) return;
    const words = ['Printing.', 'Design.', 'Branding.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex--);
        } else {
            element.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }
    type();
}

function setupTestimonialsCarousel() {
    const contentEl = document.getElementById('testimonial-content');
    const dotsContainer = document.getElementById('testimonial-dots');
    const progressEl = document.getElementById('testimonial-progress');
    if (!contentEl || !dotsContainer || !progressEl) return;
    
    let currentIndex = 0;
    const { siteData } = getCurrentData();

    const updateTestimonial = (index) => {
        const testimonial = siteData.testimonials[index];
        contentEl.innerHTML = '';
        
        contentEl.append(
            createElement('img', { src: testimonial.image, alt: testimonial.name, className: 'w-24 h-24 rounded-full mx-auto object-cover mb-6 border-4 border-brand-purple/50' }),
            createElement('p', { className: 'text-xl md:text-2xl italic text-gray-300 leading-relaxed mb-6' }, [`“${testimonial.quote}”`]),
            createElement('h4', { className: 'text-lg font-bold text-white' }, [testimonial.name]),
            createElement('p', { className: 'text-brand-accent font-semibold' }, [testimonial.title])
        );

        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('bg-brand-accent', i === index);
            dot.classList.toggle('bg-gray-600', i !== index);
        });
        
        if (progressEl instanceof HTMLElement) {
            progressEl.style.animation = 'none';
            void progressEl.offsetWidth; // Trigger reflow
            progressEl.style.animation = 'progress-bar 7s linear forwards';
        }
    };

    dotsContainer.innerHTML = '';
    siteData.testimonials.forEach((_, i) => {
        dotsContainer.appendChild(
            createElement('button', {
                className: `w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-brand-accent' : 'bg-gray-600'}`,
                'aria-label': `View testimonial ${i + 1}`,
                'data-index': i.toString()
            })
        );
    });

    dotsContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target instanceof HTMLElement && target.matches('button') && target.dataset.index) {
            const newIndex = parseInt(target.dataset.index);
            if(newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateTestimonial(currentIndex);
                resetInterval();
            }
        }
    });
    
    const startInterval = () => {
      return setInterval(() => {
          currentIndex = (currentIndex + 1) % siteData.testimonials.length;
          updateTestimonial(currentIndex);
      }, 7000);
    };

    const resetInterval = () => {
        clearInterval(state.testimonialIntervalId);
        state.testimonialIntervalId = startInterval();
    };

    updateTestimonial(currentIndex);
    state.testimonialIntervalId = startInterval();
}


function initApp() {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.remove('body-loading');
            }, 700);
        }
        
        loadData();
        renderAllSections();
        setupEventListeners();
        setupImageEditModalListeners();
        typeWriterEffect();
    });
}

initApp();
