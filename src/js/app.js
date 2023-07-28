import background from '../img/cell.jpg';
import Popup from './Popup';
import { generationLoading, removeLoading } from './preLoader';

document.querySelector('body').style.backgroundImage = `url(${background})`;

const popup = new Popup();

const containerPopup = document.querySelector('.app_container');
const containerLoading = document.querySelector('.list_editor_container');
const btnAdd = document.querySelector('.btn_add');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://helpdesk-backend-rxb4.onrender.com/allTickets');
xhr.withCredentials = false;
xhr.send();
generationLoading(containerLoading);

xhr.addEventListener('load', () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      const data = JSON.parse(xhr.responseText);

      if (data !== null) {
        for (const key in data) {
          if (!Object.prototype.hasOwnProperty.call(data, 'key')) {
            popup.renderingNote(data[key]);
          }
        }
      }
      removeLoading();
    } catch (e) {
      console.error(e);
    }
  }
});

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  popup.openPopup(containerPopup);
});
