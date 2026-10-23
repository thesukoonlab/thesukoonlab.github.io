(() => {
  const grid = document.getElementById('release-grid');
  if (!grid || !Array.isArray(window.SUKOON_RELEASES)) return;
  const search = document.getElementById('release-search');
  const sort = document.getElementById('release-sort');
  const count = document.getElementById('release-count');
  const status = document.getElementById('catalogue-status');
  const more = document.getElementById('load-more');
  const filters = [...document.querySelectorAll('.filter')];
  const pageSize = 12;
  let activeFilter = 'all', query = '', visible = pageSize;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const genre = r => {
    const t = (r.title + ' ' + r.poet).toLowerCase();
    if (/sufi|khusrau|rang|qawwali|dar dar/.test(t)) return 'sufi';
    if (/retro|1980|80s|90s|unreleased|cassette|ghazal|humsafar|lag ja gale|chura liya|rafta rafta|hungama/.test(t)) return 'retro';
    if (/rock|indie|pop|lofi|trap|remix|deep house|drill|grunge|live concert/.test(t)) return 'indie';
    return 'poetry';
  };
  const cover = r => {
    const t = (r.title + ' ' + r.poet).toLowerCase();
    if (/rang|khusrau/.test(t)) return 'The_Sukoon_Lab_Mohe_Apne_Hi_Rang_Mein_Cover_3000x3000.png';
    if (/kuchh? to hawa|parveen shakir/.test(t)) return 'Kuch_To_Hawa_Bhi_Sard_Thi_ParveenShakir_Cover_TheSukoonLab.jpg';
    if (/hazaaron|ghalib|dil-e-nadaan|qismat/.test(t)) return 'the-sukoon-lab-hazaaron-khwahishen-aisi-cover.jpg';
    if (/har ek baat|baat karni/.test(t)) return 'harek-baat-pe-kehte-ho-tu-kya-hai-mirza-ghalib-the-sukoon-lab.jpg';
    if (/bekhud/.test(t)) return 'The_Sukoon_Lab_Bekhud_Kiye_Dete_Hain_Art.png';
    if (/husn ko/.test(t)) return 'The_Sukoon_Lab_Husn_Ko_Be_Hijab_Master.png';
    if (/dil-e-nadaan/.test(t)) return 'the-sukoon-lab-dil-e-nadaan-Ghalib.jpg';
    if (/yeh na thi/.test(t)) return 'the-sukoon-lab-yeh-na-thi-hamari-qismat-Ghalib.jpg';
    if (/chupke chupke/.test(t)) return 'Chupke_Chupke_Raat_Din_Ghulam_Ali_Hasrat_Mohani_1980s_Bollywood_Master_The_Sukoon_Lab_48k_24bit.png';
    if (/hum ko yaan|dar dar/.test(t)) return 'Hum_Ko_Yaan_Dar_Dar_Firaya_Yaar_Ne_Ecstatic_Sufi_Trance_92BPM_The_Sukoon_Lab_Master_48k_24bit.png';
    if (/majboor/.test(t)) return 'The_Sukoon_Lab_Baat_Karni_Mujhe_Mushkil_Alt_Pop_Art.png';
    return 'The sukoon lab spotify banner.png';
  };
  const filtered = () => {
    const q = query.trim().toLowerCase();
    let rows = SUKOON_RELEASES.filter(r => (activeFilter === 'all' || genre(r) === activeFilter) && (!q || [r.title,r.poet,r.date].join(' ').toLowerCase().includes(q)));
    if (sort.value === 'oldest') rows.sort((a,b) => (a.date||'').localeCompare(b.date||''));
    else if (sort.value === 'title') rows.sort((a,b) => a.title.localeCompare(b.title));
    else rows.sort((a,b) => (b.date||'').localeCompare(a.date||''));
    return rows;
  };
  const render = () => {
    const rows = filtered(), shown = rows.slice(0, visible);
    count.textContent = SUKOON_RELEASES.length;
    status.textContent = rows.length ? 'Showing ' + shown.length + ' of ' + rows.length + ' matching releases.' : 'No releases match that search. Try another title or poet.';
    more.hidden = shown.length >= rows.length;
    grid.innerHTML = shown.map((r,i) => {
      const links = [
        r.spotify ? '<a href="' + esc(r.spotify) + '" target="_blank" rel="noopener">Spotify ↗</a>' : '',
        r.apple ? '<a href="' + esc(r.apple) + '" target="_blank" rel="noopener">Apple Music ↗</a>' : '',
        r.youtubeMusic ? '<a href="' + esc(r.youtubeMusic) + '" target="_blank" rel="noopener">YouTube Music ↗</a>' : '',
        r.youtube ? '<a href="' + esc(r.youtube) + '" target="_blank" rel="noopener">YouTube ↗</a>' : ''
      ].filter(Boolean).join('');
      const displayTitle = r.title.replace(/\s*\|\s*The Sukoon Lab\s*$/i,'').replace(/\s*\/\s*The Sukoon Lab\s*$/i,'');
      return '<article class="release-card"><div class="release-art"><img loading="lazy" src="' + esc(cover(r)) + '" alt=""' + (i>5?' decoding="async"':'') + '><a class="release-play" href="' + esc(r.youtube || '#music') + '" target="_blank" rel="noopener" aria-label="Open ' + esc(displayTitle) + '">▶</a></div><div class="release-body"><h3>' + esc(displayTitle) + '</h3><div class="release-poet">' + esc(r.poet || 'Poetry credit not listed') + '</div><p class="release-desc">' + esc(r.duration ? 'A ' + r.duration + ' interpretation from The Sukoon Lab.' : 'A contemporary interpretation from The Sukoon Lab.') + '</p><div class="release-links">' + links + '</div></div></article>';
    }).join('');
  };
  filters.forEach(btn => btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; visible = pageSize; filters.forEach(b => { const on=b===btn; b.classList.toggle('active',on); b.setAttribute('aria-pressed',String(on)); }); render(); }));
  search.addEventListener('input', () => { query = search.value; visible = pageSize; render(); });
  sort.addEventListener('change', () => { visible = pageSize; render(); });
  more.addEventListener('click', () => { visible += pageSize; render(); });
  document.querySelectorAll('.poet-card').forEach(btn => btn.addEventListener('click', () => { activeFilter='all'; query=btn.dataset.poet; search.value=query; visible=pageSize; filters.forEach(b=>{const on=b.dataset.filter==='all';b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));}); document.getElementById('music').scrollIntoView({behavior:'smooth'}); render(); }));
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.site-nav');
  menu.addEventListener('click', () => { const open=nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.textContent=open?'×':'☰'; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();search.focus();}});
  render();
})();