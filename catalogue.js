/* The first 30 catalogue entries transcribed from the user's Spotify for Artists screenshots (22 Oct 2026).
   Individual platform URLs are generated as searches, not fabricated track IDs. When a direct URL is verified,
   replace that search destination with the exact track URL. */
const SUKOON_RELEASES = [
 {title:"Rafta Rafta Wo Meri (Hasti Ka Saman Ho Goya)",poet:"Poetry credit to be confirmed",genre:"Ghazal / retro",note:"A classic ghazal brought into The Sukoon Lab's contemporary sound."},
 {title:"Thodi Si Jo Pi Li Hai (Hungama Hai Kyun Barpa)",poet:"Akbar Allahabadi",genre:"Retro / fusion",note:"A spirited classic reimagined with a modern arrangement."},
 {title:"Chupke Chupke Raat Din Aansu Bahana Yaad Hai",poet:"Hasrat Mohani",genre:"Ghazal",note:"A timeless expression of memory, longing and heartbreak."},
 {title:"Hazaaron Khwahishein Aisi",poet:"Mirza Ghalib",genre:"Indie pop / fusion",note:"Ghalib's restless, enduring vision of desire."},
 {title:"Dil-e-Nadaan Tujhe Hua Kya Hai",poet:"Mirza Ghalib",genre:"Ghazal",note:"A timeless question addressed to the heart."},
 {title:"Yeh Na Thi Hamari Qismat",poet:"Mirza Ghalib",genre:"Ghazal",note:"Fate, longing and the language of resignation."},
 {title:"Bekhud Kiye Dete Hain",poet:"Momin Khan Momin",genre:"Ghazal",note:"A beloved verse of surrender and intoxication."},
 {title:"Zakhm Jo Aap Ki Inayat Hai",poet:"Poetry credit to be confirmed",genre:"Ghazal",note:"An intimate, wounded reflection in the ghazal tradition."},
 {title:"Kuch To Hawa Bhi Sard Thi",poet:"Parveen Shakir",genre:"Indie pop",note:"A poem of longing, memory and things left unsaid.",spotify:"https://open.spotify.com/track/6VOyhUJ6VnPJYFmsIXN67S",apple:"https://music.apple.com/in/song/kuch-to-hawa-bhi-sard-thi/6783465603"},
 {title:"Har Ek Baat Pe Kehte Ho Tum Ke Tu Kya Hai",poet:"Mirza Ghalib",genre:"Ghazal",note:"Ghalib's enduring wit and emotional precision."},
 {title:"Tumhare Khat Me Naya Ek Salaam Kiska Tha",poet:"Ahmad Faraz",genre:"Ghazal",note:"A letter, a question, and the ache of uncertainty."},
 {title:"Chhap Tilak (Mose Naina Milai Ke)",poet:"Amir Khusro",genre:"Sufi / folk fusion",note:"A centuries-old expression of love and spiritual surrender."},
 {title:"Hum Bhi Aaram Utha Sakte The",poet:"Faiz Ahmed Faiz",genre:"Ghazal",note:"A poignant meditation on love, loss and sacrifice."},
 {title:"Tere Ishq Ki Inteha Chahta Hoon",poet:"Allama Iqbal",genre:"Ghazal / fusion",note:"A powerful poem of love pushed to its limits."},
 {title:"Tum Mere Paas Hote Ho Goya",poet:"Momin Khan Momin",genre:"Ghazal",note:"The intimacy of an imagined presence."},
 {title:"Wo Jo Hum Me Tum Me Qarar Tha",poet:"Momin Khan Momin",genre:"Ghazal",note:"A classic verse on the fragile peace between two lovers."},
 {title:"Roya Karenge Aap Bhi",poet:"Bahadur Shah Zafar",genre:"Ghazal",note:"A voice of heartbreak and belated recognition."},
 {title:"Ehsaas (Dard Hota Hai Ya Nahi Hota)",poet:"Poetry credit to be confirmed",genre:"Indie / poetry",note:"A contemporary, emotionally driven poetry release."},
 {title:"Sarakti Jaye Hai Rukh Se Naqab Ahista Ahista",poet:"Amir Minai",genre:"Ghazal",note:"A celebrated ghazal of revelation and restraint."},
 {title:"Ishq Mujh Ko Nahin Wahshat Hi Sahi",poet:"Mirza Ghalib",genre:"Ghazal",note:"Ghalib's defiant, unsettled declaration of love."},
 {title:"Baat Karni Mujhe Mushkil (Aisi To Na Thi)",poet:"Bahadur Shah Zafar",genre:"Indie pop",note:"A contemporary musical interpretation of Zafar's poetry.",youtube:"https://www.youtube.com/watch?v=N__eTJfDj_w",apple:"https://music.apple.com/in/song/baat-karni-mujhe-mushkil-aisi-to-na-thi/6806606947"},
 {title:"Us Ki Hasrat Hai (Jise Dil Se Mita Bhi Na Sake)",poet:"Ghalib (credit to verify against release metadata)",genre:"Ghazal",note:"A reflection on the memories that refuse to leave."},
 {title:"RANG (Mohe Apne Hi Rang Mein)",poet:"Amir Khusro",genre:"Sufi / contemporary",note:"A vivid, immersive take on a timeless Sufi composition."},
 {title:"Ye Hai Maikada",poet:"Poetry credit to be confirmed",genre:"Retro / ghazal",note:"A vintage-inspired release from the catalogue."},
 {title:"Sare Jahan Se Achha",poet:"Muhammad Iqbal",genre:"Patriotic / contemporary",note:"A contemporary interpretation of the iconic patriotic poem."},
 {title:"Chupke Chupke Raat Din (Lost 1980s Bollywood Version)",poet:"Hasrat Mohani",genre:"Retro / ghazal",note:"A nostalgic, cinematic take on a much-loved ghazal."},
 {title:"Hum Ko Yaan Dar Dar Firaya Yaar Ne",poet:"Poetry credit to be confirmed",genre:"Ghazal",note:"A poetry-led release from The Sukoon Lab catalogue."},
 {title:"Husn Ko Be-Hijab Hona Tha",poet:"Mirza Ghalib",genre:"Ghazal",note:"Ghalib's imagery of beauty and revelation."},
 {title:"Kaam Ki Baat Maine Ki Hi Nahi",poet:"Jaun Elia (credit to verify against release metadata)",genre:"Modern Urdu poetry",note:"A sharp, contemporary-feeling poetic reflection."},
 {title:"Hangama Hai Kyun Barpa (80s Bollywood Version)",poet:"Akbar Allahabadi",genre:"Retro / ghazal",note:"A playful classic reimagined with an 1980s Bollywood feel."}
];
const ARTIST_SPOTIFY = "https://open.spotify.com/artist/7iVKJNBCpjJNBDYlTeuj5M";
const grid=document.getElementById('release-grid');
function escapeHTML(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function spotifySearch(title){return 'https://open.spotify.com/search/'+encodeURIComponent(title+' The Sukoon Lab');}
function youtubeSearch(title){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(title+' The Sukoon Lab');}
function render(filter='all',query=''){
 const q=query.trim().toLowerCase();
 const rows=SUKOON_RELEASES.filter(r=>(filter==='all'||r.genre===filter)&&(!q||[r.title,r.poet,r.genre,r.note].join(' ').toLowerCase().includes(q)));
 grid.innerHTML=rows.map((r,i)=>{
  const art=r.art||(['assets/kuch-to-hawa.png','assets/har-ek-baat.png','assets/hazaaron-khwahishen.png','assets/tu-shayar.png','assets/itna-na-mujhse.png'][i%5]);
  const sp=r.spotify||spotifySearch(r.title), yt=r.youtube||youtubeSearch(r.title);
  return `<article class="release-card"><div class="release-art"><img loading="lazy" src="${escapeHTML(art)}" alt="Artwork for ${escapeHTML(r.title)}"></div><div class="release-body"><h3>${escapeHTML(r.title)}</h3><div class="poet">POETRY / CREDIT · ${escapeHTML(r.poet)}</div><p>${escapeHTML(r.note||'A contemporary interpretation from The Sukoon Lab.')}</p><div class="genre">${escapeHTML(r.genre)}</div><div class="card-links"><a href="${escapeHTML(sp)}" target="_blank" rel="noopener">Spotify ↗</a><a href="${escapeHTML(yt)}" target="_blank" rel="noopener">YouTube ↗</a>${r.apple?`<a href="${escapeHTML(r.apple)}" target="_blank" rel="noopener">Apple ↗</a>`:''}</div></div></article>`;
 }).join('');
 if(!rows.length)grid.innerHTML='<p class="catalogue-note">No matching releases found; try another poet, title or style.</p>';
}
render();
document.getElementById('release-search').addEventListener('input',e=>render(document.querySelector('.filter.active')?.dataset.filter||'all',e.target.value));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter,document.getElementById('release-search')?.value||'');}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.desktop-nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
