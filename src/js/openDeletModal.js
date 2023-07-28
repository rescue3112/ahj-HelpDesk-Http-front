import { generationLoading, removeLoading } from './preLoader';

export default function openDeletModal(ticket) {
  const modal = document.createElement('DIV');
  const containerModal = document.createElement('DIV');
  const modalHeader = document.createElement('H1');
  const modalParagraph = document.createElement('P');

  const containerBtn = document.createElement('DIV');
  const btnCancel = document.createElement('BUTTON');
  const btnAgree = document.createElement('BUTTON');

  modal.classList.add('popup_container');
  modalParagraph.classList.add('Input_text');
  modalHeader.textContent = 'Удалить тикет';
  modalParagraph.textContent = 'Вы уверены, что хотите удалить тикет? Это действие необратимо.';

  containerBtn.classList.add('popup-btn');
  btnCancel.classList.add('btn');
  btnCancel.classList.add('btn_cancel');
  btnCancel.textContent = 'Отмена';

  btnAgree.classList.add('btn');
  btnAgree.textContent = 'Ok';

  document.body.appendChild(modal);
  modal.prepend(containerModal);

  containerBtn.prepend(btnAgree);
  containerBtn.prepend(btnCancel);
  containerModal.prepend(containerBtn);

  containerModal.prepend(modalParagraph);
  containerModal.prepend(modalHeader);

  btnCancel.addEventListener('click', () => document.querySelector('.popup_container').remove());

  btnAgree.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    const deletedTicketId = ticket.getAttribute('id');

    xhr.open('DELETE', `https://helpdesk-backend-rxb4.onrender.com/deleteTicket/?id=${deletedTicketId}`);

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send();

    generationLoading(ticket.querySelector('.name'));

    xhr.addEventListener('load', () => {
      JSON.parse(xhr.responseText);
      removeLoading();
    });

    ticket.remove();
    document.querySelector('.popup_container').remove();
  });
}
