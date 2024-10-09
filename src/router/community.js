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
];
