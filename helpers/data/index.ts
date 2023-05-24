class __Data__ {
    static getCategories() {
        const categories = [
            "music",
            "arts",
            "sports",
            "cooking",
            "games",
            "trips",
        ]
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
                _id: "1",
                data: {
                    title: "I am looking for a tennis partner!",
                    description: "I have been playing tennis for three years.",
                    when: "22 May 2023",
                    where: "MU Tennis Court",
                    what: "Tennis",
                    skillLevel: "intermediate",
                    category: "sports",
                },
            },
            {
                _id: "2",
                data: {
                    title: "Le Sserafim Cover Dance",
                    description: "I wanna learn Le Sserafim's dances.",
                    when: "1 Feb 2024",
                    where: "Arc Studio",
                    what: "Cover Dance",
                    skillLevel: "beginner",
                    category: "music",
                },
            },
            {
                _id: "3",
                data: {
                    title: "Cooking Korean Style Dinner",
                    description:
                        "I really want to cook Korean dishes for dinner.",
                    when: "Every Saturday",
                    where: "My Place",
                    what: "Cooking Food",
                    skillLevel: "intermediate",
                    category: "cooking",
                },
            },
            {
                _id: "4",
                data: {
                    title: "Pencil Portrait Drawing Session",
                    description:
                        "I want to find an art student to draw each other's portraits with pencil.",
                    when: "Sun, May 25th",
                    where: "My Place",
                    what: "Drawing",
                    skillLevel: "advanced",
                    category: "arts",
                },
            },
        ]
        return mockFeeds
    }
}

export { __Data__ }
