const data = [
  {
    name: 'sakthi',
    city: 'chennai',
    pincode: '600000',
    phone: '123456'
  },
  {
    name: 'Sawathi',
    city: 'chennai',
    pincode: '600000',
    phone: '4253452'
  },
  {
    name: 'ajith',
    city: 'chennai',
    pincode: '600000',
    phone: '456456'
  },
  {
    name: 'sakthiS',
    city: 'chennai',
    pincode: '6000002',
    phone: '879896'
  }
]


const findSakthi = data.findIndex(item => item.name === 'sakthi')

const newvalue = (findSakthi === -1) ? false : true

// console.log(newvalue)

// switch (findSakthi) {
//   case -1:
//     console.log(false)
//     break;
//   case 0:
//     console.log(0)
//     break;
//   case 1:
//     console.log(false)
//     break;
//   default:
//     console.log(true)
//     break;
// }

const path = document

// const checkurl = path.includes('about');

// console.log(path);

const homePageData = "<div class=\"contentPara\">\n        <div class=\"contentHeader\">Template Usage</div>\n        <div class=\"paragraph card\">\n          <p>You may use this template on any site, anywhere, for free just please leave the link back to me in the\n            footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)</p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien\n            bibendum\n            sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor\n            velit sed\n            tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed\n            id odio.\n            Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.\n          </p>\n        </div>\n      </div>\n      <div class=\"contentPara\">\n        <div class=\"contentHeader\">Another Title Goes Here!</div>\n        <div class=\"paragraph card\">\n          <p>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also\n            making a version\n            of this template with navigation, check out BryantSmith.com to get it.</p>\n        </div>\n      </div>\n      <div class=\"contentPara\">\n        <div class=\"contentHeader\">Yet Another?</div>\n        <div class=\"paragraph card\">\n          <p>Each title is an H1 tag, so choose them carefully :)</p>\n        </div>\n      </div>"



function clickHandle(value) {
  const loader = document.getElementById('loader')
  const select = document.getElementById(value)
  select.classList.add('select')
  // loader.classList.add('preload')
  const content = document.getElementById('contentSection')
  
  // loader.classList.remove('preload')
  if (value === 'home') {
    const removeClass = document.getElementById('about')
    removeClass.classList.remove('select')
    content.innerHTML = homePageData
  } else if (value === 'about') {
    const removeClass = document.getElementById('home')
    removeClass.classList.remove('select')
    content.innerHTML = 'this is about us page'
  }
  

}

for (let c = 0; c < data.length; c++) {
  console.log(data[c].name)
}

console.log(data[2]);

// function HomeHandle() {
//   const select = document.getElementById('home')
//   const selectAbout = document.getElementById('about')
//   const content = document.getElementById('contentSection')
//   select.classList.add('select')
//   selectAbout.classList.remove('select')

  
// }