import "./main.css";

export const headerNav = [
    {
        title: "About me",
        url: "#aboutme"
    },
    {
        title: "project",
        url: "#project"
    },

    {
        title: "contact",
        url: "#contact"
    }
];

export const aboutmeText = {
    title:["Second \n" , "To \n" , "None \n"],
    desc: ["나의 결심 : 두번째란 없다."]
}

export const skillText = [
    {
        title: "최종 학력 및 교육 과정",
        desc: (
            <div className="education">
                <div className="section">
                    <h3>전공:</h3>
                    <b>융합소프트웨어</b>
                </div>
                <hr />
                <div className="section">
                    <h3>학력:</h3>
                    <b>평택대학교</b> 2018.03 ~ 2023.02 (졸업) <br />
                    <b>의정부 공업 고등학교</b> 스마트전자과 2015.03 ~ 2018.2 (졸업) <br />
                </div>
                <hr />
                <div className="section">
                    <h3>교육 과정:</h3>
                    <b>(기업수요)Open API를 활용한 Java기반 풀스택 개발자 양성 과정</b> <br />
                    2023.04 ~ 2023.10
                </div>
                <hr />
                <div className="section">
                    <h3>기술 스택:</h3>
                    <div className="subsection">
                        <h4>Front End</h4>
                        <b>HTML5 &ensp; CSS3 &ensp; JAVASCRIPT &ensp; REACT</b><br />
                    </div>
                    <div className="subsection">
                        <h4>Back End</h4>
                        <b>JAVA &ensp; SPRINGBOOT &ensp; MARIADB &ensp; MYSQL &ensp;</b>
                    </div>
                    <div className="subsection">
                        <h4>Tool</h4>
                        <b>IntelliJ IDEA &ensp; VSCODE &ensp; Postman &ensp; GITHUB &ensp;</b>
                    </div>
                </div>
                <hr />
            </div>
        ),
    },
    // 다른 skillText 항목들...

    {
        title: "성장 과정.",
        desc: "공동의 목표를 향해 협력하는 모습은 저에게 큰 영감을 주었습니다. " +
            "주어진 역할에서 팀원들과 협력하여 프로젝트 목표를 달성하였고, " +
            "이러한 경험은 저에게 개발자의 꿈과, 동기 부여와 새로운 도전에 대한 열정을 높여주었습니다." +
            "성장 경험을 토대로, 더 나은 개발자 성장하기 위해 끈임없이 노력하고 있습니다."
    },
    {
        title: "성격 소개. ",
        desc: "끈기 있게 문제를 분석하고, 최선의 방법을 생각하는 것은 저의 장점입니다." +
            " 또한, 열정과 성실함을 바탕으로 소통을 중요하게 생각합니다. 프로젝트 매니저(PM)을 담당하며," +
            " 버그 발견 및 수정 과정에서 이러한 장점이 큰 도움이 되었습니다." +
            "  프로젝트 진행 중 및 종료 후에는 문제점을 분석하고," +
            " 팀원에게 피드백을 수용하는 등의 노력을 통해 앞으로도 성장해 나갈 것입니다."
    },
    {
        title: "직무 능력.",
        desc: "국비지원 개발자 양성 학원에서 웹 개발 분야를 전공하여," +
            " 설계 및 관리 등 개발에 필요한 다양한 지식을 습득하고, 효율적인 개발 방법을 터득했습니다." +
            " 또한, 프로젝트 진행 중 발생하는 다양한 문제들을 신속하게 해결하며, 문제 해결 역량을 넓혀 나갔습니다."
    },
    {
        title: "개발자를 꿈꾸는 사람의 포부",
        desc : "저는 개발자로서의 꿈을 이루기 위해 끊임없이 노력하고 있습니다. " +
            "학습 경험과 프로젝트 수행을 통해 개발에 대한 기본적인 지식과 역량을 쌓았으며," +
            " 앞으로도 다양한 경험을 통해 성장해 나갈 것입니다." +
            " 지원한 직무에서는 기술적인 역량을 활용하여 문제를 해결하고, 협력을 통해 프로젝트를 성공적으로 이끌어 나가고자 합니다."
    }
    ]
export const projectText = [
    {
        text: ["App", "Project" , "Android Studio", "Turtle neck helper"],
        title : "Stretching methods, alarms, and camera functions are provided for users suffering from turtle neck syndrome.",
        ppt : "https://docs.google.com/presentation/d/1eZJ1qnUlTbu1f5xGFqDTDUZ-UHUMW2hqLzEYb30EN_g/edit?usp=sharing",
        position : " Team Member",
        charge : "유사 프로젝트 분석과 차별성 아이디어 제안 , Open Source 분석 및 카메라 각도 측정 담당 ",
        info : [
            "Used Kotlin " ,
            "production period : 2022.03.02 ~ 2022.06.23",
            "use stack : kotlin, Pigma , AdobeXD",
            "tool: Android Studio",
        ]
    }
,
    {
        text: ["Java", "Project", "Chatting Program" , "GaebalTalk"],
        title: "Chatting Program using Java GUI",
        code: "https://github.com/sharknell/ChattingPrograme",
        view: "https://drive.google.com/file/d/1xkDT8X6w7IS5_tzt1nEA5ol-lvimJ9za/view",
        ppt : "https://docs.google.com/presentation/d/13BepA_d7lHwMD-8gbg_K65ro6FtMsWjkcf3Hipvt10c/edit?usp=sharing",
        position: " PM(Project Manager)",
        charge :"Notion 을 활용한 일정 관리 및 회의, Weather API(날씨 API) 활용 및 형상 관리",
        info: [
            "Increased Java Language Competency",
            "production period : 2023.07.23 - 2023.08.01",
            "use stack : Java 1.8 , Used Java GUI(Swing)",
            "tool : IntelliJ(Me), Eclipse(Team Members), GitHub(형상 관리)",
        ],
    },

    {
        text: ["Web", "Project", "Online Shopping Mall"],
        title: "Web Project with Springboot",
        code: "https://github.com/sharknell/Website",
        ppt : "https://docs.google.com/presentation/d/105c6f35L9HGQR4yqfremxD_ftdtlu4NleHikqzCSpGM/edit?usp=sharing",
        position:" PM(Project Manager)",
        charge: "웹 개발 기획 , Thymeleaf 을 사용한 상품들 View 로 구현 ,Cart(장바구니)",
        info: [
            "Understanding Spring Boot structure and capabilities",
            "production period : 2023.09.08 - 2023.10.05",
            "use stack : HTML5/CSS3, SpringBoot",
            "tool : IntelliJ(Me), Eclipse(Team Members)"
        ],
    },
    {
        text: ["Web" , "Portfolio" , "My Profile"],
        title: "My Portfolio with React",
        position: " Personal Project",
        charge: "WebStroy Template Used And Change My Portfolio",
        info: [
            "About Me",
            "production period : One Week",
            "use stack : REACT",
            "tool : IntelliJ , Visual Studio Code(VScode)"
        ],
    },
];
export const contactText = [
    {
        link: "https://open.kakao.com/o/sk0HA4Lf",
        title: "KAKAO : Open Chatting ",
    },
    {
        link: "Mail Adress : bcspeirs@icloud.com ",
        title: "mail : bcspeirs@icloud.com"
    }
];

export const footerText = [
    {
        title: "github",
        desc: "Go Github",
        link: "https://github.com/sharknell"
    },
    {
        title: "instagram",
        desc: "작성자의 인스타그램",
        link: "https://www.instagram.com/c.speirs_99/"
    },
    {
        title: "facebook",
        desc: "작성자의 페이스북",
        link: "https://www.facebook.com/profile.php?id=100030984726580&mibextid=LQQJ4d"
    }
];
