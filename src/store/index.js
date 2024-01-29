import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      uz: {
        "mainPage": "Bosh sahifa",
        "book": "Kitoblar",
        "searchTitle": "Qidirish",
        "searchInputPlaceholder": "Adiblar, kitoblar, audiolar, maqolalar...",
        "searchButton": "Izlash",
        "categoryTitle": "Asosiy kategoriyalar",
        "category1": "Temuriylar davri",
        "category2": "Jadid adabiyoti ",
        "category3": "Sovet davri ",
        "category4": "Mustaqillik davri",
        "profile": "Profile",
        "addAuthor": "Add author",
        "addBook": "Add book",
        "logOut": "Log out",
        "dataOfBirth": "Tavallud sanasi",
        "dataOfDead": "Vafot etgan sana",
        "century": "Asarlari",
        "seeAll": "Barchasini ko’rish",
        "pageNumber": "Sahifalar soni:",
        "page": "varoq",
        "printDate": "Chop etilgan:",
        "costBook": "Kitob narxi:",
        "years": "- yil",
        "allInformation": "To’liq ma’lumot",
        "security": "Xavfsizlig",
        "setting": "Sozlamalar",
        "myProfile": "Mening profilim",
        "firstName": "Ism",
        "firstNameLabel": "Iltimos, ismingizni kiriting.",
        "lastName": "Familya",
        "lastNameLabel": "Iltimos, familyangizni kiriting.",
        "phone": "Telefon nomer", 
        "phoneLabel": "Iltimos, telefon nomeringizni kiriting",
        "saveChanges": "O'zgarishlarni saqlash",
        "changeOrRecover": "Parolingizni o'zgartiring yoki tiklang:",
        "email": "Email",
        "emailLabel": "Kechirasiz, emailingizni kiriting.",
        "password": "Parol",
        "currentPassword": "Joriy parol",
        "currentPasswordLabel": "Joriy parolni kiriting",
        "newPassword": "Yangi parol",
        "newPasswordLabel": "Yangi parolni kiriting",
        "language": "Til",
        "languageLabel": "Tilni tanlang",
        "theme": "mavzu",
        "signUp": "Ro'yhatdan o'tish",
        "alreadyAccount": "Bu hisob allaqachon mavjud",
        "signIn": "Kirish",
        "notAccount": "Hisobingiz yo'qmi",
        "nextStep": "Keyingi qadam",
        "addFile": "Yuklash uchun faylni ushbu hududga bosing yoki sudrab torting",
        "title": "Sarlavha",
        "pageTitle": "Varoq",
        "year": "Yil",
        "price": "Narx",
        "genre": "Janr",
        "author": "Muallif",
        "bio": "Malumot",
        "birthLabel": "Tug'ilgan kun",
        "deathLabel": "Vafot etgan kun",
        "country": "Mamlakat",
        "create": "Yaratish"
      },
      eng: {
      "mainPage": "Main page",
      "book": "Books",
      "searchTitle": "Search",
      "searchInputPlaceholder": "Adiblar, kitoblar, audiolar, maqolalar...",
      "searchButton": "Searching",
      "categoryTitle": "Main catigory",
      "category1": "Temuriylar davri",
      "category2": "Jadid adabiyoti ",
      "category3": "Sovet davri ",
      "category4": "Mustaqillik davri",
      "profile": "Profile",
      "addAuthor": "Add author",
      "addBook": "Add book",
      "logOut": "Log out",
      "dataOfBirth": "Tavallud sanasi",
      "dataOfDead": "Vafot etgan sana",
      "century": "Asarlari",
      "seeAll": "See all",
      "pageNumber": "Sahifalar soni:",
      "page": "pages",
      "printDate": "Chop etilgan:",
      "costBook": "Kitob narxi:",
      "years": "years",
      "allInformation": "To’liq ma’lumot",
      "security": "Xavfsizlig",
      "setting": "Setting",
      "myProfile": "My profile",
      "firstName": "First name",
      "firstNameLabel": "Please, enter your first name.",
      "lastName": "Nast name",
      "lastNameLabel": "Please, enter your last name.",
      "phone": "Phone", 
      "phoneLabel": "Please, enter your phone name",
      "saveChanges": "Save changes",
      "changeOrRecover": "Parolingizni o'zgartiring yoki tiklang:",
      "email": "Email",
      "emailLabel": "Please, enter your email name.",
      "password": "Password",
      "currentPassword": "Current password",
      "currentPasswordLabel": "Enter current password",
      "newPassword": "New password",
      "newPasswordLabel": "Enter new password",
      "language": "Language",
      "languageLabel": "Choose language",
      "theme": "Theme",
      "signUp": "Sign Up",
      "alreadyAccount": "Bu hisob allaqachon mavjud",
      "signIn": "Sign In",
      "notAccount": "Hisobingiz yo'qmi",
      "nextStep": "Next step",
      "addFile": "Yuklash uchun faylni ushbu hududga bosing yoki sudrab torting",
      "title": "Sarlavha",
      "pageTitle": "Varoq",
      "year": "Yil",
      "price": "Narx",
      "genre": "Janr",
      "author": "Muallif",
      "bio": "Malumot",
      "birthLabel": "Tug'ilgan kun",
      "deathLabel": "Vafot etgan kun",
      "country": "Mamlakat",
      "create": "Yaratish"
      },
      lang: {},
      colorTheme: true,
      pageout: false
    }
  },
  mutations: {
    uzLanguage(state){
      // state.languz = true
      // state.langeng = false
      state.lang = state.uz
    },
    engLanguage(state){
      // state.langeng = 1
      state.lang = state.eng
      // state.languz = 0
    },
    colorTheme(state){
      if(!state.colorTheme){
        document.body.setAttribute("theme", "dark")
      } else {
        document.body.setAttribute("theme", "lite")
      }
      state.colorTheme = !state.colorTheme
    },
    authContent(state){
      state.authContent = true
      state.bookContent = false
    },
    bookContent(state){
      state.bookContent = true
      state.authContent = false
    },
    chatPageOut(state){
      state.pageout = !state.pageout
    }
  },
})

export default store
