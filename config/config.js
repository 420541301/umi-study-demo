export default [
    {
        path: '/',
        component: '@/layouts/BlankLayout',
        routes: [
            {
                path: '/user',
                component: '@/layouts/UserLayout',
                routes: [
                    {
                        path: '/user/login',
                        name: 'login',
                        component: '@/pages/User/login/login.jsx',
                    },
                    {
                        path: '/user',
                        redirect: '/user/login',
                    },
                    {
                        component: '404',
                    },
                ]
            },
            {
                path: '/',
                component: '../layouts/BasicLayout',
                // Routes: ['src/pages/Authorized'],
                authority: ['admin', 'user'],
                routes: [
                    {
                        path: '/',
                        redirect: '/dashboard/analysis',
                    },
                    {
                        path: '/dashboard',
                        name: 'dashboard',
                        icon: 'dashboard',
                        routes: [
                            {
                                path: '/',
                                redirect: '/dashboard/analysis',
                            },
                            {
                                name: 'analysis',
                                icon: 'smile',
                                path: '/dashboard/analysis',
                                component: '@/pages/dashboard/analysis',
                            },
                            {
                                name: 'monitor',
                                icon: 'smile',
                                path: '/dashboard/monitor',
                                component: '@/pages/dashboard/monitor',
                            },
                            {
                                name: 'workplace',
                                icon: 'smile',
                                path: '/dashboard/workplace',
                                component: '@/pages/dashboard/workplace',
                            },
                        ]
                    },
                    {
                        component: '404',
                    },
                ]
            }
        ]
    }
]