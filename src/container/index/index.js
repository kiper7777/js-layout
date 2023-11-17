import {
  createContainerTab,
  createElement,
  createHeader,
  createMain,
} from '../../script/layout'
// ==
const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Комюніті')
page.append(title)

const containerTab = createContainerTab()
page.append(containerTab)

const containerMain = createMain()
page.append(containerMain)

// // ==================================

// import {
//   createElement,
//   createHeader,
// } from '../../script/layout'

// const page = document.querySelector('.page')

// const header = createHeader()

// page.append(header)

// const title = createElement('h1', 'title', 'Мій блог')

// page.append(title)

// // ===

// const POST_LIST = [
//   {
//     category: [
//       { text: 'Важливо', id: 1 },
//       { text: 'Нова', id: 2 },
//     ],
//     info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//     date: '25.01',
//     viewed: false,
//   },
//   {
//     category: [{ text: 'Нова', id: 2 }],
//     info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій',
//     date: '24.01',
//     viewed: true,
//   },
// ]

// const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewed
//         ? 'post button post--viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     // ===

//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })

//     // ===

//     const dateSpan = createElement(
//       'span',
//       'post__date',
//       postData.date,
//     )
//     postHeader.append(categoryList, dateSpan)

//     // ===

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     // ===

//     postList.append(post)
//   })

//   return postList
// }

// // ===

// const post = createPost()
// page.append(post)

// ===================================

// function openTab(evt, tabName) {
//   // Declare all variables
//   var i, tabcontent, tablinks

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName('tabcontent')
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none'
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName('tablinks')
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(
//       'active',
//       '',
//     )
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(tabName).style.display = 'block'
//   evt.currentTarget.className += 'active'
// }
