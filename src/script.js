import Swiper from 'swiper';
import 'swiper/css';

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');






menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider",{
  loop:true,
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },

});




var swiper = new Swiper(".reviews-slider", {
        loop: true,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.packages .box-container')];
    for (var i = currentItem; i<currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}

const destination= [
    {
        id: 0,
        image:'imagess/agra.travel.DestinationAnywhere.jpg',
        title:'Agra'
    },
    {
        id: 1,
        image:'imagess/amritsar.travel.DestinationAnywhere.jpg',
        title:'Amritsar'
    },
    {
        id: 2,
        image:'imagess/andamanandnicobarislands.travel.DestinationAnywhere.jpg',
        title:'Andaman And Nicobar Islands'
    },
    {
        id: 3,
        image:'imagess/bangalore.travel.DestinationAnywhere.jpg',
        title:'Bangalore'
    },
    {
        id: 4,
        image:'imagess/chennai.travel.DestinationAnywhere.jpg',
        title:'Chennai'
    },
    {
        id: 5,
        image:'imagess/coorg.travel.DestinationAnywhere.jpg',
        title:'Coorg'
    },
    {
        id: 6,
        image:'imagess/delhi.travel.DestinationAnywhere.jpg',
        title:'Delhi'
    },
    {
        id: 7,
        image:'imagess/goa.travel.DestinationAnywhere.jpg',
        title:'Goa'
    },
    {
        id: 8,
        image:'imagess/gujarat.travel.DestinationAnywhere.jpg',
        title:'Gujarat'
    },
    {
        id: 9,
        image:'imagess/himalaya.travel.DestinationAnywhere.jpg',
        title:'The Himalayas'
    },
    {
        id: 10,
        image:'imagess/hyderabad.travel.DestinatinAnywhere.jpg',
        title:'Hyderabad'
    },
    {
        id: 11,
        image:'imagess/jaipur.travel.DestinationAnywhere.jpg',
        title:'Jaipur'
    },
    {
        id: 12,
        image:'imagess/kerela.travel.DestinationAnywhere.jpg',
        title:'Kerela'
    },
    {
        id: 13,
        image:'imagess/kolkata.travel.DestinationAnywhere.jpg',
        title:'Kolkata'
    },
    {
        id: 14,
        image:'imagess/ladakh.travel.DestinationAnywhere.jpg',
        title:'Ladakh'
    },
    {
        id: 15,
        image:'imagess/manali.travel.DestinAnywhere.jpg',
        title:'Manali'
    },
    {
        id: 16,
        image:'imagess/mumbai.travel.DestinationAnywhere.jpg',
        title:'Mumbai'
    },
    {
        id: 17,
        image:'imagess/rishikesh.travel.DestinationAnywhere.jpg',
        title:'Rishikesh'
    },
    {
        id: 18,
        image:'imagess/udaipur.travel.DestinationAnywhere.jpg',
        title:'Udaipur'
    },
    {
        id: 19,
        image:'imagess/rajasthan.webp',
        title:'Rajasthan'
    },
    {
        id: 20,
        image:'imagess/varanasi.jpg',
        title:'Varanasi'
    },
    {
        id: 21,
        image:'imagess/ahemdabad.jpg',
        title:'Ahemdabad'
    },
    {
        id: 22,
        image:'imagess/darjeeling.jpg',
        title:'Darjeeling'
    },
    {
        id: 23,
        image:'imagess/shimla.jpg',
        title:'Shimla'
    },
    {
        id: 24,
        image:'imagess/mysore.avif',
        title:'Mysore'
    },
    {
        id: 25,
        image:'imagess/gangtok.jpg',
        title:'Gangtok'
    },
    {
        id: 26,
        image:'imagess/srinagar.jpg',
        title:'Srinagar'
    },
    {
        id: 27,
        image:'imagess/lakshadweep.jpg',
        title:'Lakshadweep'
    },
    {
        id: 28,
        image:'imagess/kodaikanal.webp',
        title:'Kodaikanal'
    },
    {
        id: 29,
        image:'imagess/nainital.jpg',
        title:'Nainital'
    },
    {
        id: 30,
        image:'imagess/mussoorie.jpg',
        title:'Musoorie'
    }

]

const categories = [...new Set(destination.map((item) => {return item}))]

document.getElementById('searchBar').addEventListener('keyup' , (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('roott').innerHTMl=items.map((item)=>{
        var {image, title} = item;
        return(
            `<div class='box'>
            <div class='img-box>
            <img class'images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <button>Book Now</button>
            </div>`
        )
    }).join('')
}
displayItem(categories);

/*
const optionEls = document.querySelectorAll(".h3");
const searchEl = document.querySelector(".searchInput");

const searchInput = () =>
optionEls.forEach(
    (e) =>
    {
        e.style.display = e.innerHTML.toUpperCase().indexOf(searchEl.ariaValueMax.toUpperCase()) >
        -1
        ? ""
        : "none")
        );
    }
)


function filterDestinations() {
    var input, filter, packages, h3, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    packages = document.getElementsByClassName("box");
  
    for (i = 0; i < packages.length; i++) {
        h3 = packages[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            packages[i].style.display = "";
        } else {
            packages[i].style.display = "none";
        }
    }
}




document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var boxes = document.querySelectorAll('.content');

    boxes.forEach(function(box) {
        var text = box.querySelector('h3').innerText.toLowerCase();
        if (text.includes(input)) {
            box.parentElement.style.display = 'block';
        } else {
            box.parentElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const boxes = document.querySelectorAll('.packages .box');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        boxes.forEach(function (box) {
            const packageName = box.querySelector('h3').textContent.toLowerCase();
            if (packageName.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
*/
