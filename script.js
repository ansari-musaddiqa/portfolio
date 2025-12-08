// ========= CACHE SELECTORS =========
const hamburger = document.querySelector('.hamburger-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const bodyelm = document.querySelector('body');
const homeLink = document.querySelector(".home-link");
const navs = document.querySelectorAll(".nav-list li");

// ========= EVENTS =========
hamburger.addEventListener("click", () => {
  navWrapper.classList.toggle("change");
  bodyelm.classList.toggle("change");
});

homeLink.addEventListener("click", () => {
  navWrapper.classList.toggle("change");
  bodyelm.classList.toggle("change");
});
//================click on bton dcroll to that ssss3ct
navs.forEach((link)=>{
link.addEventListener("click", (e) => {
  bodyelm.classList.remove("change");
  navWrapper.classList.remove("change");
  e.target.querySelector(".nav-link")?.click();
  
});
});

//============================================================================= 
//count number update

const counters = document.querySelectorAll('.counter');
const aboutSection = document.querySelector('#about');
let counterStarted = false;   // ← Prevents repeated animation
const speed = 200;

const animateCounters = () => {
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target + '+';
    }
  };
  updateCount();
});
};

let ticking = false;

window.addEventListener('scroll', () => {
if (!ticking) {
  window.requestAnimationFrame(() => {
    const sectionTop = aboutSection.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (!counterStarted && scrollPos > sectionTop) {
      animateCounters();
      counterStarted = true; // prevent running again
    }

    ticking = false;
  });
  ticking = true;
}
});

//=============================================================================
//inject skills slider content
const skillsData = [
{
  title: "Languages & Markup",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="25" cy="25" r="20"/>
      <line x1="5" y1="25" x2="45" y2="25"/>
      <path d="M25 5a28 28 0 0 1 6 20 28 28 0 0 1-6 20 28 28 0 0 1-6-20 28 28 0 0 1 6-20z"/>
    </svg>
  `,
  items: ["HTML5", "CSS3", "JavaScript(ES6+)", "TypeScript", "Liquid"]
},
{
  title: "Frameworks & Libraries",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 4 4 16 4 34 16 46" />
      <polyline points="34 4 46 16 46 34 34 46" />
    </svg>
  `,
  items: ["jQuery", "Bootstrap", "Tailwind CSS", "React.js", "Next.js"]
},
{
  title: "eCommerce Tools",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="19" cy="44" r="2"/>
      <circle cx="41" cy="44" r="2"/>
      <path d="M4 4h6l6 30h26l4-16H14"/>
    </svg>
  `,
  items: ["Shopify", "Shopify Plus", "Shopify CLI", "Shopify App Integrations"]
},
{
  title: "Design & Prototyping",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  `,
  items: ["Figma", "Adobe XD", "Photoshop", "Canva"]
},
{
  title: "Development Tools",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" stroke="currentColor" 
    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" role="img">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  `,
  items: ["Git & GitHub", "VS Code", "Postman", "Chrome DevTools"]
},
{
  title: "Web Essentials",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img">
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  `,
  items: ["Responsive Design", "Page Speed Optimization", "Cross-Browser Testing", "Basic SEO"]
}
];

const skillsList = document.getElementById("slider-list");

skillsData.forEach((skill,i) => {
const li = document.createElement("li");
li.className = "language-item slider-item";
li.setAttribute("data-index",`${i}`);

li.innerHTML = `
  <a class="language-link">
    <div class="language-inner">
      
      <ul class="back">
        ${skill.items.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <div class="front">
        <h3>${skill.title}</h3>
        ${skill.icon}
      </div>

    </div>
  </a>
`;

skillsList.appendChild(li);
});

//=========================================================================
//injecting project slider contetnt
const projects=[
{
  "name": "apple-website",
  "tech": "HTML/CSS/JS",
  "image": "images/apple.png",
  "video": "vid/apple.mp4"
},
{
  "name": "architect-website",
  "tech": "HTML/CSS/JS",
  "image": "images/architech.png",
  "video": "vid/architech.mp4"
},
{
  "name": "business-agency",
  "tech": "ReactJS",
  "image": "images/business-agency.png",
  "video": "vid/agency.mp4"
},
{
  "name": "Classic Car",
  "tech": "HTML/CSS/JS",
  "image": "images/classic-car.png",
  "video": "vid/classic.mp4"
},
{
  "name": "Creative Design",
  "tech": "HTML/CSS/JS",
  "image": "images/ctrative.png",
  "video": "vid/creative.mp4"
},
{
  "name": "Food",
  "tech": "HTML/CSS/JS",
  "image": "images/food.png",
  "video": "vid/food.mp4"
},
{
  "name": "Portfolio Website",
  "tech": "ReactJS",
  "image": "images/portfolio.png",
  "video": "vid/portfolio.mp4"
},
{
  "name": "Wine House",
  "tech": "HTML/CSS/JS",
  "image": "images/wine.png",
  "video": "vid/wine.mp4"
},
{
  "name": "Group8A Company",
  "tech": "HTML/CSS/JS/liquid",
  "image": "images/g8a.png",
  "video": "vid/g8a.mp4"
},
{
  "name": "Life is War Website",
  "tech": "HTML/CSS/JS/liquid",
  "image": "images/lifeiswar.png",
  "video": "vid/lifeiswar.mp4"
},
{
  "name": "3D Form",
  "tech": "HTML/CSS/JS",
  "image": "images/3dform.png",
  "video": "vid/3dform.mp4"
},
{
  "name": "Cube",
  "tech": "HTML/CSS/JS",
  "image": "images/cube.png",
  "video": "vid/cube.mp4"
},
{
  "name": "Go Anywhere",
  "tech": "HTML/CSS/JS",
  "image": "images/goanywhere.png",
  "video": "vid/goanywhere.mp4"
},
{
  "name": "Grid Menu",
  "tech": "HTML/CSS/JS",
  "image": "images/grid.png",
  "video": "vid/grid.mp4"
},
{
  "name": "Hamburger Menu",
  "tech": "HTML/CSS/JS",
  "image": "images/hamburger.png",
  "video": "vid/hamburger.mp4"
},
{
  "name": "Nike Product Card",
  "tech": "HTML/CSS/JS",
  "image": "images/nike.png",
  "video": "vid/nike.mp4"
},
{
  "name": "Sidebar Hamburger",
  "tech": "HTML/CSS/JS",
  "image": "images/sidebarhamburger.png",
  "video": "vid/sidebar-hambuger.mp4"
},
{
  "name": "Signup Form",
  "tech": "HTML/CSS/JS",
  "image": "images/Signup.png",
  "video": "vid/signup.mp4"
},
{
  "name": "Slideshow",
  "tech": "HTML/CSS/JS",
  "image": "images/slideshow.png",
  "video": "vid/slideshow.mp4"
},
{
  "name": "Social Media Icom",
  "tech": "HTML/CSS/JS",
  "image": "images/social.png",
  "video": "vid/socialslide.mp4"
}
];

const slider = document.querySelector(".slider");

// split projects into groups of 4
function chunkArray(arr, size) {
const chunks = [];
for (let i = 0; i < arr.length; i += size) {
  chunks.push(arr.slice(i, i + size));
}
return chunks;
}

const slides = chunkArray(projects, 2);

// generate HTML
slider.innerHTML = slides
.map(
  (group,i) => `
    <div class="slide slider-item" data-index="${i}">
      ${group
        .map(
          (p) => `
          <div class="project" data-video="${p.video}">
            <div class="project-text">
              <h2 class="project-name">${p.name}</h2>
              <h4 class="project-technologies">${p.tech}</h4>
            </div>
            <img loading="lazy" src="${p.image}" class="project-img"/>
            <a href="#" class="project-link" >See Video</a>
          </div>
        `
        )
        .join("")}
    </div>
  `
)
.join("");


//=============================================================================
//project pop up
const vidWrapper = document.querySelector('.vidWrapper');
const video = vidWrapper.querySelector("video");
const cross = vidWrapper.querySelector(".cross");
const vidSource = video.querySelector('source');
const project = document.querySelectorAll(".project");
vidWrapper.setAttribute("aria-hidden", "false");

slider.addEventListener("click",(e)=>{    
      const link = e.target.closest(".project");
      if (!link) return;
        e.preventDefault();      // STOP DEFAULT LINK CLICK
        e.stopPropagation(); 
      const videoSrc = link.dataset.video;
      openProjectVideo(videoSrc);        
    });


cross.addEventListener("click",(e)=>{
  e.stopPropagation();
  closeProjectVideo();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bodyelm.classList.contains('popup')) {
    closeProjectVideo();
  }
});


function openProjectVideo( videoSrc) {
if (!video) return;
      
vidSource.src = videoSrc;
vidWrapper.setAttribute("aria-hidden", "true");
video.load();         // ▶️ play it
video.currentTime = 0; // ⏮️ start from beginning
video.play().catch(()=>{}); 
bodyelm.classList.add('popup');
}

function closeProjectVideo() {
video.pause();
vidSource.src = '';
video.load();
bodyelm.classList.remove('popup');
vidWrapper.setAttribute("aria-hidden", "false");
}

//========================================================================
// A class for building sliders from it
class Slider {
    constructor(id, mediaQueries) {
      // Get HTML elements
      this.autoSlideDelay = 2000;
      this.slider = document.querySelector(`#${id}`);
      this.sliderWrapper = this.slider.querySelector('.slider-wrapper');
      this.sliderList = this.slider.querySelector('.slider-list');
      this.sliderItems = this.slider.querySelectorAll('.slider-item');
      this.sliderNext = this.slider.querySelector('.arrow.right');
      this.sliderPrev = this.slider.querySelector('.arrow.left');
      this.paginationContainer = this.slider.querySelector('.pagination');




      // breakpoints example: [576, 768, 992]
      this.mediaQueries =  mediaQueries;
      this.mediaQueryList = [];

      // only one interval in entire lifetime
      this.interval = null;
      this.listenersAttached = false;

      // Define global variables
      this.numberOfVisibleItems = Number(this.slider.dataset.showperslide) || 1;
      this.currentItemIndex = 0;
      this.sliderItemsLength = this.sliderItems.length;
      this.dots = [];


      // swipe drag key
      this.isDragging = false;
      this.startX = 0;
      this.currentTranslate = 0;
      this.prevTranslate = 0;
      this.currentPage = 0;
      this.isHovering = false;

      this.setupBreakpoints();
      
      this.calculateWidths();
      this.run();

      window.addEventListener('resize', this.debounce(() => {
        this.calculateWidths();
        this.constrainIndex();
          this.buildPagination();
        this.shiftSlides(false); // instant reposition without animation
      }, 140));
    }

  debounce(fn, wait=120){
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), wait); };
  }

  calculateWidths(){
    const padding = 0*2;
      this.updateActiveBreakpoint();
      this.noOfPageCreated = Math.ceil(this.sliderItemsLength/this.numberOfVisibleItems);
      this.containerWidth = 100*this.noOfPageCreated;
      this.sliderList.style.width = `${this.containerWidth}%`;
      this.sliderListInpixel = this.sliderWrapper.clientWidth*this.noOfPageCreated;
      this.visibleWidth = (this.sliderListInpixel/this.noOfPageCreated) - padding ; // 1100px this.sliderList.Width
      this.itemWidth =this.visibleWidth/this.numberOfVisibleItems;
      
      this.sliderItems.forEach(item => {
        item.style.flex = `0 0 ${this.itemWidth}px`;
        item.style.width = `${this.itemWidth}px`;
      });
  }


  constrainIndex() {
    const maxIndex = Math.max(0, this.sliderItemsLength - this.numberOfVisibleItems);
    if (this.currentItemIndex > maxIndex) this.currentItemIndex = maxIndex;
    if (this.currentItemIndex < 0) this.currentItemIndex = 0;
  }

    setupBreakpoints()
    {
        this.mediaQueries.forEach((mediaQuery) => {
          this.mediaQueryList.push(window.matchMedia(`screen and (max-width:${mediaQuery}px)`));
        });
    }
    updateActiveBreakpoint() {
        let activeIndex = 0;
        // Check each media query in reverse order (desktop -> mobile)
        for (let i = this.mediaQueryList.length - 1; i >= 0; i--) {
          if (this.mediaQueryList[i].matches) {
                activeIndex = i;
                break;
            }
        }
        
        // Set number of visible items based on active breakpoint
        switch (activeIndex) {
            case 0:
                this.numberOfVisibleItems = Number(this.slider.dataset.showperslide) || 3; // mobile
                break;
            case 1:
                this.numberOfVisibleItems = Number(this.slider.dataset.showperslidetab) || 2; // tablet
                break;
            case 2:
            this.numberOfVisibleItems = Number(this.slider.dataset.showperslidemob) || 1; // tablet
            break;
            default:
                this.numberOfVisibleItems = Number(this.slider.dataset.showperslide) || 1; // desktop
                break;
        }
    }
    run() {
      this.buildPagination();
      this.attachArrowEvents();
      this.addDragSwipeEvents();
      this.addKeyboardEvents();
      this.initAutoSlide();   
    }
  // A function to shift slides left and right
  shiftSlides(animate = true) {
    this.constrainIndex();
    
    let pixel = this.currentItemIndex * this.itemWidth;
        if(this.currentItemIndex > this.sliderItemsLength - this.numberOfVisibleItems)
        {
            const lastItem = this.sliderItemsLength - this.numberOfVisibleItems;
            pixel = lastItem * this.itemWidth;
        }
    this.sliderList.style.transform = `translateX(-${pixel}px)`;
    this.updatePaginationState();
    this.updateActiveClassOnSlide();
  }

  buildPagination() {
      this.dots = [];
      this.paginationContainer.innerHTML = "";
      const maxIndex = Math.max(0, this.sliderItemsLength - this.numberOfVisibleItems);
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");

        if (i==this.currentItemIndex) dot.classList.add("active");

        dot.setAttribute("data-slide", i);
        

        // On click → go to that slide
        dot.addEventListener("click", (e) => {
          this.currentItemIndex = Number(e.target.dataset.slide);
          this.shiftSlides();
        });

        this.paginationContainer.appendChild(dot);
        this.dots.push(dot); 
      }
    }  

    updatePaginationState() {
        this.dots.forEach((dot, index)  => {
        dot.classList.toggle("active",index == this.currentItemIndex );
      });
    }

    updateActiveClassOnSlide(){
      this.sliderItems.forEach((item)=>{
        item.classList.remove("active");
      });
      let slideno = this.currentItemIndex;
      for(let i=1;i<=this.numberOfVisibleItems;i++)
      {
        this.sliderItems[slideno].classList.add("active");
        slideno++;
      }
    }

    attachArrowEvents() {
      // SVG icons
        const leftSVG = `
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M15 6L9 12L15 18"
            stroke="#032a40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        `;

        const rightSVG = `
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#032a40" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        this.sliderNext.innerHTML = rightSVG;
        this.sliderPrev.innerHTML = leftSVG;

    if (!this.listenersAttached && this.sliderNext && this.sliderPrev ) {
      this.sliderNext.addEventListener('click', () => this.nextPage());
      this.sliderPrev.addEventListener('click', () => this.prevPage());
      this.listenersAttached = true;
    }
  }


  nextPage() {
    const maxIndex = Math.max(0, this.sliderItemsLength - this.numberOfVisibleItems);
    this.currentItemIndex = (this.currentItemIndex < maxIndex) ? this.currentItemIndex + 1 : 0;
    this.shiftSlides();
  }

  prevPage() {
    const maxIndex = Math.max(0, this.sliderItemsLength - this.numberOfVisibleItems);
    this.currentItemIndex = (this.currentItemIndex > 0) ? this.currentItemIndex - 1 : maxIndex;
    this.shiftSlides();
  }

  initAutoSlide()
  {
    if (this.interval) return; // prevent duplicates

    this.autoSlideStart();

    // pause on hover (attach only once)
    if (!this.hoverAttached) {
      this.slider.addEventListener("mouseenter",()=>{
        this.isHovering = true;
        this.autoSlideStop();
      });
      this.slider.addEventListener("mouseleave", ()=>{
        this.isHovering = false;
        this.autoSlideStart();
      });
      this.hoverAttached = true;
    }
  }
  autoSlideStart = () => {
      if (this.isHovering || this.interval) return;  
        this.updatePaginationState();
        this.updateActiveClassOnSlide();
        this.interval = setInterval(() => this.nextPage(), this.autoSlideDelay);
    };

    autoSlideStop = () => {
      clearInterval(this.interval);
      this.interval = null;
    };

  /* ------------------ OPTIMIZED SWIPE + DRAG SUPPORT ------------------ */
      addDragSwipeEvents() {
      this.sliderList.addEventListener("touchstart", this.touchStart.bind(this),{passive:true});
      this.sliderList.addEventListener("touchmove", this.touchMove.bind(this), { passive: false });
      this.sliderList.addEventListener("touchend", this.touchEnd.bind(this));
      
  }

  touchStart(e) {
      this.autoSlideStop(); 
      this.isDragging = true;
      this.startX = (e.pageX || e.touches[0].clientX);
      this.prevTranslate = -this.currentItemIndex * this.itemWidth;
  }

  touchMove(e) {
      if (!this.isDragging) return;

      e.preventDefault(); // important for mobile

      const currentX = (e.pageX || e.touches[0].clientX);
      const diff = currentX - this.startX;

      this.currentTranslate = this.prevTranslate + diff;

      this.setSliderPosition();
  }

  touchEnd() {
      if (!this.isDragging) return;
      this.isDragging = false;

      const movedBy = this.currentTranslate - this.prevTranslate;

      if (movedBy < -50) this.nextPage();
      else if (movedBy > 50) this.prevPage();
      else this.shiftSlides(); // stay in same slide
      this.autoSlideStart();
  }

  setSliderPosition() {
    requestAnimationFrame(() => {
      this.sliderList.style.transform = `translateX(${this.currentTranslate}px)`;
    });
  }


  addKeyboardEvents() {
      window.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") this.nextPage();
          if (e.key === "ArrowLeft") this.prevPage();
      });
    }

}

/* 
Note about creating new slider:
First parameter is the id of the HTML slider-container element of each slider.
Second parameter is an array of the media queries (breaking points) where the number of slides increases.
*/

// Create a new slider and run it
document.addEventListener('DOMContentLoaded', () => {
new Slider('sample-slider', [1920,1024,600]);
new Slider('sec-project', [1920,1024,600]);
});
