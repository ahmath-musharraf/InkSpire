// =================================================================================
// INK SPIRE - SINGLE FILE APPLICATION
// All editable content is centralized in the DATA & STATE section for convenience.
// =================================================================================

// -----------------------------------------------------------------------------
// --- DATA & STATE ---
// To edit content, modify the objects in this section.
// -----------------------------------------------------------------------------

const ICONS = {
    PRINT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>',
    FASHION: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>',
    OFFICE: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7L12 12 2 7"></path></svg>',
    SIGNAGES: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"></path><path d="M12.5 6H17l4 4-4 4H12.5"></path><path d="M11.5 12H7l-4-4 4-4h4.5"></path><path d="M12 12v9"></path></svg>',
    FLAGS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
    STANDEES: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20v12h-20z"></path><path d="M12 15v6"></path><path d="M8 21h8"></path></svg>',
    GIFTS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>',
    CHECK_CIRCLE: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-accent mr-2 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    CLOSE: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    WHATSAPP: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>',
    QUOTE: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"></path></svg>',
    CREATIVE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    CLIENT_CENTRIC: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    PROVEN_RESULTS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88"></polyline></svg>',
    CLIENT_LOGO: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-70"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"></path></svg>',
    EMAIL: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    PHONE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    MAP_PIN: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    FACEBOOK: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
    INSTAGRAM: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 8 0zm0 1.442a6.556 6.556 0 0 1 3.25 0c.806.035 1.22.166 1.554.292.42.164.69.375.962.646.272.272.482.542.646.962.126.334.257.748.292 1.554A6.554 6.554 0 0 1 14.558 8a6.558 6.558 0 0 1 0 3.25c-.035.806-.166 1.22-.292 1.554a2.478 2.478 0 0 1-.646.962c-.272.272-.542.482-.962.646-.334.126-.748.257-1.554.292A6.554 6.554 0 0 1 8 14.558a6.558 6.558 0 0 1-3.25 0c-.806-.035-1.22-.166-1.554-.292a2.479 2.479 0 0 1-.962-.646c-.272-.272-.482-.542-.646-.962-.126-.334-.257-.748-.292-1.554A6.554 6.554 0 0 1 1.442 8a6.558 6.558 0 0 1 0-3.25c.035-.806.166-1.22.292-1.554.164-.42.375-.69.646-.962.272-.272.542-.482.962-.646.334-.126.748.257 1.554-.292A6.554 6.554 0 0 1 8 1.442zM8 4.25A3.75 3.75 0 1 0 8 11.75 3.75 3.75 0 0 0 8 4.25zM8 9.5A1.5 1.5 0 1 1 8 6.5a1.5 1.5 0 0 1 0 3zM12.5 3.1a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25z"/></svg>',
    YOUTUBE: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M10.805 7.458c.27.152.27.524 0 .676l-4.5 2.54A.48.48 0 0 1 5.5 10.33V5.67a.48.48 0 0 1 .805-.347l4.5 2.135z"/><path d="M15.625 4.312a2.003 2.003 0 0 0-1.414-1.414C12.812 2.5 8 2.5 8 2.5s-4.813 0-6.21.398a2.003 2.003 0 0 0-1.414 1.414C.001 5.718 0 8 0 8s0 2.282.377 3.688a2.003 2.003 0 0 0 1.414 1.414C3.187 13.5 8 13.5 8 13.5s4.813 0 6.21-.398a2.003 2.003 0 0 0 1.414-1.414C15.999 10.282 16 8 16 8s0-2.282-.375-3.688z"/></svg>',
    TIKTOK: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>',
    THREADS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.17,11.58c0,1.25-.43,2.33-1.28,3.25s-1.9,1.38-3.13,1.38c-1.39,0-2.58-.61-3.54-1.83L4.8,14.77c1.19,1.4,2.83,2.1,4.92,2.1,1.93,0,3.48-.56,4.64-1.68,1.16-1.12,1.74-2.62,1.74-4.52,0-1.88-.63-3.47-1.88-4.78s-2.76-1.96-4.51-1.96c-2.15,0-3.83,.79-5.04,2.36l.42-.16c.33-.13,.67-.2,1.03-.2,.55,0,1.02,.17,1.4,.51,.39,.34,.58,.82,.58,1.43,0,.5-.17,1.02-.52,1.55s-.77,.8-1.28,.8c-.53,0-1-.21-1.39-.64s-.58-.99-.58-1.69c0-1.21,.53-2.2,1.59-2.98,1.06-.78,2.4-1.17,4.02-1.17,1.88,0,3.41,.6,4.59,1.81,1.18,1.2,1.77,2.77,1.77,4.68Z"/></svg>',
    TELEGRAM: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>',
    CONSULTATION: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    DESIGN: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    PRODUCTION: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    DELIVERY: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    CHEVRON_DOWN: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
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

const state = {
    siteData: {
        images: {
            logo: "https://raw.githubusercontent.com/ahmath-musharraf/InkSpire/refs/heads/main/inkspirelogo.png",
            hero: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1887&auto=format&fit=crop',
            about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        },
        projects: [
            { category: 'Print & Marketing', title: 'Kattankudy Municipal Council Brochures', description: 'Designed and printed informative brochures for local government initiatives.', image: 'https://images.unsplash.com/photo-1583339793444-4794a5357a62?q=80&w=1887&auto=format&fit=crop' },
            { category: 'Stationery & Branding', title: 'Batticaloa Cafe Menu Printing', description: 'Created durable, beautifully designed menus for a popular local cafe.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop' },
            { category: 'Print & Marketing', title: 'Arugam Bay Surf Season Flyers', description: 'Produced vibrant, eye-catching flyers to promote events during the surf season.', image: 'https://images.unsplash.com/photo-1618799023028-1100b732d84c?q=80&w=1887&auto=format&fit=crop' },
            { category: 'Corporate Gifts', title: 'Pasikudah Resort Welcome Kit Printing', description: 'Assembled and printed premium welcome kits for a luxury beach resort.', image: 'https://images.unsplash.com/photo-1562619425-c307bb834a52?q=80&w=1964&auto=format&fit=crop' },
            { category: 'Event Branding', title: 'Eastern University Event Banners', description: 'Delivered large-format banners and branding materials for a university event.', image: 'https://images.unsplash.com/photo-1533750349088-249928d0501f?q=80&w=2070&auto=format&fit=crop' },
            { category: 'Signages & Backdrops', title: 'Batticaloa Food Festival Backdrop', description: 'Constructed a large, themed backdrop for the city\'s annual food festival.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b6?q=80&w=2070&auto=format&fit=crop' },
        ],
        team: [
            { name: 'MN. Abdul Rahman', role: 'Founder & CEO', image: "https://raw.githubusercontent.com/ahmath-musharraf/InkSpire/refs/heads/main/Ar.jpeg" },
            { name: 'MJA. Musharraf', role: 'Head Of Creative', image: "https://raw.githubusercontent.com/ahmath-musharraf/InkSpire/refs/heads/main/Musharraf.jpg" },
            { name: 'M. Aaqif', role: 'Graphic Artist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
        ],
        testimonials: [
            { quote: "INK Spire transformed our local cafe's branding with their incredible menu and flyer designs. The quality was exceptional, and our customers in Batticaloa love the new look!", name: 'Sahan Perera', title: 'Owner, The Lighthouse Cafe', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
            { quote: "Their team handled all the branding for our annual tech conference in Colombo, from banners to corporate gifts. Professional, creative, and delivered on time. Highly recommended.", name: 'Fathima Rauf', title: 'Event Coordinator, CodeFest Sri Lanka', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
            { quote: "We needed high-quality custom apparel for our new clothing line. INK Spire's textile printing service was flawless. The colors are vibrant and the fabric quality is excellent.", name: 'Rajiv Kumar', title: 'Founder, Kandy Trends', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop' },
            { quote: "The team at INK Spire delivered stunning standees and backdrops for our hotel launch in Galle. Their attention to detail and creative input was invaluable.", name: 'Anusha Silva', title: 'Marketing Manager, Galle Fort Hotel', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
            { quote: "For our resort in Trincomalee, we needed durable and beautiful outdoor signage. INK Spire exceeded our expectations with weather-resistant signs that perfectly match our brand.", name: 'David Ratnayake', title: 'General Manager, Trinco Blu', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop' },
        ],
        process: [
            { icon: 'CONSULTATION', title: 'Consultation & Quote', description: "We start by understanding your vision, requirements, and budget to provide a tailored quote and timeline." },
            { icon: 'DESIGN', title: 'Design & Proofing', description: "Our creative team designs the artwork. You'll receive a digital proof for approval before we proceed to print." },
            { icon: 'PRODUCTION', title: 'Production', description: 'Once approved, your project moves to our state-of-the-art production facility where we bring it to life with precision.' },
            { icon: 'DELIVERY', title: 'Delivery & Follow-up', description: 'We ensure your finished products are delivered safely and on time. We follow up to guarantee your complete satisfaction.' }
    },
    productsData: [
        { name: 'Premium Business Cards (x100)', price: 'LKR 2,500', description: '350gsm matte laminated cards with sharp, vibrant colors.', image: 'https://images.unsplash.com/photo-1614036417651-fe75796048a6?q=80&w=2070&auto=format&fit=crop', category: 'Stationery & Office' },
        { name: 'A5 Flyers (x500)', price: 'LKR 8,000', description: 'High-quality 150gsm gloss paper, perfect for promotions.', image: 'https://images.unsplash.com/photo-1599011329384-25330510842b?q=80&w=1887&auto=format&fit=crop', category: 'Marketing & Promo' },
        { name: 'Roll-Up Banner (Standard)', price: 'LKR 12,500', description: 'Durable, portable, and easy to set up for any event.', image: 'https://images.unsplash.com/photo-1587614299344-9842f27?q=80&w=1916&auto=format&fit=crop', category: 'Signage & Display' },
        { name: 'Custom Mugs (x10)', price: 'LKR 4,500', description: 'Personalized ceramic mugs, ideal for corporate branding.', image: 'https://images.unsplash.com/photo-1510616003312-1ce26858b940?q=80&w=1887&auto=format&fit=crop', category: 'Gifts & Personal' },
        { name: 'A4 Branded Notepads (x25)', price: 'LKR 6,000', description: 'Professionally designed notepads for office or client use.', image: 'https://images.unsplash.com/photo-1584661913429-5401b392348d?q=80&w=1887&auto=format&fit=crop', category: 'Stationery & Office' },
        { name: 'Event T-Shirts (x20)', price: 'LKR 15,000', description: 'High-quality cotton t-shirts with custom screen printing.', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop', category: 'Apparel & Textiles' },
        { name: 'Die-Cut Stickers (x100)', price: 'LKR 3,000', description: 'Custom shape vinyl stickers, waterproof and durable.', image: 'https://images.unsplash.com/photo-1629853275992-429910d9082d?q=80&w=2070&auto=format&fit=crop', category: 'Marketing & Promo' },
        { name: 'Canvas Tote Bags (x50)', price: 'LKR 20,000', description: 'Eco-friendly tote bags with your custom design printed.', image: 'https://images.unsplash.com/photo-1579065560482-a7b3b4b478c5?q=80&w=1887&auto=format&fit=crop', category: 'Apparel & Textiles' },
    ],
    searchableData: [],
    testimonialIntervalId: null,
    activeProductCategory: 'All',
};

// -----------------------------------------------------------------------------
// --- HELPERS ---
// Utility functions for creating elements and handling SVGs.
// -----------------------------------------------------------------------------

/**
 * Creates a DOM element with attributes and children.
 * @param tag The HTML tag for the element.
 * @param attributes An object of attributes to set on the element.
 * @param children An array of child nodes or strings to append.
 * @returns The created element.
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
 * Creates an SVG element from a string.
 * @param svgString The SVG markup.
 * @returns The created SVG element or null.
 */
const createSVG = (svgString) => {
    const div = document.createElement('div');
    div.innerHTML = svgString;
    return div.querySelector('svg');
};

/**
 * Injects SVG icons into elements with a 'data-inject-icon' attribute.
 */
function injectSVGIcons() {
    document.querySelectorAll('[data-inject-icon]').forEach(el => {
        const iconName = el.getAttribute('data-inject-icon');
        const iconClass = el.getAttribute('data-icon-class');
        if (iconName && ICONS[iconName]) {
            const svgEl = createSVG(ICONS[iconName]);
            if (svgEl && iconClass) {
                svgEl.setAttribute('class', iconClass);
            }
            el.innerHTML = '';
            if (svgEl) {
                el.appendChild(svgEl);
            }
        }
    });
}


// -----------------------------------------------------------------------------
// --- RENDER FUNCTIONS ---
// Each function is responsible for building and rendering a section of the page.
// -----------------------------------------------------------------------------

function renderHeader() {
    const { siteData } = state;
    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) headerLogo.setAttribute('src', siteData.images.logo);
}

function renderHero() {
    const { siteData } = state;
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        heroImage.setAttribute('src', siteData.images.hero);
        heroImage.setAttribute('decoding', 'async');
    }
}

function typewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const words = ['Printing.', 'Branding.', 'Design.', 'Marketing.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChars = isDeleting 
            ? currentWord.substring(0, charIndex - 1)
            : currentWord.substring(0, charIndex + 1);

        typewriterElement.textContent = currentChars;
        charIndex += isDeleting ? -1 : 1;

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        const typeSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typeSpeed);
    }
    type();
}

function renderAbout() {
    const { siteData } = state;
    const aboutImage = document.getElementById('about-image');
    if (aboutImage) {
        aboutImage.setAttribute('src', siteData.images.about);
        aboutImage.setAttribute('loading', 'lazy');
        aboutImage.setAttribute('decoding', 'async');
    }
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
  
    return createElement('div', { id: `modal-${id}`, className: 'service-modal hidden fixed inset-0 bg-black/80 z-[61] flex items-center justify-center p-4 animate-fade-in' }, [
      createElement('div', { className: 'bg-brand-secondary rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up modal-content' }, [
        createElement('div', { className: 'flex justify-between items-center mb-6' }, [
          createElement('h3', { className: 'text-2xl md:text-3xl font-bold text-white' }, [content.title]),
          createElement('button', { className: 'close-modal-btn text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent' }, [
            (() => {
                 const icon = createSVG(ICONS.CLOSE);
                 if (icon) {
                     icon.setAttribute('class', 'w-6 h-6');
                 }
                 return icon;
             })()
          ])
        ]),
        createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6' }, listItems)
      ])
    ]);
}

function renderServices() {
    const container = document.getElementById('services');
    if (!container) return;
    container.innerHTML = ''; 

    const mainServices = [
        { id: 'print', icon: ICONS.PRINT, title: 'Print & Marketing', description: 'Comprehensive printing solutions and marketing materials to elevate your brand presence.'},
        { id: 'fashion', icon: ICONS.FASHION, title: 'Fashion & Textile', description: 'Custom designs and high-quality printing for apparel and textiles.'},
        { id: 'office', icon: ICONS.OFFICE, title: 'Office & Store Branding', description: 'Transform your commercial spaces with cohesive branding solutions.'},
        { id: 'signages', icon: ICONS.SIGNAGES, title: 'All Signages', description: 'Eye-catching and durable signages of all types for indoor and outdoor use.'},
        { id: 'flags', icon: ICONS.FLAGS, title: 'All Flags', description: 'Custom-printed flags for events, promotions, and corporate displays.'},
        { id: 'standees', icon: ICONS.STANDEES, title: 'Standees and Backdrops', description: 'Portable and professional standees and backdrops for trade shows and events.'},
        { id: 'gifts', icon: ICONS.GIFTS, title: 'Corporate Gifts & Bags', description: 'A wide range of customizable corporate gifts and bags that leave a lasting impression.'},
    ];

    const serviceCards = mainServices.map((service, index) => {
        const icon = createSVG(service.icon);
        if (icon) icon.setAttribute('class', 'w-8 h-8');

        return createElement('div', {
            className: 'bg-brand-secondary p-8 rounded-lg shadow-lg hover:shadow-brand-accent/20 border border-transparent hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden flex flex-col h-full',
            style: { animationDelay: `${index * 0.1}s` }
        }, [
            createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-pan-fast [background-size:200%_200%]' }),
            createElement('div', { className: 'relative z-10 flex-grow' }, [
                createElement('div', { className: 'text-brand-accent mb-4 transition-transform duration-300 group-hover:rotate-12' }, [icon]),
                createElement('h3', { className: 'text-xl font-bold text-white mb-3' }, [service.title]),
                createElement('p', { className: 'text-gray-400 leading-relaxed' }, [service.description])
            ]),
            createElement('div', { className: 'relative z-10 mt-6' }, [
                createElement('button', {
                    'data-modal-id': service.id,
                    className: 'font-semibold text-brand-accent hover:text-yellow-300 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent'
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

function renderProducts() {
    const container = document.getElementById('products');
    if (!container) return;
    container.innerHTML = '';
    
    const { productsData, activeProductCategory } = state;
    const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];
    
    const filterButtons = categories.map(category => {
        const isActive = category === activeProductCategory;
        return createElement('button', {
            className: `px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-secondary ${isActive ? 'bg-brand-accent text-brand-primary shadow-lg shadow-yellow-500/20' : 'bg-brand-secondary/50 text-gray-300 hover:bg-brand-secondary'}`,
            'data-category': category,
        }, [category]);
    });

    const filterContainer = createElement('div', { 
        id: 'product-filter-buttons', 
        className: 'flex justify-center flex-wrap gap-x-4 gap-y-3 mb-12' 
    }, filterButtons);

    const filteredProducts = activeProductCategory === 'All' 
        ? productsData 
        : productsData.filter(p => p.category === activeProductCategory);

    const productCards = filteredProducts.map((product, index) => {
        const productCard = createElement('div', {
            className: 'group h-full',
            style: { animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`, opacity: '0' }
          }, [
            createElement('div', {
              className: 'relative flex flex-col h-full bg-brand-secondary rounded-lg shadow-lg border border-transparent hover:border-brand-accent/30 transition-all duration-300 ease-in-out group-hover:shadow-brand-accent/20 group-hover:-translate-y-2'
            }, [
                createElement('div', { className: 'relative h-48 group' }, [
                    createElement('img', { 
                        src: product.image, 
                        alt: product.name, 
                        className: 'w-full h-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110',
                        loading: 'lazy',
                        decoding: 'async'
                    })
                  ]),
                  createElement('div', { className: 'p-6 flex flex-col flex-grow relative' }, [
                    createElement('h3', { className: 'text-xl font-bold text-white mb-2' }, [product.name]),
                    createElement('p', { className: 'text-gray-400 leading-relaxed mb-4 flex-grow' }, [product.description]),
                    createElement('div', { className: 'mt-auto' }, [
                      createElement('p', { className: 'text-2xl font-bold text-brand-accent mb-4' }, [product.price]),
                      createElement('a', {
                        href: `https://wa.me/+940742200156?text=${encodeURIComponent(`Hello INK Spire, I'm interested in ordering the "${product.name}". Can we discuss the details?`)}`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'inline-flex items-center justify-center w-full bg-brand-accent text-brand-primary font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-secondary'
                      }, [
                        'Order on WhatsApp',
                        createElement('span', { className: 'ml-2 w-5 h-5' }, [createSVG(ICONS.WHATSAPP)])
                      ])
                    ])
                  ])
            ])
        ]);
        return productCard;
    });

    const productList = createElement('div', { 
        id: 'product-list', 
        className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' 
    }, productCards);

    const header = createElement('div', { className: 'text-center mb-16' }, [
        createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Products']),
        createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Products & Pricing']),
        createElement('p', { className: 'max-w-2xl mx-auto text-gray-400 mt-4' }, ['Select a product to start your order. We offer high-quality printing solutions for all your needs.'])
    ]);

    container.appendChild(createElement('div', { className: 'container mx-auto px-6' }, [header, filterContainer, productList]));
}

function renderProjects() {
    const container = document.getElementById('projects');
    if (!container) return;
    container.innerHTML = '';
    
    const { siteData } = state;
    const projectCards = siteData.projects.map((project, index) => {
        return createElement('div', {
            className: 'bg-brand-secondary rounded-lg shadow-lg animate-fade-in-up border border-transparent hover:border-brand-accent/50 transition-all duration-300 flex flex-col h-full overflow-hidden group',
            style: { animationDelay: `${index * 0.1}s` }
        }, [
            createElement('div', { className: 'relative overflow-hidden h-48 group' }, [
              createElement('img', { 
                  src: project.image, 
                  alt: project.title, 
                  className: 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110',
                  loading: 'lazy',
                  decoding: 'async'
              })
            ]),
            createElement('div', { className: 'p-8 flex flex-col flex-grow relative' }, [
              createElement('p', { className: 'text-sm font-medium text-brand-accent uppercase tracking-wider' }, [project.category]),
              createElement('h3', { className: 'text-2xl font-bold mt-2 text-white' }, [project.title]),
              createElement('p', { className: 'text-gray-400 mt-3 leading-relaxed flex-grow' }, [project.description]),
              createElement('div', { className: 'mt-6' }, [
                createElement('span', { className: 'font-semibold text-brand-accent/70' }, ['View Project →'])
              ])
            ])
        ]);
    });

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

function renderWhyChooseUs() {
    const container = document.getElementById('why-choose-us');
    if (!container) return;
    container.innerHTML = '';

    const reasons = [
        { icon: ICONS.CREATIVE, title: 'Creative Excellence', description: 'Our design team brings passion and innovation to every project, ensuring your brand stands out.' },
        { icon: ICONS.CLIENT_CENTRIC, title: 'Client-Centric Approach', description: 'We prioritize your needs, offering personalized service and clear communication from start to finish.' },
        { icon: ICONS.PROVEN_RESULTS, title: 'Proven Results', description: 'With a portfolio of successful projects across Sri Lanka, we deliver quality you can trust.' }
    ];

    const reasonCards = reasons.map((reason, index) => {
        return createElement('div', { 
            className: 'text-center p-6 animate-fade-in-up',
            style: { animationDelay: `${index * 0.15}s` }
        }, [
            createElement('div', { className: 'flex justify-center items-center mb-4' }, [
                createElement('div', { className: 'bg-brand-secondary p-4 rounded-full' }, [
                    createSVG(reason.icon)
                ])
            ]),
            createElement('h3', { className: 'text-xl font-bold text-white mb-2' }, [reason.title]),
            createElement('p', { className: 'text-gray-400' }, [reason.description])
        ]);
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Why Choose Us']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Your Trusted Partner in Print']),
        ]),
        createElement('div', { className: 'grid md:grid-cols-3 gap-8' }, reasonCards)
    ]);
    
    container.appendChild(content);
}

function renderPrintingProcess() {
    const container = document.getElementById('process');
    if (!container) return;
    container.innerHTML = '';
    
    const { siteData } = state;
    const processSteps = siteData.process.map((step, index) => {
        return createElement('div', { 
            className: 'relative flex items-start animate-fade-in-up',
            style: { animationDelay: `${index * 0.15}s` }
        }, [
            createElement('div', { className: 'flex-shrink-0 w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center text-brand-accent mr-6' }, [
                createSVG(ICONS[step.icon])
            ]),
            index < siteData.process.length - 1 ? createElement('div', { className: 'absolute top-16 left-8 w-px h-full bg-brand-secondary/50' }) : null,
            createElement('div', {}, [
                createElement('h3', { className: 'text-xl font-bold text-white' }, [`Step ${index + 1}: ${step.title}`]),
                createElement('p', { className: 'text-gray-400 mt-2' }, [step.description])
            ])
        ].filter(Boolean));
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['Our Process']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Streamlined from Start to Finish']),
        ]),
        createElement('div', { className: 'max-w-3xl mx-auto space-y-12' }, processSteps)
    ]);
    container.appendChild(content);
}

function renderTeam() {
    const container = document.getElementById('team');
    if (!container) return;
    container.innerHTML = '';
    
    const teamCards = state.siteData.team.map((member, index) => {
        return createElement('div', {
            className: 'text-center bg-brand-secondary p-8 rounded-lg shadow-lg border border-transparent hover:border-brand-accent/50 transition-all duration-300 relative h-full',
            style: { animation: `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`, opacity: '0' }
        }, [
            createElement('div', { className: 'relative w-32 h-32 mx-auto group' }, [
                createElement('img', { 
                    src: member.image, 
                    alt: member.name, 
                    className: 'w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-purple/50',
                    loading: 'lazy',
                    decoding: 'async'
                })
            ]),
            createElement('h3', { className: 'text-xl font-bold text-white mt-4' }, [member.name]),
            createElement('p', { className: 'text-brand-accent font-semibold' }, [member.role])
        ]);
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

function renderClients() {
    const container = document.getElementById('clients');
    if (!container) return;
    container.innerHTML = '';

    const clients = [
        'Dialog',
        'Brandix',
        'MAS Holdings',
        'Hemas',
        'John Keells',
        'Hayleys',
        'Dialog'
    ];
    
    const duplicatedClients = [...clients, ...clients];

    const clientLogos = duplicatedClients.map(clientName => {
        return createElement('div', {
            className: 'flex-shrink-0 w-48 flex items-center justify-center mx-8'
        }, [
            createElement('div', { className: 'flex items-center space-x-3 text-gray-400' }, [
                createSVG(ICONS.CLIENT_LOGO),
                createElement('span', { className: 'font-semibold text-lg' }, [clientName])
            ])
        ]);
    });

    const content = createElement('div', { className: 'container mx-auto px-6 py-16' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-3' }, ['Trusted by Industry Leaders']),
            createElement('p', { className: 'text-gray-400' }, ['We are proud to have partnered with a diverse range of clients.'])
        ]),
        createElement('div', { className: 'relative w-full overflow-hidden' }, [
             createElement('div', { className: 'flex animate-marquee-slow' }, clientLogos)
        ])
    ]);
    container.appendChild(content);
}

function setupTestimonialsCarousel() {
    const { testimonials } = state.siteData;
    const contentContainer = document.getElementById('testimonial-content');
    const dotsContainer = document.getElementById('testimonial-dots');
    const progressEl = document.getElementById('testimonial-progress');
    if (!contentContainer || !dotsContainer || !progressEl || testimonials.length === 0) return;

    let currentIndex = 0;
    const DURATION = 7000;

    function showTestimonial(index) {
        contentContainer.innerHTML = '';
        progressEl.style.transition = 'none';
        progressEl.style.width = '0%';
        
        const testimonial = testimonials[index];
        const content = createElement('div', { className: 'animate-fade-in' }, [
            createElement('img', { 
                src: testimonial.image, 
                alt: testimonial.name, 
                className: 'w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-brand-purple/50',
                loading: 'lazy',
                decoding: 'async'
            }),
            createElement('p', { className: 'text-gray-300 italic text-lg leading-relaxed mb-6' }, [testimonial.quote]),
            createElement('h4', { className: 'text-xl font-bold text-white' }, [testimonial.name]),
            createElement('p', { className: 'text-brand-accent font-semibold' }, [testimonial.title]),
        ]);

        contentContainer.appendChild(content);

        Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
            dot.classList.toggle('bg-brand-accent', dotIndex === index);
            dot.classList.toggle('bg-gray-600', dotIndex !== index);
        });
        
        setTimeout(() => {
            progressEl.style.transition = `width ${DURATION / 1000}s linear`;
            progressEl.style.width = '100%';
        }, 50);
    }

    dotsContainer.innerHTML = '';
    testimonials.forEach((_, index) => {
        const dot = createElement('button', {
            className: `w-3 h-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-secondary ${index === 0 ? 'bg-brand-accent' : 'bg-gray-600'}`,
            'data-index': index.toString(),
            'aria-label': `Go to testimonial ${index + 1}`
        });
        dotsContainer.appendChild(dot);
    });

    const resetInterval = () => {
        if (state.testimonialIntervalId) {
            clearInterval(state.testimonialIntervalId);
        }
        state.testimonialIntervalId = setInterval(nextTestimonial, DURATION);
    };

    dotsContainer.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' && target.dataset.index) {
            currentIndex = parseInt(target.dataset.index, 10);
            showTestimonial(currentIndex);
            resetInterval();
        }
    });

    const nextTestimonial = () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    };

    showTestimonial(0);
    resetInterval();
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
    
    container.append(
        createElement('div', {className: 'absolute -top-10 -left-10 text-brand-primary opacity-5 text-9xl z-0 transform -rotate-12'}, [createSVG(ICONS.QUOTE)]),
        createElement('div', {className: 'absolute -bottom-10 -right-10 text-brand-primary opacity-5 text-9xl z-0 transform rotate-12'}, [createSVG(ICONS.QUOTE)]),
        content
    );
    setupTestimonialsCarousel();
}

function renderFAQ() {
    const container = document.getElementById('faq');
    if (!container) return;
    container.innerHTML = '';
    
    const faqItems = state.siteData.faq.map((item, index) => {
        return createElement('div', { 
            className: 'border-b border-brand-secondary/30 animate-fade-in-up',
            style: { animationDelay: `${index * 0.1}s` }
        }, [
            createElement('h4', {}, [
                createElement('button', {
                    className: 'faq-question flex justify-between items-center w-full text-left p-6 bg-transparent hover:bg-brand-secondary/30 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent',
                    'aria-expanded': 'false',
                    'aria-controls': `faq-answer-${index}`
                }, [
                    createElement('span', { className: 'text-lg font-semibold text-white' }, [item.question]),
                    createElement('div', { className: 'transition-transform duration-300 shrink-0 ml-4 text-brand-accent' }, [createSVG(ICONS.CHEVRON_DOWN)])
                ])
            ]),
            createElement('div', {
                id: `faq-answer-${index}`,
                className: 'faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out',
            }, [
                createElement('div', { className: 'p-6 bg-brand-secondary' }, [
                    createElement('p', { className: 'text-gray-300' }, [item.answer])
                ])
            ])
        ]);
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'text-center mb-12' }, [
            createElement('h2', { className: 'text-sm font-bold uppercase tracking-widest text-brand-accent mb-2' }, ['FAQ']),
            createElement('h3', { className: 'text-3xl md:text-4xl font-bold text-white' }, ['Frequently Asked Questions']),
        ]),
        createElement('div', { id: 'faq-accordion', className: 'max-w-3xl mx-auto space-y-2' }, faqItems)
    ]);
    container.appendChild(content);
}

function renderContactCTA() {
    const container = document.getElementById('contact-cta');
    if (!container) return;
    container.innerHTML = '';

    container.appendChild(
        createElement('div', { className: 'container mx-auto px-6' }, [
            createElement('div', { className: 'bg-brand-accent rounded-lg shadow-lg p-12 text-center text-brand-primary' }, [
                createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, ["Ready to Start Your Project?"]),
                createElement('p', { className: 'max-w-xl mx-auto text-lg mb-8 text-brand-primary/80' }, ["Let's bring your ideas to life. Get in touch with us today for a free consultation and quote."]),
                createElement('a', {
                    href: '#contact',
                    className: 'inline-block bg-brand-primary text-brand-accent font-bold py-3 px-8 rounded-full hover:bg-white transition-colors text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary focus-visible:ring-offset-brand-accent'
                }, ['Contact Us'])
            ])
        ])
    );
}

function renderContactSection() {
    const container = document.getElementById('contact');
    if (!container) return;
    container.innerHTML = '';

    const submitButton = createElement('button', { type: 'submit', className: 'w-full bg-brand-accent text-brand-primary font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-brand-secondary' }, ["Send Message"]);

    const contactForm = createElement('form', { className: 'space-y-6' }, [
        createElement('input', { type: 'text', placeholder: 'Your Name', required: true, className: 'w-full p-4 bg-brand-primary border border-brand-secondary/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300' }),
        createElement('input', { type: 'email', placeholder: 'Your Email', required: true, className: 'w-full p-4 bg-brand-primary border border-brand-secondary/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300' }),
        createElement('textarea', { placeholder: 'Your Message', required: true, rows: '5', className: 'w-full p-4 bg-brand-primary border border-brand-secondary/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300' }),
        submitButton
    ]);
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            (contactForm as HTMLFormElement).reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 1500);
    });

    const content = createElement('div', { className: 'container mx-auto px-6' }, [
        createElement('div', { className: 'grid md:grid-cols-2 gap-16 items-center' }, [
            createElement('div', {}, [
                createElement('h3', { className: 'text-2xl font-bold text-white mb-4' }, ["Get in Touch"]),
                createElement('p', { className: 'text-gray-400 mb-8' }, ["We're here to help with all your printing needs. Reach out to us via phone, email, or visit our office."]),
                createElement('div', { className: 'space-y-6' }, [
                    createElement('a', { href: 'tel:+940742200156', className: 'flex items-center text-gray-300 hover:text-brand-accent rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' }, [createSVG(ICONS.PHONE), createElement('span', { className: 'ml-4' }, ["+94 (074) 220 0156"])]),
                    createElement('a', { href: 'mailto:inkspire.lk@gmail.com', className: 'flex items-center text-gray-300 hover:text-brand-accent rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' }, [createSVG(ICONS.EMAIL), createElement('span', { className: 'ml-4' }, ["inkspire.lk@gmail.com"])])
                ])
            ]),
            contactForm
        ])
    ]);
    container.appendChild(content);
}

function renderFooter() {
    const container = document.querySelector('footer');
    if (!container) return;
    container.innerHTML = '';
    
    const socialIcons = [
        { icon: ICONS.WHATSAPP, href: 'https://wa.me/+940742200156' },
        { icon: ICONS.FACEBOOK, href: 'https://www.facebook.com/InkSpire2k25' },
        { icon: ICONS.INSTAGRAM, href: 'https://www.instagram.com/ink_spire.lk' },
        { icon: ICONS.TIKTOK, href: 'https://www.tiktok.com/@ink_spire.lk' },
        { icon: ICONS.TELEGRAM, href: '#' },
        { icon: ICONS.YOUTUBE, href: '#' },
        { icon: ICONS.THREADS, href: '#' }
    ].map(social => createElement('a', { href: social.href, target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-400 hover:text-brand-accent transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-black' }, [
        createSVG(social.icon)
    ]));

    const content = createElement('div', { className: 'container mx-auto px-6 py-12' }, [
        createElement('div', { className: 'grid md:grid-cols-4 gap-8 text-center md:text-left items-start' }, [
            createElement('div', {}, [
                createElement('img', { src: state.siteData.images.logo, alt: 'INK Spire Logo', className: 'h-12 mx-auto md:mx-0' }),
                createElement('p', { className: 'text-gray-400 mt-4 max-w-xs mx-auto md:mx-0' }, ['Your one-stop solution for creative printing and branding in the Eastern Province.'])
            ]),
            createElement('div', {}, [
                createElement('h4', { className: 'text-lg font-semibold text-white mb-4' }, ['Quick Links']),
                createElement('ul', { className: 'space-y-2' }, [
                    createElement('li', {}, [createElement('a', { href: '#services', className: 'text-gray-400 hover:text-brand-accent rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' }, ['Services'])]),
                    createElement('li', {}, [createElement('a', { href: '#products', className: 'text-gray-400 hover:text-brand-accent rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' }, ['Products'])]),
                    createElement('li', {}, [createElement('a', { href: '#contact', className: 'text-gray-400 hover:text-brand-accent rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' }, ['Contact'])] ),
                ])
            ]),
             createElement('div', {}, [
                 createElement('h4', { className: 'text-lg font-semibold text-white mb-4' }, ['Our Location']),
                 createElement('a', { 
                    href: 'https://maps.app.goo.gl/TiBLPa9wGDZo9fbF6', // Replace with your actual Google Maps link
                    target: '_blank', 
                    rel: 'noopener noreferrer', 
                    className: 'flex items-start justify-center md:justify-start text-gray-400 hover:text-brand-accent transition-colors rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent' 
                }, [
                    createSVG(ICONS.MAP_PIN),
                    createElement('span', { className: 'ml-2' }, ['No.75, Beach Road, Kattankudy - 03'])
                 ])
            ]),
            createElement('div', {}, [
                 createElement('h4', { className: 'text-lg font-semibold text-white mb-4' }, ['Follow Us']),
                 createElement('div', { className: 'flex justify-center md:justify-start space-x-4' }, socialIcons)
            ])
        ]),
        createElement('div', { className: 'mt-12 border-t border-brand-secondary/30 pt-8 text-center text-gray-500' }, [
            createElement('p', {}, [`© ${new Date().getFullYear()} INK Spire. All Rights Reserved.`])
        ])
    ]);
    container.appendChild(content);
}

// -----------------------------------------------------------------------------
// --- SEARCH ---
// -----------------------------------------------------------------------------

function createSearchIndex() {
    state.searchableData = [];
    const { productsData, siteData } = state;

    productsData.forEach(product => {
        state.searchableData.push({ type: 'Product', title: product.name, description: product.description, link: '#products' });
    });

    for (const serviceId in servicesData) {
        const service = servicesData[serviceId];
        state.searchableData.push({ type: 'Service', title: service.title, description: `A wide range of services including ${Object.keys(service.data).join(', ')}.`, link: '#services' });
        for (const category in service.data) {
            service.data[category].forEach(item => {
                state.searchableData.push({ type: 'Service Item', title: item, description: `${category} under ${service.title}`, link: '#services' });
            });
        }
    }

    siteData.process.forEach(step => {
        state.searchableData.push({ type: 'Process', title: step.title, description: step.description, link: '#process' });
    });

    siteData.faq.forEach(item => {
        state.searchableData.push({ type: 'FAQ', title: item.question, description: item.answer, link: '#faq' });
    });
}

// -----------------------------------------------------------------------------
// --- INITIALIZATION & EVENT LISTENERS ---
// -----------------------------------------------------------------------------

function setupEventListeners() {
    const header = document.getElementById('header');
    const main = document.querySelector('main');
    const backToTopBtn = document.getElementById('back-to-top');

    // Header & Back-to-Top scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('bg-brand-primary/80', 'backdrop-blur-sm', 'shadow-lg');
            backToTopBtn?.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        } else {
            header?.classList.remove('bg-brand-primary/80', 'backdrop-blur-sm', 'shadow-lg');
            backToTopBtn?.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', (!isExpanded).toString());
    });
    
    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Service modals
    document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const serviceBtn = target.closest('[data-modal-id]');
        if (serviceBtn) {
            const modalId = serviceBtn.getAttribute('data-modal-id');
            const modal = document.getElementById(`modal-${modalId}`);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                main?.setAttribute('aria-hidden', 'true');
                header?.setAttribute('aria-hidden', 'true');
            }
        }
        
        const closeModalBtn = target.closest('.close-modal-btn');
        if (closeModalBtn) {
            const modal = closeModalBtn.closest('.service-modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
                main?.removeAttribute('aria-hidden');
                header?.removeAttribute('aria-hidden');
            }
        }

        if (target.matches('.service-modal')) {
             target.classList.add('hidden');
             document.body.style.overflow = '';
             main?.removeAttribute('aria-hidden');
             header?.removeAttribute('aria-hidden');
        }
    });

    // Product filter
    document.getElementById('products')?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const button = target.closest('[data-category]') as HTMLButtonElement;
        if (button) {
            state.activeProductCategory = button.dataset.category || 'All';
            renderProducts();
        }
    });

    // FAQ accordion
    document.getElementById('faq-accordion')?.addEventListener('click', e => {
        const questionButton = (e.target as HTMLElement).closest('.faq-question');
        if (!questionButton) return;

        const controlledPanelId = questionButton.getAttribute('aria-controls');
        const answer = document.getElementById(controlledPanelId);
        if (!answer) return;
        
        const icon = questionButton.querySelector('svg')?.parentElement;
        const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';

        // Toggle the clicked one
        if (isExpanded) {
            questionButton.setAttribute('aria-expanded', 'false');
            answer.style.maxHeight = '0px';
            icon?.classList.remove('rotate-180');
        } else {
            questionButton.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon?.classList.add('rotate-180');
        }
    });

    // Search modal
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const searchResultsContainer = document.getElementById('search-results');
    
    const openSearch = () => {
        searchModal?.classList.remove('hidden');
        main?.setAttribute('aria-hidden', 'true');
        header?.setAttribute('aria-hidden', 'true');
    }
    const closeSearch = () => {
        searchModal?.classList.add('hidden');
        main?.removeAttribute('aria-hidden');
        header?.removeAttribute('aria-hidden');
    }
    
    document.getElementById('open-search-desktop')?.addEventListener('click', openSearch);
    document.getElementById('open-search-mobile')?.addEventListener('click', openSearch);
    document.getElementById('close-search-modal')?.addEventListener('click', closeSearch);
    searchModal?.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });

    searchInput?.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (searchResultsContainer) searchResultsContainer.innerHTML = '';
        
        if (query.length < 2) return;

        const results = state.searchableData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(item => {
                const resultEl = createElement('a', {
                    href: item.link,
                    className: 'block p-4 hover:bg-brand-purple transition-colors border-b border-brand-purple/30 rounded focus:outline-none focus-visible:bg-brand-purple',
                }, [
                    createElement('div', { className: 'flex justify-between items-center' }, [
                        createElement('h4', { className: 'font-bold text-white' }, [item.title]),
                        createElement('span', { className: 'text-xs bg-brand-accent/20 text-brand-accent px-2 py-1 rounded-full' }, [item.type])
                    ]),
                    createElement('p', { className: 'text-sm text-gray-400 mt-1' }, [item.description])
                ]);
                resultEl.addEventListener('click', closeSearch);
                searchResultsContainer?.appendChild(resultEl);
            });
        } else {
            if (searchResultsContainer) {
                searchResultsContainer.appendChild(createElement('div', { className: 'p-4 text-center text-gray-500' }, ['No results found.']));
            }
        }
    });
}

function renderAllSections() {
    renderHeader();
    renderHero();
    renderAbout();
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
}

function initApp() {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    window.onload = () => {
        setTimeout(() => {
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.addEventListener('transitionend', () => preloader.style.display = 'none');
            }
            body.classList.remove('body-loading');
        }, 500);
    };

    injectSVGIcons();
    renderAllSections();
    setupEventListeners();
    typewriterEffect();
}

document.addEventListener('DOMContentLoaded', initApp);
