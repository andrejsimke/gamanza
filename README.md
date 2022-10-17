#Gamanza

Plan was to create test cases, test plan and report in software called TestRail.
I created account (username and password are listed below) and provided links to follow.
- Login to Testrail: https://andrejgamanza.testrail.io
- user name: qatestgamanza1@gmail.com
- password: TestTest1.
	
2. Test Cases ([LINK](https://andrejgamanza.testrail.io/index.php?/suites/view/1&group_by=cases:section_id&group_order=asc&display_deleted_cases=0))
- there are three test cases,
- you can click on each test case to see test steps

2. Test plan
- Test Plan "2022 October - Smoke test 1" was created
- It has three test cases ([LINK](https://andrejgamanza.testrail.io/index.php?/runs/view/8&group_by=cases:section_id&group_order=asc))
- bugs for 2 out of 3 test were found
- for details you can click on test case to see which step passed/failed, and description/pictures attached.
- bug1 ([LINK](https://andrejgamanza.testrail.io/index.php?/tests/view/15&group_by=cases:section_id&group_order=asc&group_id=1))
Found bug when trying to submit a form Write us. Plan was to use valid email, temp email,  
- bug2 ([LINK](https://andrejgamanza.testrail.io/index.php?/tests/view/16&group_by=cases:section_id&group_order=asc&group_id=1))
Found bug trying to click on all links, logos on web page.

3. Testing report (LINK])

<br/><br/><br/>
#Common QA dilemmas – questionary

1. What bug reporting tools have you used in the past and what do you recommend the most and why?
- Testrail, Zephyr for Jira. Testrail has better interface, options. Easy to learn, use.
2. Are you familiar with test scenarios? Have you ever used any tool for that? How would you introduce writing test scenarios for our apps?
- Again, Testrail. Within Testrail you can create test plan, in test plan you can create test run (in this case test scenario) and decide which test cases to assign to this test run. For example:
- Test plan: Regression testing for app XYZ
- Test scenario: Register to app, Login to app, place bet, add money, chat...
- Test cases: For all test scenarios
3. How important is writing test scenarios for you? Why?
- Very important. With detailed, well written test scenarios you cover (all) end to end functionality of a software application. This means less errors for the final product which is a desired goal.
4. Assume you find a problem while testing the application, what would be your recommended approach to get that problem resolved?
- Firts gather data and analyze what caused the problem, brainstorm options to solve the problem, choose the best solution and implement a plan, monitor the results, evaluate the effectiveness of solution and make necessary adjustments.
5. You find and report a problem within the application, but the developer doesn’t believe this to be a problem and resolve the task as won't fix? How would you deal with this scenario?
- Problem should be mentioned and disscussed via proper channels to determine if needs to be resolved or not. Product owner/project manager should decide in the end. 
6. It is late in the evening. You are responsible for the GO/NO GO decision. The workflow is very strict and there are numerous tasks to be done:<br>
• Verifying bugs found in the very last stage of testing,<br>
• One round of regression testing, etc,<br>
• Conclude the testing,<br>
• Filling out the report,<br>
• Check everything is ready for release <br>
You just discovered that some part of the app doesn't feel right - UI/UX it's not catchy enough.<br>
What do you do? Why?<br>
You know if following the procedure the app won’t be released on time, but timing is everything on<br>
this release. What do you do? Why?<br><br>

Priority and severity of problem needs to be determined first. Sometimes it is hard to classify a problem. Documentation describing examples what is low/mid/high priority/severity would be beneficial.

It depends on company policy how stict they are regarding UI/UX and how you define "not catchy enough"?
If something is trivial like color of one button is slightly off that should not delay the release. Also if developer is available quick fix could be applied.
If something is major like you can not place a bet that should delay the release.

Also my suggestion for priority/severity documentation would be: <br><br>
Severity:
- Blocker: system as a whole is unusable (i.e. login doesn’t work)
- Critical: main functionalities of the app don’t work (i.e. betting)
- Major: bigger functionalities don’t work, but there are workarounds (i.e. app has two ways of betting but one of those doesn’t work), smaller, less important functionalities don’t work
- Minor: undesirable behavior, but the app is functional, user experiences inconvenience but is able to use the functionality (i.e. user get’s wrong error message during failure)
- Trivial: Trivial: little or no impact (i.e. wrong font is used on the button)

Priority:
- Highest: Hotfix
- High: Bug should be fixed as soon as possible, before the release is made
- Medium: Bug can be fixed in the normal course of development
- Low: Bug can be fixed in the future or if there is nothing more important
- Lowest: Bug may or may not be fixed.

7. Assume you are the QA lead for a new major product with a set project deadline. Briefly describe how you would go about the following:<br>
• Implementing QA process into the project<br>
• Ensuring product successfully passes QA<br>
• Making sure the project deadline is met<br>
- Figure out what are the product requirements. Good definition could/should prevent bugs instead finding/fixing them during testing.
- Plan the tests. Create scope of tests, establish deadlines.
- Create test cases (API, UX/UI, manual and/or automatic)
- Execute tests (API, UX/UI, manual and/or automatic). Report found bugs. Update test cases.
- Execute tests again to ensure reported bugs were fixed.
- Run tests after release. Perform smoke test to ensure build is stable.

8. Assume that only one area of the application has been changed, how much time do you think should be spent testing each segment of the app (new functionality, core functionality, all functionality, etc.)? Give an estimate in % for each segment and explain your decision.
- It depends if changed area of app effects other parts of the app. Developer could give more info regarding that.
- New functionality: 80 % - Most important. Needs to be thoroughly QA-ed.
- Core functionality: 15 % - Check if new functionality effects core functionalities.
- All functionality: 5 % - Smoke test for other functionalities."

9. Are you familiar with any test automation tool? Have you ever used automated testing in apps? How would you introduce automated testing to our apps?
- Postman with CLI Newman and newman-reporter-htmlextra. I made Postman collection with test scenarios for staging, production environment. Collection ran via Postman or in Postman CLI called Newman. My final implementation ran collection every morning via Github actions generating HTML report accessable via Github page.
- Similar could be done for other apps (if apps use API calls). Scenarios for e.g. roulette could be made (bet on one number, on two numbers and color green... Postman collection would include those multiple scenarios which would then be ran.
