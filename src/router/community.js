export default [
    {
        path: "invitation",
        name: "invitation",
        component: () => import("@/views/community/components/Invitation.vue"),
    },
    {
        path: "forum",
        name: "forum",
        component: () => import("@/views/community/components/Forum.vue"),
    },
    {
        path: "create",
        name: "create",
        component: () => import("@/views/community/components/CreateBlog.vue")
    },
    {
        path: "recycling",
        name: "recycling",
        component: () => import("@/views/community/components/recycling.vue")
    }
];
