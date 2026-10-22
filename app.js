const grid=document.getElementById('release-grid');
function escapeHTML(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(filter='all',query=''){
 const q=query.trim().toLowerCase();
 const rows=SUKOON_RELEASES.filter(r=>(filter==='all'||r.genre===filter)&&(!q||[r.title,r.poet,r.genre,r.note].join(' ').toLowerCase().includes(q)));
 grid.innerHTML=rows.map(r=>`<article class="release-card"><div class="release-art"><img loading="lazy" src="${escapeHTML(r.art)}" alt="Artwork for ${escapeHTML(r.title)}"></div><div class="release-body"><h3>${escapeHTML(r.title)}</h3><div class="poet">POETRY / CREDIT · ${escapeHTML(r.poet)}</div><p>${escapeHTML(r.note||'A contemporary interpretation from The Sukoon Lab.')}</p><div class="genre">${escapeHTML(r.genre)}</div><div class="card-links">${r.spotify?`<a href="${escapeHTML(r.spotify)}" target="_blank" rel="noopener">Spotify ↗</a>`:''}${r.apple?`<a href="${escapeHTML(r.apple)}" target="_blank" rel="noopener">Apple ↗</a>`:''}${r.youtube?`<a href="${escapeHTML(r.youtube)}" target="_blank" rel="noopener">YouTube ↗</a>`:''}</div></div></article>`).join('');
 if(!rows.length)grid.innerHTML='<p class="catalogue-note">No matching releases found; try another poet, title or style.</p>';
}
render();
document.getElementById('release-search').addEventListener('input',e=>render(document.querySelector('.filter.active')?.dataset.filter||'all',e.target.value));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter,document.getElementById('release-search')?.value||'');}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.desktop-nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
