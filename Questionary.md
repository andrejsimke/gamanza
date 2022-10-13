1. What bug reporting tools have you used in the past and what do you recommend the most and why?
- Testrail, Zephyr for Jira. Testrail has better interface, options. Easy to learn, use.

2. Are you familiar with test scenarios? Have you ever used any tool for that? How would you introduce writing test scenarios for our apps?
- Testrail. Depending on the game. E.g. roulette.

3. How important is writing test scenarios for you? Why?
- Very important. With detailed, well written test scenarios you cover (all) end to end functionality of a software application. This means less errors for the final product which is a desired goal.

4. Assume you find a problem while testing the application, what would be your recommended approach to get that problem resolved?
- Gather data and analyze what caused the problem,
- Brainstorm options to solve the problem,
- Choose the best solution and implement a plan,
- Monitor the results,
- Evaluate the effectiveness of your solution and make necessary adjustments.

5. You find and report a problem within the application, but the developer doesn’t believe this to be a problem and resolve the task as won't fix? How would you deal with this scenario?
- Problem should be mentioned and disscussed via proper channels to determine if needs to be resolved or not. Product owner/project manager should decide in the end. 

6. It is late in the evening. You are responsible for the GO/NO GO decision. The workflow is very strict and there are numerous tasks to be done:
  Verifying bugs found in the very last stage of testing, One round of regression testing, etc. Conclude the testing, Filling out the report, Check everything is ready for release.

- You just discovered that some part of the app doesn't feel right - UI/UX it's not catchy enough.
What do you do? Why?
- You know if following the procedure the app won’t be released on time, but timing is everything on
this release. What do you do? Why?

- Priority and severity of problem need to be determined first. Sometimes it is hard to classify a problem. Documentation describing examples what is low/mid/high priority/severity would be beneficial.
- It depends on company policy how stict they are regarding UI/UX and how you define "not catchy enough"?
- If something is trivial like color of one button is slightly off that should not delay the release. Also if developer is available quick fix could be applied.
- If something is major like you can not place a bet that should delay the release.

Severity
- Blocker: system as a whole is unusable (i.e. login doesn’t work)
- Critical: main functionalities of the app don’t work (i.e. betting)
- Major: bigger functionalities don’t work, but there are workarounds (i.e. app has two ways of betting but one of those doesn’t work), smaller, less important functionalities don’t work
- Minor: undesirable behavior, but the app is functional, user experiences inconvenience but is able to use the functionality (i.e. user get’s wrong error message during failure)
- Trivial: Trivial: little or no impact (i.e. wrong font is used on the button)

Priority
- Highest: Hotfix. 
- High: Bug should be fixed as soon as possible, before the release is made. 
- Medium: Bug can be fixed in the normal course of development. 
- Low: Bug can be fixed in the future or if there is nothing more important. 
- Lowest: Bug may or may not be fixed.

7. Assume you are the QA lead for a new major product with a set project deadline. Briefly describe how you would go about the following:
Implementing QA process into the project, Ensuring product successfully passes QA, Making sure the project deadline is met.

- Figure out what are the product requirements. Good definition could/should prevent bugs instead finding/fixing them during testing.
- Plan the tests. Create scope of tests, establish deadlines.
- Create test cases (API, UX/UI, manual or automatic)
- Execute tests (API, UX/UI, manual or automatic). Report found bugs. Update test cases
- Execute tests again to ensure reported bugs were fixed.
- Run tests after release. Perform smoke test to ensure build is stable.

8. Assume that only one area of the application has been changed, how much time do you think should be spent testing each segment of the app (new functionality, core functionality, all functionality, etc.)? Give an estimate in % for each segment and explain your decision.

- It depends if changed area of app effects other parts of the app. Developer could give more info regarding that.
- New functionality: 80 % - Most important. Needs to be thoroughly QA-ed.
- Core functionality: 15 % - Check if new functionality effects core functionalities.
- All functionality: 5 % - Smoke test for other functionalities.

9. Are you familiar with any test automation tool? Have you ever used automated testing in apps? How would you introduce automated testing to our apps?

- I made Postman collection with test scenarios for staging, production environment. Collection are run via Postman or in Postman CLI called Newman. My final implementation ran collection every morning via Github actions generating HTML report accessable via Github page.
Similar could be done for other apps. Scenarios for e.g. roulette could be made. Bet on one number, on two numbers and color green... Collection would include those multiple scenarios which would then be ran."
