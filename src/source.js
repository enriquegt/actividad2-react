const feed = [
    {
        profile: "AJ + Español",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "ajplusespanol",
        content: `Laika fue elegida para viajar al espacio sabiendo que no resistiría.
        ¿Son éticas nuestras maneras de hacer ciencia? 
        Queremos saber qué opinas.
        `,
        img: "https://pbs.twimg.com/profile_images/1199022496521080832/tBx9LPh8_400x400.png",
        interaction: {
            comments: 5,
            retweets: 66,
            likes: 126
        },
        verified: false,
        blocked: false
    },
    {
        profile: "Elon Musk",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "elonmusk",
        content: `Several thousand more Starlink beta participation invitations going out this week.
        `,
        img: "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg",
        interaction: {
            comments: 6700,
            retweets: 3700,
            likes: 84000
        },
        verified: true,
        blocked: false
    },
    {
        profile: "Google",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "google",
        content: `20 years ago today the first crew of astronauts and researchers arrived at the International Space Station, forever changing how we explore space. Cohete Celebrate #SpaceStation20th with @NASA
        & @GoogleArts by exploring a 3D model of the`,
        img: "https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg",
        interaction: {
            comments: 26,
            retweets: 100,
            likes: 693
        },
        verified: true,
        blocked: false
    },
    {
        profile: "LeBron James",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "KingJames",
        content: `Y’all see the setup right???!!!`,
        img: "https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg",
        interaction: {
            comments: 17600,
            retweets: 1300,
            likes: 78800
        },
        verified: true,
        blocked: false
    },
    {
        profile: "BBC Breaking News",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "BBCBreaking",
        content: `Prince William contracted Covid-19 in April at a similar time to his father Prince Charles, palace sources tell BBC
        `,
        img: "https://pbs.twimg.com/profile_images/1001752869517910016/Xq8-sAa4_400x400.jpg",
        interaction: {
            comments: 1300,
            retweets: 2200,
            likes: 4200
        },
        verified: true,
        blocked: false
    },
    {
        profile: "NVIDIA GeForce",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "NVIDIAGeForce",
        content: `Hitch a ride on the RTX Battle Bus!
        Experience Fortnite in a new light with NVIDIA ray traced shadows, global illumination and ambient occlusion. 
        Learn more about RTX, DLSS, and NVIDIA Reflex in Fortnite: https://nvidia.com/en-us/geforce/campaigns/play-fortnite-with-rtx/`,
        img: "https://pbs.twimg.com/profile_images/1301059967378771968/d6hDFA-r_400x400.jpg",
        interaction: {
            comments: 56,
            retweets: 34,
            likes: 524
        },
        verified: true,
        blocked: false
    },
    {
        profile: "National Geographic",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "NatGeo",
        content: `What's the most soothing experience you've had in nature? (Bonus points if you have a photo or video)`,
        img: "https://pbs.twimg.com/profile_images/1277658125479403520/AOFAWNvv_400x400.jpg",
        interaction: {
            comments: 128,
            retweets: 76,
            likes: 434
        },
        verified: true,
        blocked: false
    },
    {
        profile: "Hipertextual",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "Hipertextual",
        content: `Cinco recomendaciones, y una sorpresa, para ver en Netflix en noviembre`,
        img: "https://pbs.twimg.com/profile_images/1280427548653092864/X9bC3ZMZ_400x400.jpg",
        interaction: {
            comments: 0,
            retweets: 1,
            likes: 4
        },
        verified: true,
        blocked: false
    },
    {
        profile: "Hipertextual",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "Hipertextual",
        content: `Cinco recomendaciones, y una sorpresa, para ver en Netflix en noviembre`,
        img: "https://pbs.twimg.com/profile_images/1280427548653092864/X9bC3ZMZ_400x400.jpg",
        interaction: {
            comments: 0,
            retweets: 1,
            likes: 4
        },
        verified: true,
        blocked: false
    },{
        profile: "Real Madrid C.F.",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "realmadrid",
        content: `¡El capitán, @SergioRamos, alcanza la cifra de 1️⃣0️⃣0️⃣ goles con la camiseta del 
        @RealMadrid! #RealFootball | #HalaMadrid`,
        img: "https://pbs.twimg.com/profile_images/1284197749030887429/7n6w-Urk_400x400.jpg",
        interaction: {
            comments: 210,
            retweets: 3700,
            likes: 14900
        },
        verified: true,
        blocked: false
    },
    {
        profile: "UEFA Champions League",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "ChampionsLeague",
        content: `Bayern have won their last 13 Champions League games... #UCL`,
        img: "https://pbs.twimg.com/profile_images/1073607078109949957/74oimLX4_400x400.jpg",
        interaction: {
            comments: 19,
            retweets: 54,
            likes: 818
        },
        verified: true,
        blocked: false
    },
    {
        profile: "FC Barcelona",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "FCBarcelona_es",
        content: `¡La 
        @LigadeCampeones no se detiene!
        Preparados para una nueva noche europea. 
        Este miércoles, #BarçaDynamo`,
        img:"https://pbs.twimg.com/profile_images/1291131598218366976/wS2bgD6O_400x400.jpg",
        interaction: {
            comments: 6,
            retweets: 30,
            likes: 723
        },
        verified: true,
        blocked: true
    },
    {
        profile: "Youtube",
        profileUrl: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
        username: "Youtube",
        content: `Drop links to the videos that are helping you right now`,
        img: "https://pbs.twimg.com/profile_images/1308106203860529152/yOwTDF9G_400x400.jpg",
        interaction: {
            comments: 4900,
            retweets: 878,
            likes: 11300
        },
        verified: true,
        blocked: true
    }
];

export {
    feed
}