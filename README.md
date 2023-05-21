# HobbySquare

We are happy to introduct our beloved product <strong>HobbySquare</strong> that enables users to interact with one another in order to find the perfect hobby mate, Whether it is sports, music, games, and more, our application

## 🚀 Inspiration

One of our developers is an avid golfer. He always wanted a friend who golfed at his skill level but he had trouble finding someone who could golf with him. We recognized a gap in social networking where people, despite having shared interests, often struggled to connect on a deeper, skill-specific level. We were driven by the potential of a platform that could not only connect hobbyists but also help them grow together. That's how HobbySquare was conceived.

## 🎾 What it does

HobbySquare is a novel responsive web application designed to bring together individuals with similar hobbies at comparable skill levels. Users create profiles detailing their interests and skill level, then HobbySquare does the rest, conveniently matching users for interaction, collaboration, and skill-building. From music and arts to outdoor activities and cooking, HobbySquare accommodates a wide variations of hobbies.

## 🔨 How we built it

We developed HobbySquare using a robust back-end built on Next.js and MongoDB, which allows for dynamic matching and user profile management. The front end utilizes React to ensure a seamless, engaging experience across different platforms.

## ⛰️ Challenges we ran into

One of our biggest challenges was developing an algorithm that accurately matches users based on their hobbies and skill level. This task was particularly difficult given the diversity and variability of hobbies, as well as the subjectivity of skill levels. Designing a scalable and user-friendly UI was also a significant task since we needed to accommodate a wide array of hobbies without overwhelming our users.

## 👊 Accomplishments that we're proud of

We successfully developed a user-friendly website that connects hobbyists seamlessly. We are also very proud of how nice our web app looks given that the website was developed in 24 hours.

## ✏️ What we learned

This journey has taught us a lot about the importance of user profiling and the complexities of creating an effective matching algorithm, particularly when dealing with such a diverse range of hobbies. We also learned about the intricacies of designing a user-friendly and scalable interface that can cater to a broad range of user interests.

## ✈️ What's next for HobbySquare

In the future, we plan to incorporate a feature that enables users to create and join local hobbyist events, promoting even more real-world interactions. When we gain more traffic on our site, we're also considering using machine learning on user interests and skill level analysis to ensure accurate matching and suggest our users try on a new hobby and make new friends in the community. Lastly, we're exploring partnerships with hobby-related businesses to offer users access to tools, resources, or classes related to their interests. This would be a win-win situation as businesses get to promote their products effectively and our users get to experience their goods and services at lower prices or even for free.

---

### Application Architecture & Details

This applition uses <strong><a>NextJS</a></strong> as a full-stack framework coped with front-end UI toolkits such as <strong><a>TailwindCSS</a></strong>. The back-end uses MongoDB cluster as its databases for both <strong>Users</strong> and <strong>Posts</strong> documents.

#### How Users Are Handled

On the client the user session is created using the OAuth tool-kit <strong><a>Next-Auth</a></strong>, which triggers creation of a user document to the database upon their first login stage.

For manipulating data stored in a given user can be handled both from the front-end and back-end. To view the source code, please refer to the codebase from `./libs` directory.

#### How Posts Are Handled

Similar to the user's handlers, posts can be manipulated using its own handlers that can be triggered from both the front-end and back-end.

When it comes to a user showing interest to a given post, we are integrating the package <strong><a>NodeMailer</a></strong> to send a friendly email to the post author's email from the `api` route.

#### How UI Components Are Handled

All the React components are in the `./components` directory and readily distributed to the destination folders that correspond to the page that it is imported to. This way to managing components help us structure reusable design system and easily manipulatable with only having to fix the necessary parts of the component when needed.

#### How Helpers Are Handlded

There are various helper methods and static mockup datasets in different purposes. For the detailed methods implemented, please refer to `./helpers` directory.

#### Diagrams

For any application-related architecture contents, you can view the diagrams below to better understand our entire application flow.
