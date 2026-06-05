class PopUP extends HTMLElement {
  constructor() {
    super();
    this.body = document.querySelector("body");
    this.button = this.querySelectorAll(".button");
    this.popup_to_open = this.querySelector(".shopify-project-pop-overlay");
    this.shopify_ptoject_pop =  this.querySelector(".shopify-project-popup");
    this.project_video = this.querySelector(".project-video");
    this.project_cross = this.querySelector(".shopify-projects-cross");
    this.control = this.querySelector(".controls");
    this.play = this.querySelector(".play");
    this.pause = this.querySelector(".pause");
    this.constrol_button = this.querySelector(".buttons");
    this.fullscreen_btn = this.querySelector(".fullscreen-btn");

    this.fullscreen_btn.addEventListener("click", () => {
        if (this.project_video.requestFullscreen) {
            this.project_video.requestFullscreen();
        }
    });

    this.runAccordian();

    this.button.forEach((btn)=>{
      btn.addEventListener("click", (e) => {
        this.popup_to_open.classList.add("active");
        this.project_video.currentTime = 0;
        this.project_video.play();
        this.body.classList.add("popup");      
      });
    });

    this.constrol_button.addEventListener("click", this.playpause.bind(this));
    this.videoBar();
    this.closePopUP();
  }

  // ACCORDIAN
  runAccordian() {
    this.accordionCheckboxes = this.querySelectorAll(
      '.accordion-item input[type="checkbox"]',
    );

    this.accordionCheckboxes.forEach((checkbox) => {
      const accordionItem = checkbox.closest(".accordion-item");
      const content = accordionItem.querySelector(".accordion-content");
      const icon = accordionItem.querySelector(".accordion-icon");

      // Initial state
      if (checkbox.checked) {
        content.classList.add("active");
        icon.classList.add("active");
      }

      checkbox.addEventListener("change", () => {
        // Close all accordions first
        this.accordionCheckboxes.forEach((otherCheckbox) => {
          const otherItem = otherCheckbox.closest(".accordion-item");
          const otherContent = otherItem.querySelector(".accordion-content");
          const otherIcon = otherItem.querySelector(".accordion-icon");

          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
            otherContent.classList.remove("active");
            otherIcon.classList.remove("active");
          }
        });

        // Toggle clicked accordion
        if (checkbox.checked) {
          content.classList.add("active");
          icon.classList.add("active");
        } else {
          content.classList.remove("active");
          icon.classList.remove("active");
        }
      });
    });
  }

  // VIDEO PLAY PAUSE FOR SHOPIFY PROJECTS
  playpause(e) {
    this.pause.classList.toggle("hide");
    this.play.classList.toggle("hide");
    if (this.project_video.paused) {
      this.project_video.play();
      this.project_video.style.opacity = 0.7;
    } else {
      this.project_video.pause();
      this.project_video.style.opacity = 0.3;
    }
  }

  // VIDEO TIME BAR UPDATE
  videoBar(){
      this.bar =this.querySelector('.video-bar');

      this.project_video.addEventListener("timeupdate",()=>{
        const barwidth = this.project_video.currentTime / this.project_video.duration;
        this.bar.style.width = `${barwidth*100}%`;
        if(this.project_video.ended)
        {
            this.pause.classList.toggle("hide");
            this.play.classList.toggle("hide");
            this.project_video.style.opacity = .3;
        }
      });

      // CLICK ON BAR TO SEE VIDEO
      const video_bar_wrapper = this.querySelector(".video-bar-wrapper");
      const video_bar = this.querySelector(".video-bar");

      video_bar_wrapper.addEventListener("click", (e) => {

        // total width of wrapper
        const wrapperWidth = video_bar_wrapper.clientWidth;

        // clicked position
        const clickPosition = e.offsetX;

        // percentage clicked
        const percentage = clickPosition / wrapperWidth;

        // update video time
        this.project_video.currentTime = percentage * this.project_video.duration;

        // play video
        this.project_video.play();

        // update icons
        this.play.classList.add("hide");
        this.pause.classList.remove("hide");

      });

  }

   // CLOSING THIS POPUP
   closePopUP(){
      this.project_cross.addEventListener("click",(e)=>{
              if(e.target != this.project_cross)  return;
              this.project_video.pause();
              this.project_video.load();
               this.shopify_ptoject_pop.scrollTop = 0;
              this.popup_to_open.classList.remove('active');
              this.body.classList.remove("popup");
              this.popup_to_open.setAttribute("aria-hidden", "false");
      });
   }

}

customElements.define("shopify-projects-wrapper", PopUP);
