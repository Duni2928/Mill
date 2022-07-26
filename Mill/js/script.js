if (document.querySelector(".select-custom")) {
  const selectCustom = document.querySelector('.select-custom');
  const selectCustomSelected = document.querySelector('.select-custom__selected');
  const selectCustomOptions = document.querySelector('.select-custom__options');
  const selectCustomOptionsList = Array.from(selectCustomOptions.children);
  const selectCustomOption = selectCustomOptions.querySelectorAll('.select-custom__option');
  let optionCheckedIndex = 0;
  let optionHoveredIndex = optionCheckedIndex;
  selectCustomSelected.addEventListener("click", () => {
    if (!selectCustomOptions.classList.contains("active")) {
      openSelectCustom()
    } else {
      closeSelectCustom()
    }
  })
  function openSelectCustom() {
    selectCustomOptions.classList.add("active");
    document.addEventListener("click", clickOutside);
  }
  function closeSelectCustom() {
    selectCustomOptions.classList.remove("active");
    document.removeEventListener("click", clickOutside);
  }
  function selectHovered(newHoverIndex) {
    selectCustomOptionsList[optionHoveredIndex].classList.remove("hover");
    selectCustomOptionsList[newHoverIndex].classList.add("hover");
    optionHoveredIndex = newHoverIndex;
  }
  function selectChecked(newCheckIndex) {
    let value = selectCustomSelected.innerHTML;
    selectCustomOptionsList[optionCheckedIndex].classList.remove("active");
    selectCustomOptionsList[newCheckIndex].classList.add("active");
    selectCustomSelected.innerHTML = selectCustomOptionsList[newCheckIndex].innerHTML;
    selectCustomOptionsList[newCheckIndex].innerHTML = value;
    optionCheckedIndex = newCheckIndex;
  }
  function clickOutside() {
    document.addEventListener("click", () => {
      if (!selectCustom.contains(event.target)) {
        selectCustomOptions.classList.remove("active");
      }
    });
  }
  selectCustomOption.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      selectChecked(index);
      closeSelectCustom();
    });
  });
}
if (document.querySelector(".slider-intro")) {
  const mainslider = new Swiper(".slider-intro", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800
  });
}
function drop (header, body) {
  header.forEach((item, index) => {
    item.addEventListener("click", () => {
      header[index].classList.toggle("active")
      if (!body[index].classList.contains("active")) {
        body[index].classList.add('active');
        body[index].style.height = 'auto';
        let height = body[index].clientHeight + 12 + 'px';
        body[index].style.height = '0px';
        setTimeout(function () {
          body[index].style.height = height;
        }, 0);
      } else {
        body[index].style.height = '0px';
        body[index].addEventListener('transitionend',
          function () {
            body[index].classList.remove('active');
          },
          {
            once: true
          });
      }
    })
  })
}
if (document.querySelector(".nav-footer")) {
  const navFooterHeader = document.querySelectorAll(".nav-footer__title");
  const navFooterBody = document.querySelectorAll(".nav-footer__list");
  drop(navFooterHeader, navFooterBody)
}
  const body = document.body;
  const menuList = document.querySelector(".menu__list");
  const menuIcon = document.querySelector(".icon-menu");
  const menuBody = document.querySelector(".menu");
  const search = document.querySelector(".search-btn");
  const menu = document.querySelector(".menu");
  menuIcon.addEventListener("click", (e)=> {
    body.classList.toggle("no-scroll");
    menuIcon.classList.toggle("active");
    menuBody.classList.toggle("active");
    search.classList.toggle("visible");
    menu.classList.toggle("clickable")
  })

  if(document.querySelector(".bottom-header__social")) {
    const bottomHeader = document.querySelector('.bottom-header');
    const socialTop = document.querySelector('.top-header__social');
    const socialClone = document.querySelector('.bottom-header__social');
    socialClone.innerHTML = socialTop.innerHTML;
  }
  const itemMenu = document.querySelectorAll(".menu__link--subnavs");
  const listMenu = document.querySelectorAll(".subnav-menu");
  if (document.querySelectorAll(".clickable")) {
    itemMenu.forEach(i=> {
      i.addEventListener("click", ()=> {
        i.classList.toggle("active")
      })
    })
  } 
  
