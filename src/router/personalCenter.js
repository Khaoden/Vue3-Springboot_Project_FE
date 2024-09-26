export default [
    {
        path: "personal-data",
        name: "personal-data",
        component: () => import("@/views/personalCenter/page/PersonalData.vue"),
    },
    {
        path: "account-setting",
        name: "account-setting",
        component: () => import("@/views/personalCenter/page/AccountSetting.vue"),
    },
];
