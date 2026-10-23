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
  const thumb=id?'https://img.youtube.com/vi/'+encodeURIComponent(id)+'/maxresdefault.jpg':'The_Sukoon_Lab_Mohe_Apne_Hi_Rang_Mein_Cover_3000x3000.png';
  const spotifyIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1DB954"/><path d="M7.2 12.1c6.2-1.9 13.4-1.3 18.1 1.6" fill="none" stroke="#102c2c" stroke-width="2.1" stroke-linecap="round"/><path d="M8.3 16.1c5.3-1.5 11.6-.9 15.5 1.5M9.4 20c4.3-1.1 9.1-.5 12.5 1.4" fill="none" stroke="#102c2c" stroke-width="1.8" stroke-linecap="round"/></svg>';
  const appleIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#fa365c"/><path d="M19.8 7.3v14.1a3.7 3.7 0 1 1-2-3.3V12l-7 1.7v9.2a3.7 3.7 0 1 1-2-3.3V11.8z" fill="#fff"/></svg>';
  const ytMusicIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#ff0033"/><circle cx="16" cy="16" r="9.2" fill="none" stroke="#fff" stroke-width="2"/><path d="M14 11.8 20.2 16 14 20.2z" fill="#fff"/></svg>';
  const links=[r.youtube?'<a class="plain-video-link" href="'+esc(r.youtube)+'" target="_blank" rel="noopener">YouTube ↗</a>':'',r.spotify?'<a class="platform-link spotify-link" href="'+esc(r.spotify)+'" target="_blank" rel="noopener" aria-label="Listen on Spotify">'+spotifyIcon+'<span>Spotify</span><b aria-hidden="true">↗</b></a>':'',r.apple?'<a class="platform-link apple-link" href="'+esc(r.apple)+'" target="_blank" rel="noopener" aria-label="Listen on Apple Music">'+appleIcon+'<span>Apple Music</span><b aria-hidden="true">↗</b></a>':'','<a class="platform-link ytmusic-link" href="'+esc(r.youtubeMusic||('https://music.youtube.com/search?q='+encodeURIComponent(title)))+'" target="_blank" rel="noopener" aria-label="Find '+esc(title)+' on YouTube Music">'+ytMusicIcon+'<span>YouTube Music</span><b aria-hidden="true">↗</b></a>'].filter(Boolean).join('');
  return '<article class="release-card"><div class="release-art">'+(id?'<img loading="lazy" src="'+thumb+'" alt="YouTube thumbnail for '+esc(title)+'" onerror="this.onerror=null;this.src=\'The_Sukoon_Lab_Mohe_Apne_Hi_Rang_Mein_Cover_3000x3000.png\';"><button class="release-play" type="button" data-video="'+esc(id)+'" data-title="'+esc(title)+'" aria-label="Play '+esc(title)+'">▶</button>':'<img loading="lazy" src="'+thumb+'" alt="The Sukoon Lab release artwork">')+'</div><div class="release-body"><h3>'+esc(title)+'</h3><p class="release-poet">'+esc(r.duration||'')+(r.date?' · '+esc(r.date):'')+'</p><div class="release-links">'+links+'</div></div></article>';
 }).join('');
 root.addEventListener('click',e=>{const b=e.target.closest('[data-video]');if(!b)return;const art=b.closest('.release-art');if(!art)return;const id=b.dataset.video;art.innerHTML='<iframe class="youtube-inline-player" src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0" title="'+esc(b.dataset.title)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';});
})();