(() => {
 const root=document.getElementById('poet-release-grid');
 if(!root||!Array.isArray(window.SUKOON_RELEASES))return;
 const poet=document.body.dataset.poet||'';
 const rows=window.SUKOON_RELEASES.filter(r=>String(r.poet||'').trim().toLowerCase()===poet.trim().toLowerCase());
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const count=document.getElementById('poet-release-count');
 if(count)count.textContent=rows.length+' catalogue release'+(rows.length===1?'':'s')+' credited to '+poet+'.';
 if(!rows.length){root.innerHTML='<p>No catalogue releases are currently credited to this poet.</p>';return;}
 root.innerHTML=rows.map(r=>{
  const title=String(r.title||'Untitled release').replace(/\s*\/\s*The Sukoon Lab\s*$/i,'').replace(/\s*\|\s*The Sukoon Lab\s*$/i,'');
  const id=(r.youtube||'').match(/[?&]v=([^&]+)/)?.[1];
  const thumb=id?'https://img.youtube.com/vi/'+encodeURIComponent(id)+'/hqdefault.jpg':'The_Sukoon_Lab_Mohe_Apne_Hi_Rang_Mein_Cover_3000x3000.png';
  const links=[r.youtube?'<a href="'+esc(r.youtube)+'" target="_blank" rel="noopener">YouTube ↗</a>':'',r.spotify?'<a href="'+esc(r.spotify)+'" target="_blank" rel="noopener">Spotify ↗</a>':'',r.apple?'<a href="'+esc(r.apple)+'" target="_blank" rel="noopener">Apple Music ↗</a>':'',r.youtubeMusic?'<a href="'+esc(r.youtubeMusic)+'" target="_blank" rel="noopener">YouTube Music ↗</a>':''].filter(Boolean).join('');
  return '<article class="release-card"><div class="release-art">'+(id?'<img loading="lazy" src="'+thumb+'" alt="YouTube thumbnail for '+esc(title)+'" onerror="this.onerror=null;this.src=\'The_Sukoon_Lab_Mohe_Apne_Hi_Rang_Mein_Cover_3000x3000.png\';"><button class="release-play" type="button" data-video="'+esc(id)+'" data-title="'+esc(title)+'" aria-label="Play '+esc(title)+'">▶</button>':'<img loading="lazy" src="'+thumb+'" alt="The Sukoon Lab release artwork">')+'</div><div class="release-body"><h3>'+esc(title)+'</h3><p class="release-poet">'+esc(r.duration||'')+(r.date?' · '+esc(r.date):'')+'</p><div class="release-links">'+links+'</div></div></article>';
 }).join('');
 root.addEventListener('click',e=>{const b=e.target.closest('[data-video]');if(!b)return;const art=b.closest('.release-art');if(!art)return;const id=b.dataset.video;art.innerHTML='<iframe class="youtube-inline-player" src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0" title="'+esc(b.dataset.title)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';});
})();