export function generationLoading(container) {
  if (!document.querySelector('.loadingio-spinner-ellipsis-qp9voijkco')) {
    console.log(container);
    const imageContainer = document.createElement('DIV');
    const animation = document.createElement('DIV');

    imageContainer.classList.add('loadingio-spinner-ellipsis-qp9voijkco');
    animation.classList.add('ldio-spp6rr29era');

    container.appendChild(imageContainer);
    imageContainer.append(animation);
    for (let i = 5; i !== 0; i -= 1) {
      animation.append(document.createElement('DIV'));
    }
  }
}

export function removeLoading() {
  if (document.querySelector('.loadingio-spinner-ellipsis-qp9voijkco')) {
    document.querySelector('.loadingio-spinner-ellipsis-qp9voijkco').remove();
  }
}
