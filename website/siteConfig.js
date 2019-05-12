/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// 尽可能查看 https://docusaurus.io/docs/site-config
// 站点配置选项。

// 使用您的项目为用户页面的项目/组织列表。
const users = [
    {
        caption: 'User1',
        // 您需要在baseUrl前面添加图像路径
        // 如果它不是'/'，例如：'/ test-site/img/image.jpg'。
        image: '/img/undraw_open_source.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
    },
];

const siteConfig = {
    //algolia 文档搜索
    algolia: {
        apiKey: "my-search-only-api-key-1234",
        indexName: "my-index-name"
    },
    title: 'SmallBun', // 您网站的标题
    tagline: '企业级应用程序开发脚手架',
    url: 'http://pingfangushi.github.io', // 网站网址
    baseUrl: '/smallbun', // 项目的基本URL */
    editUrl: 'https://github.com/pingfangushi/smallbun-site/edit/master/docs/',

    // 用于发布等
    projectName: 'smallbun-website',
    organizationName: 'pingfangushi',
    cname: 'pingfangushi.com',


    // 对于顶部导航栏中没有标题链接 - > headerLinks：[]，
    headerLinks: [
        {doc: "项目概述", label: "使用文档"},
        {href: "http://118.25.232.156:9090/login", label: "在线演示"},
        {doc: "技术支持", label: "技术支持"},
        {blog: true, label: "更新日志"},
        {href: "https://github.com/leshalv/smallbun", label: "GitHub"},
        {search: true},
    ],

    // 如果您在上面设置了用户，请在此处添加：
    users,

    /* 页眉/页脚的图像路径 */
    /*headerIcon: 'img/favicon.ico',*/
    /*footerIcon: 'img/favicon.ico',*/
    /*favicon: 'img/favicon.ico',*/

    /* 网站的颜色 */
    colors: {
        primaryColor: '#1890ff',
        secondaryColor: '#096dd9',
    },

    // 此版权信息用于/core/Footer.js和博客RSS / Atom供稿
    copyright: `Copyright © ${new Date().getFullYear()} SmallBun 企业级开发脚手架`,

    highlight: {
        // Highlight.js主题用于代码块中的语法突出显示。
        theme: 'default',
    },

    // 在此处添加将放置在<script>标记中的自定义脚本。
    scripts: ['https://buttons.github.io/buttons.js'],

    // 在当前文档页面的页面导航上。
    onPageNav: 'separate',
    // 路径没有.html扩展名。
    cleanUrl: true,

    // 打开Graph和Twitter卡图片。
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // 显示文档的最后一个贡献者的名字。
    enableUpdateBy: true,

    // 显示文档的上次更新时间
    enableUpdateTime: true,/**/
};

module.exports = siteConfig;
