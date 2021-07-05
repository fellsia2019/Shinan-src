function modal_bind(name, init, close) {

  const modal_name = document.querySelectorAll(name),
  modal_init = document.querySelectorAll(init),
  modal_close = document.querySelectorAll(close);

  if(modal_name != null) {
      const modal_toggle = {
          open (e) {
            modal_name.forEach(el => el.classList.add("modal--active"))
            body.classList.add("overflow-hide");
          },
          close (e) {
            modal_name.forEach(el => el.classList.remove("modal--active"))
            body.classList.remove("overflow-hide");
          }
        };

    modal_init.forEach(item => {
      item.addEventListener("click", modal_toggle.open)
    });
    modal_close.forEach(item => {
      item.addEventListener("click", modal_toggle.close)
    });
  }

};

modal_bind('[data-js="modal-callback"]', '[data-js="modal-callback-init"]', '[data-js="modal-callback-close"]');
modal_bind('[data-js="modal-buying"]', '[data-js="modal-buying-init"]', '[data-js="modal-buying-close"]');
