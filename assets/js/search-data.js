// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "You can find an abridged resume here. Please go here for publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-hello-world",
      
        title: 'Hello World! <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Welcome to my blog. This is my first post. Excited to see where this goes! Meanwhile, take a look at About.",
      section: "Posts",
      handler: () => {
        
          window.open("https://aditvishnu.wordpress.com/2025/09/07/hello-world/", "_blank");
        
      },
    },{id: "news-joined-as-a-phd-student-at-the-ml-lab",
          title: 'Joined as a PhD student at the ML lab.',
          description: "",
          section: "News",},{id: "news-presented-a-lightning-talk-at-the-iisc-fujitsu-quantum-computing-workshop",
          title: 'Presented a lightning talk at the IISc–Fujitsu Quantum Computing Workshop.',
          description: "",
          section: "News",},{id: "news-invited-to-speak-at-the-international-workshop-on-quantum-boltzmann-machines-this-december",
          title: 'Invited to speak at the International Workshop on Quantum Boltzmann Machines this December....',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
