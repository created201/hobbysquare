class __Data__ {
    static getCategories() {
        const categories = ["music", "arts", "sports", "cooking", "games"]
        return categories
    }

    static getSkillLevels() {
        const skillLevels = ["beginner", "intermediate", "advanced"]
        return skillLevels
    }

    static getPlaceholderImage() {
        return "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
    }

    static getMockFeeds() {
        const mockFeeds = [
            {
                _id: "Jin",
                data: {
                    title: "I want to meet Mr. Butner",
                    description:
                        "I love Mr.Butner. He teaches ECS50, ECS154A, and ECS32B. It is Easy A+ for us.",
                    when: "22 May 2023",
                    where: "Memorial Union",
                    what: "Study Assembly",
                    skillLevel: "intermediate",
                    category: "games",
                },
            },
            {
                _id: "Hanuel",
                data: {
                    title: "Le Sserafim Hello",
                    description:
                        "I love Le Sserafim Hello. They teach us ML/AI and Machine Machine Learning",
                    when: "1 Feb 2024",
                    where: "Shields Library",
                    what: "Listen to their music",
                    skillLevel: "intermediate",
                    category: "music",
                },
            },
            {
                _id: "Jaehong",
                data: {
                    title: "Shell Scripting with Eating Cookies",
                    description:
                        "I would like to make shell scriting languages using cookies and assembly and water",
                    when: "Every Monday",
                    where: "My Home",
                    what: "Play Soccer",
                    skillLevel: "advanced",
                    category: "sports",
                },
            },
        ]
        return mockFeeds
    }
}

export { __Data__ }
