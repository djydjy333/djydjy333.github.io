(function () {
  'use strict';

  // ===========================
  // i18n TRANSLATION DICTIONARY
  // ===========================
  var i18n = {
    en: {
      // Nav
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.certs': 'Certs',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      // Hero
      'hero.greeting': "Hello, I'm",
      'hero.title': 'Full-Stack Software Engineer',
      'hero.subtitle': 'Building robust enterprise systems and modern web applications in Tokyo, Japan',
      'hero.download': 'Download Resume',
      'hero.contact': 'Contact Me',
      // About
      'about.title': 'About Me',
      'about.p1': 'A full-stack software engineer with over 5 years of experience designing and developing enterprise-grade systems across e-commerce, logistics, CMS, and IoT domains. Based in Tokyo, Japan.',
      'about.p2': 'I specialize in the Java/Spring ecosystem for backend development and have broadened my skill set into modern frontend technologies including React and TypeScript. I have hands-on experience with cloud-native architecture using AWS, Docker, and microservices patterns.',
      'about.p3': 'I thrive on transforming complex business requirements into clean, maintainable software and am passionate about continuous learning \u2014 recently earning my Information Security Management certification and actively exploring Python and cloud technologies.',
      // Skills
      'skills.title': 'Skills',
      'skills.languages': 'Languages',
      'skills.frameworks': 'Frameworks & Libraries',
      'skills.databases': 'Databases',
      'skills.devops': 'DevOps & Tools',
      // Experience
      'exp.title': 'Work Experience',
      'exp.role1': 'System Engineer',
      'exp.role2': 'System Engineer',
      'exp.p1.title': 'CMS / Homepage Creation Service',
      'exp.p1.d1': 'Led full-cycle development (design, implementation, testing, operations) in an Agile team of 5-10 engineers',
      'exp.p1.d2': 'Designed and built theme management, file upload, and theme editor features for a corporate website builder',
      'exp.p1.d3': 'Improved UX by applying user-centered design principles and leveraging Element UI component library',
      'exp.p2.title': 'E-Commerce Shopping Site',
      'exp.p2.d1': 'Developed sales reporting and order processing batch systems for a large online retail platform',
      'exp.p2.d2': 'Optimized product listing page load speed using caching, SQL tuning, and asynchronous requests (Ajax)',
      'exp.p2.d3': 'Implemented payment method integrations and marketplace channel additions',
      'exp.p3.title': 'Warehouse Management System',
      'exp.p3.d1': 'Built shipping instruction batch processes and enhanced inventory/receiving management for a logistics center',
      'exp.p3.d2': 'Created automation tools to extract nested files, improving team workflow efficiency',
      'exp.p3.d3': 'Authored technical documentation adopted across the development team',
      'exp.p4.title': 'Travel Information Website',
      'exp.p4.d1': 'Developed travel plan search, booking history, and favorites features for an online travel platform',
      'exp.p4.d2': 'Championed user-centered development by conducting direct user interviews alongside specification reviews',
      'exp.p5.title': 'Handy Terminal Delivery App',
      'exp.p5.d1': 'Designed and built login, vehicle registration, and route selection modules from basic design through testing',
      'exp.p5.d2': 'Managed project progress tracking and delivered on a tight deadline through rigorous daily standups',
      'exp.p6.title': 'Attendance Management System',
      'exp.p6.d1': 'Developed clock-in/clock-out and attendance data aggregation features',
      'exp.p6.d2': 'Designed custom Excel report formats that streamlined HR workflows',
      'exp.p7.title': 'Camera Controller iOS App',
      'exp.p7.d1': 'Fixed Bluetooth connectivity and remote shutter control bugs for a DSLR camera companion iOS app',
      'exp.p7.d2': 'Performed compatibility testing across multiple camera models',
      'exp.p8.title': 'Agricultural Support System',
      'exp.p8.d1': 'Built farmer management dashboards and crop yield tracking features',
      'exp.p8.d2': 'Proactively identified and resolved system defects, contributing to overall project quality',
      // Projects
      'projects.title': 'Projects',
      'projects.all': 'All',
      'projects.web': 'Web',
      'projects.cloud': 'Cloud',
      'projects.mobile': 'Mobile',
      'projects.data': 'Data',
      'proj.1.title': 'CMS / Homepage Builder',
      'proj.1.desc': 'A content management system enabling businesses to create and manage corporate websites. Built with modern cloud-native stack using Agile methodology in a team of 5-10 engineers.',
      'proj.2.title': 'E-Commerce Platform',
      'proj.2.desc': 'Large-scale online retail platform with product catalog, order management, and multi-channel marketplace integration. Achieved measurable page load improvements through caching and SQL optimization.',
      'proj.3.title': 'Warehouse Management System',
      'proj.3.desc': 'Inventory receiving, storage, and shipping management system for logistics centers. Created automation tooling that improved team productivity.',
      'proj.4.title': 'Travel Booking Platform',
      'proj.4.desc': 'Online travel information site with plan search, hotel/flight booking, reservation history, and favorites. Focused on UX through direct user research.',
      'proj.5.title': 'Delivery Terminal App',
      'proj.5.desc': 'Mobile handheld terminal application for delivery logistics. Designed vehicle registration and route selection flows from scratch.',
      'proj.6.title': 'Camera Controller iOS App',
      'proj.6.desc': 'iOS application for remote DSLR camera control via Bluetooth. Fixed critical connectivity bugs and performed cross-device compatibility testing.',
      'proj.7.title': 'Agricultural Support System',
      'proj.7.desc': 'Farming guidance system with crop yield tracking and grower management dashboards, supporting agricultural productivity improvement.',
      // Education
      'edu.title': 'Education',
      'edu.degree1': 'Master of Electronic Information Engineering',
      'edu.school1': 'Kanazawa University, Japan',
      'edu.detail1': 'Research: DNN-based language identification using speech fragments. Achieved top scores in JLPT N1 reading comprehension.',
      'edu.degree2': 'Bachelor of Computer Science',
      'edu.school2': 'Dalian Jiaotong University, China',
      'edu.detail2': 'Core studies in software engineering, C programming, data structures, and algorithms. Japanese language as a secondary major.',
      // Certifications
      'certs.title': 'Certifications',
      'certs.c1.name': 'Information Security Management',
      'certs.c1.issuer': 'IPA Japan National Exam',
      'certs.c2.name': 'JLPT N1 (Japanese Language)',
      'certs.c2.issuer': 'Score: 139 points',
      'certs.c3.issuer': 'Score: 650',
      // Gallery
      'gallery.title': 'Gallery',
      'gallery.intro': 'A glimpse into my life beyond the code.',
      // Contact
      'contact.title': 'Get In Touch',
      'contact.intro': "I'm currently open to new opportunities. Whether you have a question or just want to say hello, feel free to reach out.",
      'contact.btn': 'Say Hello',
      // Footer
      'footer.copyright': '\u00a9 2025 Deng JunYang. All rights reserved.',
      'footer.updated': 'Last updated: {{LAST_UPDATED_DATE}}'
    },

    ja: {
      // Nav
      'nav.about': '\u81ea\u5df1\u7d39\u4ecb',
      'nav.skills': '\u30b9\u30ad\u30eb',
      'nav.experience': '\u8077\u52d9\u7d4c\u6b74',
      'nav.projects': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
      'nav.education': '\u5b66\u6b74',
      'nav.certs': '\u8cc7\u683c',
      'nav.gallery': '\u30ae\u30e3\u30e9\u30ea\u30fc',
      'nav.contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      // Hero
      'hero.greeting': '\u3053\u3093\u306b\u3061\u306f\u3001',
      'hero.title': '\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a8\u30f3\u30b8\u30cb\u30a2',
      'hero.subtitle': '\u6771\u4eac\u3092\u62e0\u70b9\u306b\u3001\u5805\u7262\u306a\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30b9\u30c6\u30e0\u3068\u30e2\u30c0\u30f3\u306aWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u3066\u3044\u307e\u3059',
      'hero.download': '\u5c65\u6b74\u66f8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
      'hero.contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      // About
      'about.title': '\u81ea\u5df1\u7d39\u4ecb',
      'about.p1': 'EC\u30b5\u30a4\u30c8\u3001\u7269\u6d41\u3001CMS\u3001IoT\u306a\u3069\u591a\u69d8\u306a\u9818\u57df\u3067\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b0\u30ec\u30fc\u30c9\u306e\u30b7\u30b9\u30c6\u30e0\u8a2d\u8a08\u30fb\u958b\u767a\u306b5\u5e74\u4ee5\u4e0a\u306e\u7d4c\u9a13\u3092\u6301\u3064\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u3059\u3002\u6771\u4eac\u5728\u4f4f\u3002',
      'about.p2': 'Java/Spring\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u958b\u767a\u3092\u5c02\u9580\u3068\u3057\u3001React\u3084TypeScript\u306a\u3069\u306e\u30e2\u30c0\u30f3\u306a\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u6280\u8853\u306b\u3082\u30b9\u30ad\u30eb\u3092\u5e83\u3052\u3066\u3044\u307e\u3059\u3002AWS\u3001Docker\u3001\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30d1\u30bf\u30fc\u30f3\u3092\u7528\u3044\u305f\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u5b9f\u52d9\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u3002',
      'about.p3': '\u8907\u96d1\u306a\u30d3\u30b8\u30cd\u30b9\u8981\u4ef6\u3092\u30af\u30ea\u30fc\u30f3\u3067\u4fdd\u5b88\u6027\u306e\u9ad8\u3044\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u306b\u3084\u308a\u304c\u3044\u3092\u611f\u3058\u3001\u7d99\u7d9a\u7684\u306a\u5b66\u7fd2\u306b\u60c5\u71b1\u3092\u6ce8\u3044\u3067\u3044\u307e\u3059\u3002\u6700\u8fd1\u3001\u60c5\u5831\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u8a66\u9a13\u306b\u5408\u683c\u3057\u3001Python\u3084\u30af\u30e9\u30a6\u30c9\u6280\u8853\u3092\u7a4d\u6975\u7684\u306b\u63a2\u6c42\u3057\u3066\u3044\u307e\u3059\u3002',
      // Skills
      'skills.title': '\u30b9\u30ad\u30eb',
      'skills.languages': '\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e',
      'skills.frameworks': '\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af & \u30e9\u30a4\u30d6\u30e9\u30ea',
      'skills.databases': '\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9',
      'skills.devops': 'DevOps & \u30c4\u30fc\u30eb',
      // Experience
      'exp.title': '\u8077\u52d9\u7d4c\u6b74',
      'exp.role1': '\u30b7\u30b9\u30c6\u30e0\u30a8\u30f3\u30b8\u30cb\u30a2',
      'exp.role2': '\u30b7\u30b9\u30c6\u30e0\u30a8\u30f3\u30b8\u30cb\u30a2',
      'exp.p1.title': 'CMS / \u30db\u30fc\u30e0\u30da\u30fc\u30b8\u4f5c\u6210\u30b5\u30fc\u30d3\u30b9',
      'exp.p1.d1': '5\uff5e10\u4eba\u306e\u30a2\u30b8\u30e3\u30a4\u30eb\u30c1\u30fc\u30e0\u3067\u8a2d\u8a08\u30fb\u5b9f\u88c5\u30fb\u30c6\u30b9\u30c8\u30fb\u904b\u7528\u306e\u30d5\u30eb\u30b5\u30a4\u30af\u30eb\u958b\u767a\u3092\u30ea\u30fc\u30c9',
      'exp.p1.d2': '\u4f01\u696d\u30b5\u30a4\u30c8\u30d3\u30eb\u30c0\u30fc\u5411\u3051\u306e\u30c6\u30fc\u30de\u7ba1\u7406\u3001\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3001\u30c6\u30fc\u30de\u30a8\u30c7\u30a3\u30bf\u6a5f\u80fd\u3092\u8a2d\u8a08\u30fb\u69cb\u7bc9',
      'exp.p1.d3': 'UCD\u539f\u5247\u3068Element UI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u6d3b\u7528\u3057\u3066UX\u3092\u6539\u5584',
      'exp.p2.title': 'EC\u30b7\u30e7\u30c3\u30d4\u30f3\u30b0\u30b5\u30a4\u30c8',
      'exp.p2.d1': '\u5927\u898f\u6a21\u30aa\u30f3\u30e9\u30a4\u30f3\u5c0f\u58f2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5411\u3051\u306e\u58f2\u4e0a\u30ec\u30dd\u30fc\u30c8\u3068\u6ce8\u6587\u51e6\u7406\u30d0\u30c3\u30c1\u30b7\u30b9\u30c6\u30e0\u3092\u958b\u767a',
      'exp.p2.d2': '\u30ad\u30e3\u30c3\u30b7\u30e5\u3001SQL\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3001\u975e\u540c\u671f\u30ea\u30af\u30a8\u30b9\u30c8(Ajax)\u3067\u5546\u54c1\u4e00\u89a7\u306e\u8868\u793a\u901f\u5ea6\u3092\u6700\u9069\u5316',
      'exp.p2.d3': '\u6c7a\u6e08\u65b9\u6cd5\u306e\u7d71\u5408\u304a\u3088\u3073\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u30c1\u30e3\u30cd\u30eb\u306e\u8ffd\u52a0\u3092\u5b9f\u88c5',
      'exp.p3.title': '\u5009\u5eab\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0',
      'exp.p3.d1': '\u7269\u6d41\u30bb\u30f3\u30bf\u30fc\u5411\u3051\u306e\u51fa\u8377\u6307\u793a\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u69cb\u7bc9\u304a\u3088\u3073\u5165\u51fa\u5eab\u7ba1\u7406\u306e\u5f37\u5316',
      'exp.p3.d2': '\u30cd\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u62bd\u51fa\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u3001\u30c1\u30fc\u30e0\u306e\u4f5c\u696d\u52b9\u7387\u3092\u6539\u5584',
      'exp.p3.d3': '\u958b\u767a\u30c1\u30fc\u30e0\u5168\u4f53\u3067\u63a1\u7528\u3055\u308c\u305f\u6280\u8853\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u57f7\u7b46',
      'exp.p4.title': '\u65c5\u884c\u60c5\u5831\u30b5\u30a4\u30c8',
      'exp.p4.d1': '\u30aa\u30f3\u30e9\u30a4\u30f3\u65c5\u884c\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5411\u3051\u306e\u65c5\u884c\u30d7\u30e9\u30f3\u691c\u7d22\u3001\u4e88\u7d04\u5c65\u6b74\u3001\u304a\u6c17\u306b\u5165\u308a\u6a5f\u80fd\u3092\u958b\u767a',
      'exp.p4.d2': '\u4ed5\u69d8\u30ec\u30d3\u30e5\u30fc\u3068\u4e26\u884c\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\u3092\u5b9f\u65bd\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u4e2d\u5fc3\u306e\u958b\u767a\u3092\u63a8\u9032',
      'exp.p5.title': '\u30cf\u30f3\u30c7\u30a3\u30bf\u30fc\u30df\u30ca\u30eb\u914d\u9001\u30a2\u30d7\u30ea',
      'exp.p5.d1': '\u30ed\u30b0\u30a4\u30f3\u3001\u8eca\u4e21\u767b\u9332\u3001\u30eb\u30fc\u30c8\u9078\u629e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u57fa\u672c\u8a2d\u8a08\u304b\u3089\u30c6\u30b9\u30c8\u307e\u3067\u8a2d\u8a08\u30fb\u69cb\u7bc9',
      'exp.p5.d2': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u9032\u6357\u7ba1\u7406\u3092\u62c5\u5f53\u3057\u3001\u53b3\u3057\u3044\u7d0d\u671f\u5185\u306b\u7d0d\u54c1',
      'exp.p6.title': '\u52e4\u6020\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0',
      'exp.p6.d1': '\u6253\u523b\u30fb\u9000\u52e4\u304a\u3088\u3073\u52e4\u6020\u30c7\u30fc\u30bf\u96c6\u8a08\u6a5f\u80fd\u3092\u958b\u767a',
      'exp.p6.d2': 'HR\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u52b9\u7387\u5316\u3059\u308b\u30ab\u30b9\u30bf\u30e0Excel\u30ec\u30dd\u30fc\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a2d\u8a08',
      'exp.p7.title': '\u30ab\u30e1\u30e9\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fciOS\u30a2\u30d7\u30ea',
      'exp.p7.d1': '\u4e00\u773c\u30ec\u30d5\u30ab\u30e1\u30e9\u7528iOS\u30a2\u30d7\u30ea\u306eBluetooth\u63a5\u7d9a\u304a\u3088\u3073\u30ea\u30e2\u30fc\u30c8\u30b7\u30e3\u30c3\u30bf\u30fc\u5236\u5fa1\u306e\u30d0\u30b0\u3092\u4fee\u6b63',
      'exp.p7.d2': '\u8907\u6570\u306e\u30ab\u30e1\u30e9\u30e2\u30c7\u30eb\u3067\u4e92\u63db\u6027\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd',
      'exp.p8.title': '\u55b6\u8fb2\u6307\u5c0e\u652f\u63f4\u30b7\u30b9\u30c6\u30e0',
      'exp.p8.d1': '\u8fb2\u5bb6\u7ba1\u7406\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3068\u53ce\u7a6e\u91cf\u8ffd\u8de1\u6a5f\u80fd\u3092\u69cb\u7bc9',
      'exp.p8.d2': '\u30b7\u30b9\u30c6\u30e0\u4e0d\u5177\u5408\u3092\u7a4d\u6975\u7684\u306b\u7279\u5b9a\u30fb\u89e3\u6c7a\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u54c1\u8cea\u306b\u8ca2\u732e',
      // Projects
      'projects.title': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
      'projects.all': '\u3059\u3079\u3066',
      'projects.web': 'Web',
      'projects.cloud': '\u30af\u30e9\u30a6\u30c9',
      'projects.mobile': '\u30e2\u30d0\u30a4\u30eb',
      'projects.data': '\u30c7\u30fc\u30bf',
      'proj.1.title': 'CMS / \u30db\u30fc\u30e0\u30da\u30fc\u30b8\u30d3\u30eb\u30c0\u30fc',
      'proj.1.desc': '\u4f01\u696d\u304c\u30b3\u30fc\u30dd\u30ec\u30fc\u30c8\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u30fb\u7ba1\u7406\u3067\u304d\u308bCMS\u30025\uff5e10\u4eba\u306e\u30c1\u30fc\u30e0\u3067\u30a2\u30b8\u30e3\u30a4\u30eb\u958b\u767a\u3002\u30e2\u30c0\u30f3\u306a\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u6280\u8853\u30b9\u30bf\u30c3\u30af\u3092\u4f7f\u7528\u3002',
      'proj.2.title': 'EC\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0',
      'proj.2.desc': '\u5546\u54c1\u30ab\u30bf\u30ed\u30b0\u3001\u6ce8\u6587\u7ba1\u7406\u3001\u30de\u30eb\u30c1\u30c1\u30e3\u30cd\u30eb\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u7d71\u5408\u3092\u5099\u3048\u305f\u5927\u898f\u6a21\u30aa\u30f3\u30e9\u30a4\u30f3\u5c0f\u58f2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3068SQL\u6700\u9069\u5316\u3067\u30da\u30fc\u30b8\u8aad\u307f\u8fbc\u307f\u901f\u5ea6\u3092\u6539\u5584\u3002',
      'proj.3.title': '\u5009\u5eab\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0',
      'proj.3.desc': '\u7269\u6d41\u30bb\u30f3\u30bf\u30fc\u5411\u3051\u306e\u5165\u51fa\u5eab\u30fb\u4fdd\u7ba1\u30fb\u51fa\u8377\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u3002\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u3001\u30c1\u30fc\u30e0\u751f\u7523\u6027\u3092\u5411\u4e0a\u3002',
      'proj.4.title': '\u65c5\u884c\u4e88\u7d04\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0',
      'proj.4.desc': '\u30d7\u30e9\u30f3\u691c\u7d22\u3001\u30db\u30c6\u30eb/\u822a\u7a7a\u5238\u4e88\u7d04\u3001\u4e88\u7d04\u5c65\u6b74\u3001\u304a\u6c17\u306b\u5165\u308a\u6a5f\u80fd\u3092\u5099\u3048\u305f\u30aa\u30f3\u30e9\u30a4\u30f3\u65c5\u884c\u60c5\u5831\u30b5\u30a4\u30c8\u3002\u30e6\u30fc\u30b6\u30fc\u30ea\u30b5\u30fc\u30c1\u306b\u57fa\u3065\u304fUX\u8a2d\u8a08\u3002',
      'proj.5.title': '\u914d\u9001\u30bf\u30fc\u30df\u30ca\u30eb\u30a2\u30d7\u30ea',
      'proj.5.desc': '\u914d\u9001\u7269\u6d41\u5411\u3051\u30e2\u30d0\u30a4\u30eb\u30cf\u30f3\u30c7\u30a3\u30bf\u30fc\u30df\u30ca\u30eb\u30a2\u30d7\u30ea\u3002\u8eca\u4e21\u767b\u9332\u3068\u30eb\u30fc\u30c8\u9078\u629e\u30d5\u30ed\u30fc\u3092\u30bc\u30ed\u304b\u3089\u8a2d\u8a08\u3002',
      'proj.6.title': '\u30ab\u30e1\u30e9\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fciOS\u30a2\u30d7\u30ea',
      'proj.6.desc': 'Bluetooth\u7d4c\u7531\u3067\u4e00\u773c\u30ec\u30d5\u30ab\u30e1\u30e9\u3092\u30ea\u30e2\u30fc\u30c8\u5236\u5fa1\u3059\u308biOS\u30a2\u30d7\u30ea\u3002\u91cd\u8981\u306a\u63a5\u7d9a\u30d0\u30b0\u3092\u4fee\u6b63\u3057\u3001\u30af\u30ed\u30b9\u30c7\u30d0\u30a4\u30b9\u4e92\u63db\u6027\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd\u3002',
      'proj.7.title': '\u55b6\u8fb2\u6307\u5c0e\u652f\u63f4\u30b7\u30b9\u30c6\u30e0',
      'proj.7.desc': '\u53ce\u7a6e\u91cf\u8ffd\u8de1\u3068\u8fb2\u5bb6\u7ba1\u7406\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u5099\u3048\u305f\u55b6\u8fb2\u6307\u5c0e\u30b7\u30b9\u30c6\u30e0\u3002\u8fb2\u696d\u751f\u7523\u6027\u306e\u5411\u4e0a\u3092\u652f\u63f4\u3002',
      // Education
      'edu.title': '\u5b66\u6b74',
      'edu.degree1': '\u96fb\u5b50\u60c5\u5831\u5de5\u5b66 \u4fee\u58eb',
      'edu.school1': '\u91d1\u6ca2\u5927\u5b66\u3001\u65e5\u672c',
      'edu.detail1': '\u7814\u7a76\u30c6\u30fc\u30de\uff1aDNN\u3092\u7528\u3044\u305f\u97f3\u58f0\u65ad\u7247\u304b\u3089\u306e\u8a00\u8a9e\u8b58\u5225\u3002JLPT N1\u8aad\u89e3\u3067\u6e80\u70b9\u3092\u9054\u6210\u3002',
      'edu.degree2': '\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9 \u5b66\u58eb',
      'edu.school2': '\u5927\u9023\u4ea4\u901a\u5927\u5b66\u3001\u4e2d\u56fd',
      'edu.detail2': '\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u5de5\u5b66\u3001C\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3001\u30c7\u30fc\u30bf\u69cb\u9020\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5c65\u4fee\u3002\u526f\u5c02\u653b\u3068\u3057\u3066\u65e5\u672c\u8a9e\u3092\u5b66\u7fd2\u3002',
      // Certifications
      'certs.title': '\u53d6\u5f97\u8cc7\u683c',
      'certs.c1.name': '\u60c5\u5831\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u8a66\u9a13',
      'certs.c1.issuer': 'IPA \u56fd\u5bb6\u8a66\u9a13',
      'certs.c2.name': 'JLPT N1\uff08\u65e5\u672c\u8a9e\u80fd\u529b\u8a66\u9a13\uff09',
      'certs.c2.issuer': '\u30b9\u30b3\u30a2\uff1a139\u70b9',
      'certs.c3.issuer': '\u30b9\u30b3\u30a2\uff1a650',
      // Gallery
      'gallery.title': '\u30ae\u30e3\u30e9\u30ea\u30fc',
      'gallery.intro': '\u30b3\u30fc\u30c9\u306e\u5411\u3053\u3046\u5074\u306e\u79c1\u306e\u4e00\u9762\u3002',
      // Contact
      'contact.title': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'contact.intro': '\u73fe\u5728\u3001\u65b0\u3057\u3044\u6a5f\u4f1a\u3092\u63a2\u3057\u3066\u3044\u307e\u3059\u3002\u3054\u8cea\u554f\u3084\u3054\u6319\u62f6\u304c\u3042\u308c\u3070\u3001\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002',
      'contact.btn': '\u3054\u9023\u7d61',
      // Footer
      'footer.copyright': '\u00a9 2025 \u9127\u541b\u967d. All rights reserved.',
      'footer.updated': '\u6700\u7d42\u66f4\u65b0\u65e5: {{LAST_UPDATED_DATE}}'
    },

    zh: {
      // Nav
      'nav.about': '\u5173\u4e8e\u6211',
      'nav.skills': '\u6280\u80fd',
      'nav.experience': '\u5de5\u4f5c\u7ecf\u5386',
      'nav.projects': '\u9879\u76ee',
      'nav.education': '\u6559\u80b2\u80cc\u666f',
      'nav.certs': '\u8bc1\u4e66',
      'nav.gallery': '\u751f\u6d3b\u76f8\u518c',
      'nav.contact': '\u8054\u7cfb\u65b9\u5f0f',
      // Hero
      'hero.greeting': '\u4f60\u597d\uff0c\u6211\u662f',
      'hero.title': '\u5168\u6808\u8f6f\u4ef6\u5de5\u7a0b\u5e08',
      'hero.subtitle': '\u5728\u4e1c\u4eac\u69cb\u5efa\u5065\u58ee\u7684\u4f01\u4e1a\u7ea7\u7cfb\u7edf\u548c\u73b0\u4ee3Web\u5e94\u7528',
      'hero.download': '\u4e0b\u8f7d\u7b80\u5386',
      'hero.contact': '\u8054\u7cfb\u6211',
      // About
      'about.title': '\u5173\u4e8e\u6211',
      'about.p1': '\u62e5\u67095\u5e74\u4ee5\u4e0a\u7ecf\u9a8c\u7684\u5168\u6808\u8f6f\u4ef6\u5de5\u7a0b\u5e08\uff0c\u5728\u7535\u5546\u3001\u7269\u6d41\u3001CMS\u3001\u7269\u8054\u7f51\u7b49\u591a\u4e2a\u9886\u57df\u8bbe\u8ba1\u548c\u5f00\u53d1\u4f01\u4e1a\u7ea7\u7cfb\u7edf\u3002\u73b0\u5c45\u4e1c\u4eac\u3002',
      'about.p2': '\u4e13\u957f\u4e8eJava/Spring\u751f\u6001\u7cfb\u7edf\u7684\u540e\u7aef\u5f00\u53d1\uff0c\u540c\u65f6\u5c06\u6280\u80fd\u62d3\u5c55\u5230React\u3001TypeScript\u7b49\u73b0\u4ee3\u524d\u7aef\u6280\u672f\u3002\u5177\u5907AWS\u3001Docker\u3001\u5fae\u670d\u52a1\u67b6\u6784\u7684\u5b9e\u6218\u7ecf\u9a8c\u3002',
      'about.p3': '\u70ed\u8877\u4e8e\u5c06\u590d\u6742\u7684\u4e1a\u52a1\u9700\u6c42\u8f6c\u5316\u4e3a\u6574\u6d01\u3001\u53ef\u7ef4\u62a4\u7684\u8f6f\u4ef6\uff0c\u5bf9\u6301\u7eed\u5b66\u4e60\u5145\u6ee1\u70ed\u60c5\u2014\u2014\u6700\u8fd1\u53d6\u5f97\u4e86\u4fe1\u606f\u5b89\u5168\u7ba1\u7406\u8d44\u683c\u8ba4\u8bc1\uff0c\u5e76\u79ef\u6781\u63a2\u7d22Python\u548c\u4e91\u6280\u672f\u3002',
      // Skills
      'skills.title': '\u6280\u80fd',
      'skills.languages': '\u7f16\u7a0b\u8bed\u8a00',
      'skills.frameworks': '\u6846\u67b6 & \u5e93',
      'skills.databases': '\u6570\u636e\u5e93',
      'skills.devops': 'DevOps & \u5de5\u5177',
      // Experience
      'exp.title': '\u5de5\u4f5c\u7ecf\u5386',
      'exp.role1': '\u7cfb\u7edf\u5de5\u7a0b\u5e08',
      'exp.role2': '\u7cfb\u7edf\u5de5\u7a0b\u5e08',
      'exp.p1.title': 'CMS / \u4f01\u4e1a\u5b98\u7f51\u5efa\u7ad9\u670d\u52a1',
      'exp.p1.d1': '\u57285-10\u4eba\u7684\u654f\u6377\u56e2\u961f\u4e2d\u4e3b\u5bfc\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u8fd0\u7ef4\u5168\u6d41\u7a0b\u5f00\u53d1',
      'exp.p1.d2': '\u4e3a\u4f01\u4e1a\u7f51\u7ad9\u6784\u5efa\u5668\u8bbe\u8ba1\u5e76\u5f00\u53d1\u4e86\u4e3b\u9898\u7ba1\u7406\u3001\u6587\u4ef6\u4e0a\u4f20\u3001\u4e3b\u9898\u7f16\u8f91\u5668\u529f\u80fd',
      'exp.p1.d3': '\u8fd0\u7528\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u8bbe\u8ba1\u539f\u5219\u548cElement UI\u7ec4\u4ef6\u5e93\u6539\u5584\u7528\u6237\u4f53\u9a8c',
      'exp.p2.title': '\u7535\u5546\u8d2d\u7269\u7f51\u7ad9',
      'exp.p2.d1': '\u4e3a\u5927\u578b\u5728\u7ebf\u96f6\u552e\u5e73\u53f0\u5f00\u53d1\u9500\u552e\u62a5\u8868\u548c\u8ba2\u5355\u5904\u7406\u6279\u5904\u7cfb\u7edf',
      'exp.p2.d2': '\u901a\u8fc7\u7f13\u5b58\u3001SQL\u8c03\u4f18\u3001\u5f02\u6b65\u8bf7\u6c42(Ajax)\u4f18\u5316\u5546\u54c1\u5217\u8868\u52a0\u8f7d\u901f\u5ea6',
      'exp.p2.d3': '\u5b9e\u73b0\u652f\u4ed8\u65b9\u5f0f\u96c6\u6210\u548c\u5e02\u573a\u6e20\u9053\u62d3\u5c55',
      'exp.p3.title': '\u4ed3\u5e93\u7ba1\u7406\u7cfb\u7edf',
      'exp.p3.d1': '\u6784\u5efa\u7269\u6d41\u4e2d\u5fc3\u7684\u51fa\u8d27\u6307\u793a\u6279\u5904\u6d41\u7a0b\uff0c\u5f3a\u5316\u5165\u5e93/\u51fa\u5e93\u7ba1\u7406',
      'exp.p3.d2': '\u521b\u5efa\u6587\u4ef6\u81ea\u52a8\u62bd\u53d6\u5de5\u5177\uff0c\u63d0\u5347\u56e2\u961f\u5de5\u4f5c\u6548\u7387',
      'exp.p3.d3': '\u7f16\u5199\u88ab\u5f00\u53d1\u56e2\u961f\u5e7f\u6cdb\u91c7\u7528\u7684\u6280\u672f\u6587\u6863',
      'exp.p4.title': '\u65c5\u884c\u4fe1\u606f\u7f51\u7ad9',
      'exp.p4.d1': '\u4e3a\u5728\u7ebf\u65c5\u884c\u5e73\u53f0\u5f00\u53d1\u65c5\u884c\u8ba1\u5212\u641c\u7d22\u3001\u9884\u8ba2\u5386\u53f2\u3001\u6536\u85cf\u529f\u80fd',
      'exp.p4.d2': '\u901a\u8fc7\u7528\u6237\u8bbf\u8c08\u548c\u9700\u6c42\u8bc4\u5ba1\u63a8\u52a8\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u5f00\u53d1',
      'exp.p5.title': '\u624b\u6301\u7ec8\u7aef\u914d\u9001\u5e94\u7528',
      'exp.p5.d1': '\u4ece\u57fa\u672c\u8bbe\u8ba1\u5230\u6d4b\u8bd5\uff0c\u8bbe\u8ba1\u5e76\u6784\u5efa\u767b\u5f55\u3001\u8f66\u8f86\u6ce8\u518c\u3001\u8def\u7ebf\u9009\u62e9\u6a21\u5757',
      'exp.p5.d2': '\u8d1f\u8d23\u9879\u76ee\u8fdb\u5ea6\u7ba1\u7406\uff0c\u5728\u7d27\u8feb\u7684\u622a\u6b62\u65e5\u671f\u5185\u6309\u65f6\u4ea4\u4ed8',
      'exp.p6.title': '\u52e4\u6020\u7ba1\u7406\u7cfb\u7edf',
      'exp.p6.d1': '\u5f00\u53d1\u6253\u5361/\u9000\u5361\u548c\u8003\u52e4\u6570\u636e\u6c47\u603b\u529f\u80fd',
      'exp.p6.d2': '\u8bbe\u8ba1\u81ea\u5b9a\u4e49Excel\u62a5\u8868\u683c\u5f0f\uff0c\u7b80\u5316HR\u5de5\u4f5c\u6d41\u7a0b',
      'exp.p7.title': '\u76f8\u673a\u63a7\u5236\u5668iOS\u5e94\u7528',
      'exp.p7.d1': '\u4fee\u590d\u5355\u53cd\u76f8\u673a\u4f34\u4fa3iOS\u5e94\u7528\u7684\u84dd\u7259\u8fde\u63a5\u548c\u8fdc\u7a0b\u5feb\u95e8\u63a7\u5236Bug',
      'exp.p7.d2': '\u5728\u591a\u79cd\u76f8\u673a\u578b\u53f7\u4e0a\u8fdb\u884c\u517c\u5bb9\u6027\u6d4b\u8bd5',
      'exp.p8.title': '\u519c\u4e1a\u652f\u6301\u7cfb\u7edf',
      'exp.p8.d1': '\u6784\u5efa\u519c\u6237\u7ba1\u7406\u4eea\u8868\u76d8\u548c\u4f5c\u7269\u4ea7\u91cf\u8ddf\u8e2a\u529f\u80fd',
      'exp.p8.d2': '\u4e3b\u52a8\u53d1\u73b0\u5e76\u89e3\u51b3\u7cfb\u7edf\u7f3a\u9677\uff0c\u63d0\u5347\u9879\u76ee\u6574\u4f53\u8d28\u91cf',
      // Projects
      'projects.title': '\u9879\u76ee',
      'projects.all': '\u5168\u90e8',
      'projects.web': 'Web',
      'projects.cloud': '\u4e91',
      'projects.mobile': '\u79fb\u52a8\u7aef',
      'projects.data': '\u6570\u636e',
      'proj.1.title': 'CMS / \u4f01\u4e1a\u5b98\u7f51\u6784\u5efa\u5668',
      'proj.1.desc': '\u4f01\u4e1a\u7f51\u7ad9\u521b\u5efa\u4e0e\u7ba1\u7406\u7684CMS\u7cfb\u7edf\u30025-10\u4eba\u56e2\u961f\u654f\u6377\u5f00\u53d1\uff0c\u91c7\u7528\u73b0\u4ee3\u4e91\u539f\u751f\u6280\u672f\u6808\u3002',
      'proj.2.title': '\u7535\u5546\u5e73\u53f0',
      'proj.2.desc': '\u5927\u578b\u5728\u7ebf\u96f6\u552e\u5e73\u53f0\uff0c\u5305\u542b\u5546\u54c1\u76ee\u5f55\u3001\u8ba2\u5355\u7ba1\u7406\u3001\u591a\u6e20\u9053\u5e02\u573a\u96c6\u6210\u3002\u901a\u8fc7\u7f13\u5b58\u548cSQL\u4f18\u5316\u663e\u8457\u63d0\u5347\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002',
      'proj.3.title': '\u4ed3\u5e93\u7ba1\u7406\u7cfb\u7edf',
      'proj.3.desc': '\u7269\u6d41\u4e2d\u5fc3\u7684\u5165\u5e93\u3001\u5b58\u50a8\u3001\u51fa\u8d27\u7ba1\u7406\u7cfb\u7edf\u3002\u521b\u5efa\u81ea\u52a8\u5316\u5de5\u5177\u63d0\u5347\u56e2\u961f\u751f\u4ea7\u529b\u3002',
      'proj.4.title': '\u65c5\u884c\u9884\u8ba2\u5e73\u53f0',
      'proj.4.desc': '\u5728\u7ebf\u65c5\u884c\u4fe1\u606f\u7f51\u7ad9\uff0c\u63d0\u4f9b\u8ba1\u5212\u641c\u7d22\u3001\u9152\u5e97/\u673a\u7968\u9884\u8ba2\u3001\u5386\u53f2\u8bb0\u5f55\u3001\u6536\u85cf\u529f\u80fd\u3002\u901a\u8fc7\u7528\u6237\u8c03\u7814\u4f18\u5316UX\u3002',
      'proj.5.title': '\u914d\u9001\u7ec8\u7aef\u5e94\u7528',
      'proj.5.desc': '\u914d\u9001\u7269\u6d41\u79fb\u52a8\u624b\u6301\u7ec8\u7aef\u5e94\u7528\u3002\u4ece\u96f6\u8bbe\u8ba1\u8f66\u8f86\u6ce8\u518c\u548c\u8def\u7ebf\u9009\u62e9\u6d41\u7a0b\u3002',
      'proj.6.title': '\u76f8\u673a\u63a7\u5236\u5668iOS\u5e94\u7528',
      'proj.6.desc': '\u901a\u8fc7\u84dd\u7259\u8fdc\u7a0b\u63a7\u5236\u5355\u53cd\u76f8\u673a\u7684iOS\u5e94\u7528\u3002\u4fee\u590d\u5173\u952e\u8fde\u63a5Bug\uff0c\u8fdb\u884c\u8de8\u8bbe\u5907\u517c\u5bb9\u6027\u6d4b\u8bd5\u3002',
      'proj.7.title': '\u519c\u4e1a\u652f\u6301\u7cfb\u7edf',
      'proj.7.desc': '\u5177\u5907\u4f5c\u7269\u4ea7\u91cf\u8ddf\u8e2a\u548c\u519c\u6237\u7ba1\u7406\u4eea\u8868\u76d8\u7684\u519c\u4e1a\u6307\u5bfc\u7cfb\u7edf\uff0c\u652f\u6301\u519c\u4e1a\u751f\u4ea7\u529b\u63d0\u5347\u3002',
      // Education
      'edu.title': '\u6559\u80b2\u80cc\u666f',
      'edu.degree1': '\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b \u7855\u58eb',
      'edu.school1': '\u91d1\u6cfd\u5927\u5b66\uff0c\u65e5\u672c',
      'edu.detail1': '\u7814\u7a76\u65b9\u5411\uff1a\u57fa\u4e8eDNN\u7684\u8bed\u97f3\u7247\u6bb5\u8bed\u8a00\u8bc6\u522b\u3002JLPT N1\u9605\u8bfb\u7406\u89e3\u6ee1\u5206\u3002',
      'edu.degree2': '\u8ba1\u7b97\u673a\u79d1\u5b66 \u5b66\u58eb',
      'edu.school2': '\u5927\u8fde\u4ea4\u901a\u5927\u5b66\uff0c\u4e2d\u56fd',
      'edu.detail2': '\u4e3b\u4fee\u8f6f\u4ef6\u5de5\u7a0b\u3001C\u8bed\u8a00\u7a0b\u5e8f\u8bbe\u8ba1\u3001\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5\u3002\u8f85\u4fee\u65e5\u8bed\u3002',
      // Certifications
      'certs.title': '\u8bc1\u4e66',
      'certs.c1.name': '\u4fe1\u606f\u5b89\u5168\u7ba1\u7406',
      'certs.c1.issuer': 'IPA \u65e5\u672c\u56fd\u5bb6\u8003\u8bd5',
      'certs.c2.name': 'JLPT N1\uff08\u65e5\u672c\u8bed\u80fd\u529b\u8003\u8bd5\uff09',
      'certs.c2.issuer': '\u5206\u6570\uff1a139\u5206',
      'certs.c3.issuer': '\u5206\u6570\uff1a650',
      // Gallery
      'gallery.title': '\u751f\u6d3b\u76f8\u518c',
      'gallery.intro': '\u4ee3\u7801\u4e4b\u5916\u7684\u6211\u3002',
      // Contact
      'contact.title': '\u8054\u7cfb\u65b9\u5f0f',
      'contact.intro': '\u6211\u76ee\u524d\u6b63\u5728\u5bfb\u627e\u65b0\u7684\u673a\u4f1a\u3002\u65e0\u8bba\u60a8\u6709\u4efb\u4f55\u95ee\u9898\u6216\u53ea\u662f\u60f3\u6253\u4e2a\u62db\u547c\uff0c\u8bf7\u968f\u65f6\u8054\u7cfb\u6211\u3002',
      'contact.btn': '\u8054\u7cfb\u6211',
      // Footer
      'footer.copyright': '\u00a9 2025 \u9093\u541b\u9633. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002',
      'footer.updated': '\u6700\u540e\u66f4\u65b0: {{LAST_UPDATED_DATE}}'
    }
  };

  // Language cycle order and display labels
  var langOrder = ['en', 'ja', 'zh'];
  var langLabels = { en: 'EN', ja: '\u65e5', zh: '\u4e2d' };
  var langCodes = { en: 'en', ja: 'ja', zh: 'zh-CN' };

  // ===========================
  // LANGUAGE TOGGLE
  // ===========================
  function initLanguage() {
    var stored = localStorage.getItem('lang');
    var initial = stored && i18n[stored] ? stored : 'en';
    setLanguage(initial);

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang') || 'en';
        var idx = langOrder.indexOf(current);
        var next = langOrder[(idx + 1) % langOrder.length];
        setLanguage(next);
      });
    }
  }

  function setLanguage(lang) {
    var dict = i18n[lang];
    if (!dict) return;

    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', langCodes[lang] || lang);
    localStorage.setItem('lang', lang);

    // Update toggle button label
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      var label = btn.querySelector('.lang-toggle__current');
      if (label) label.textContent = langLabels[lang];
    }

    // Replace all data-i18n text
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Replace all data-i18n-html content
    var htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  }

  // ===========================
  // THEME TOGGLE
  // ===========================
  function initTheme() {
    var toggle = document.getElementById('theme-toggle');
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);

    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = theme === 'dark' ? '#0f172a' : '#ffffff';
    }
  }

  // ===========================
  // SCROLL SPY
  // ===========================
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav__link[data-nav]');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('data-nav') === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ===========================
  // HEADER SHADOW ON SCROLL
  // ===========================
  function initHeaderScroll() {
    var header = document.getElementById('header');
    if (!header) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
          } else {
            header.classList.remove('header--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===========================
  // MOBILE NAVIGATION
  // ===========================
  function initMobileNav() {
    var hamburger = document.getElementById('nav-hamburger');
    var navList = document.getElementById('nav-list');
    if (!hamburger || !navList) return;

    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navList.classList.toggle('open');
    });

    // Close on nav link click
    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      }
    });
  }

  // ===========================
  // PROJECT FILTER
  // ===========================
  function initProjectFilter() {
    var container = document.querySelector('.projects__filters');
    var cards = document.querySelectorAll('.project-card');
    if (!container || !cards.length) return;

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      container.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        var categories = card.getAttribute('data-category').split(' ');
        var show = filter === 'all' || categories.indexOf(filter) !== -1;

        if (show) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }

  // ===========================
  // GALLERY LIGHTBOX
  // ===========================
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.getElementById('lightbox-close');
    var items = document.querySelectorAll('.gallery__item[data-lightbox]');
    if (!lightbox || !lightboxImg || !items.length) return;

    items.forEach(function (item) {
      item.addEventListener('click', function () {
        var src = item.getAttribute('data-lightbox');
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ===========================
  // SCROLL REVEAL
  // ===========================
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ===========================
  // BACK-TO-TOP
  // ===========================
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 500) {
            btn.classList.add('visible');
          } else {
            btn.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===========================
  // SMOOTH SCROLL
  // ===========================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerHeight = document.getElementById('header').offsetHeight || 72;
          var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // ===========================
  // INITIALIZATION
  // ===========================
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initLanguage();
    initScrollSpy();
    initHeaderScroll();
    initMobileNav();
    initProjectFilter();
    initLightbox();
    initScrollReveal();
    initBackToTop();
    initSmoothScroll();
  });

})();
