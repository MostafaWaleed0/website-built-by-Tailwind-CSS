import './css/output.css';
import './js/main.js';

this.importAll(require.context('./img/', true, /\.(jpe?g|png|gif|svg)$/));
