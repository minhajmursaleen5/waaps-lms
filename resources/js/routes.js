

import splash from './pages/splash.vue';
import parent from './pages/parent.vue';
import login from './pages/login.vue';
import dashboard from './pages/dashboard/dashboard.vue';
import course from './pages/course/course.vue';
import coursedetail from './pages/course/coursedetail.vue';
import category from './pages/category/category.vue';
import errorpage from './pages/errorpage.vue';
import about from './pages/about.vue';
import banking from './pages/banking.vue';
import blog from './pages/blog.vue';
import blogdetails from './pages/blogdetails.vue';
import business from './pages/business.vue';
import cart from './pages/cart.vue';
import consulting from './pages/consulting.vue';
import contact from './pages/contact.vue';
import corporate from './pages/corporate.vue';
import coursevideo from './pages/coursevideo.vue';
import education from './pages/education.vue';
import instructordetails from './pages/instructordetails.vue';
import marketing from './pages/marketing.vue';
import music from './pages/music.vue';
import packages from './pages/packages.vue';
import photography from './pages/photography.vue';
import purchase from './pages/purchase.vue';
import signup from './pages/signup.vue';
import webdevelopment from './pages/webdevelopment.vue';



export const routes = [
    // { path: '/', component: require('./login/login').default },
    {   path: '/',
        name: 'parent',
        component: parent,
        children: [
            { path: "", name: 'dashboard', component: dashboard },
            { path: '/login', name: 'login', component: login },
            { path: '/category', name: 'category', component: category },
            { path: '/course', name: 'course', component: course },
            { path: '/404', name: 'errorpage', component: errorpage },
            { path: '/about', name: 'about', component: about },
            { path: '/banking', name: 'banking', component: banking },
            { path: '/blog', name: 'blog', component: blog },
            { path: '/blog-details', name: 'blogdetails', component: blogdetails },
            { path: '/business', name: 'business', component: business },
            { path: '/cart', name: 'cart', component: cart },
            { path: '/consulting', name: 'consulting', component: consulting },
            { path: '/contact', name: 'contact', component: contact },
            { path: '/corporate', name: 'corporate', component: corporate },
            { path: '/course-detail', name: 'coursedetail', component: coursedetail },
            { path: '/course-video', name: 'coursevideo', component: coursevideo },
            { path: '/education', name: 'education', component: education },
            { path: '/instructor-details', name: 'instructordetails', component: instructordetails },
            { path: '/marketing', name: 'marketing', component: marketing },
            { path: '/music', name: 'music', component: music },
            { path: '/packages', name: 'packages', component: packages },
            { path: '/photography', name: 'photography', component: photography },
            { path: '/purchase', name: 'purchase', component: purchase },
            { path: '/signup', name: 'signup', component: signup },
            { path: '/web-development', name: 'webdevelopment', component: webdevelopment },

        ]
    },






    // {
    //     path: '/dashboard',
    //     component: require('./dashboard/dashboard').default,
    //     beforeEnter: authGuard,
    //     children: [
    //         {
    //             path: '/properties',
    //             component: require('./dashboard/pages/property-page/properties').default,

    //         },
    //         {
    //             path: '/properties/:pid/equipment',
    //             name: 'Equipment',
    //             component: require('./dashboard/pages/equipment-page/equipment').default,
    //             children: [
    //                 // {
    //                 //     path: '/',
    //                 //     name: 'units',
    //                 //     component: require('./dashboard/pages/equipment-page/unitList').default,

    //                 // },
    //                 {
    //                     path: ':id/units',
    //                     name: 'units',
    //                     component: require('./dashboard/pages/equipment-page/unitList').default,

    //                 }
    //             ],
    //         },
    //         {
    //             path: '/reports',
    //             component: require('./dashboard/pages/report-page/report').default
    //         },
    //         {
    //             path: '/alerts',
    //             component: require('./dashboard/pages/alert-page/alert').default
    //         },
    //         {
    //             path: '/users',
    //             component: require('./dashboard/pages/user-page/user').default,

    //         },
    //         {
    //             path: '/users/create',
    //             component: require('./dashboard/pages/user-page/createUser').default
    //         },
    //         {
    //             path: '/apis',
    //             component: require('./dashboard/pages/api-page/api').default
    //         },
    //         {
    //             path: '/billing',
    //             component: require('./dashboard/pages/billing-page/billing').default
    //         },
    //     ]
    // },
];