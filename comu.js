// Dades compartides de la micro:bitada 2027
const AULES = {
  ametller: { nom: 'Aula de l’Ametller', curt: 'Ametller', color: 'GROC', hex: '#f5c94a', img: 'escut-ametller.jpg' },
  vinya: { nom: 'Aula de la Vinya', curt: 'Vinya', color: 'TARONJA', hex: '#ff8c3a', img: 'escut-vinya.jpg' },
  olivera: { nom: 'Aula de l’Olivera', curt: 'Olivera', color: 'VERD', hex: '#a6d160', img: 'escut-olivera.jpg',
    codi: '1111',
    mestre: { nom: 'MESTRA DE L’OLIVERA', img: 'mestra-olivera.jpg', alt: 'La Mestra de l’Olivera, amb abric verd brodat amb branques d’olivera i un bastó de fusta d’olivera',
      text: 'Benvinguts a l’Aula de l’Olivera! Abans de començar, digueu-me quants sou i quin nom de mag fareu servir.' } },
  garrofer: { nom: 'Aula del Garrofer', curt: 'Garrofer', color: 'TERRA', hex: '#c99366', img: 'escut-garrofer.jpg' },
  figuera: { nom: 'Aula de la Figuera', curt: 'Figuera', color: 'LILA', hex: '#b98cff', img: 'escut-figuera.jpg' }
};
const ORDRE = ['ametller', 'vinya', 'olivera', 'garrofer', 'figuera'];

function aulaActual() {
  const p = new URLSearchParams(location.search).get('aula');
  let id = p && AULES[p] ? p : null;
  if (!id) { try { id = sessionStorage.getItem('mb-aula'); } catch (e) {} }
  return AULES[id] ? id : 'olivera';
}
function desaAula(id) { try { sessionStorage.setItem('mb-aula', id); } catch (e) {} }
function desaGrup(noms) { try { sessionStorage.setItem('mb-grup', JSON.stringify(noms)); } catch (e) {} }
function llegeixGrup() { try { return JSON.parse(sessionStorage.getItem('mb-grup') || '[]'); } catch (e) { return []; } }
function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function llista(noms) { return noms.length <= 1 ? noms.join('') : noms.slice(0, -1).join(', ') + ' i ' + noms[noms.length - 1]; }
