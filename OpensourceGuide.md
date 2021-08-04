# Opensource Guide
Reference: [opensource.guide](https://opensource.guide)

* You don’t have to contribute code
> Planning, Design, Write, Organizing, Code, Helping people, Not only software projects

# Anatomy of an open source project
## People
* **Author**: The person/s or organization that `created the project`
* **Owner**: The person/s who has `administrative ownership` over the organization or repository (not always the same as the original author)
* **Maintainers**: Contributors who are responsible for driving the vision and managing the organizational aspects of the project. `(enforcer of the code of conduct)`
	>  Establish the guidelines for your community and enforce those guidelines according to the rules set forth in your code of conduct
* **Contributors**: Everyone who has contributed something back to the project
* **Community Members**: People who use the project. They might be active in conversations or express their opinion on the project’s direction
## Documentations
* **LICENSE**: By definition, every open source project must have an open source license. If the project does not have a license, it is not open source.
* **README**: The README is the instruction manual that welcomes new community members to the project. It explains why the project is useful and how to get started.
> * What does this project do?
> * Why is this project useful?
> * How do I get started?
> * Where can I get more help, if I need it?
> * FAQ
* **CONTRIBUTING**: Whereas READMEs help people use the project, contributing docs help people contribute to the project. It explains what types of contributions are needed and how the process works. While not every project has a * CONTRIBUTING file, its presence signals that this is a welcoming project to contribute to.
> * How to file a bug report (try using issue and pull request templates)
> * How to suggest a new feature
> * How to set up your environment and run tests
> * Your roadmap or vision for the project
> * How contributors should (or should not) get in touch with you
* **CODE_OF_CONDUCT**: The code of conduct sets ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. While not every project has a CODE_OF_CONDUCT file, its presence signals that * this is a welcoming project to contribute to.
https://dotnetfoundation.org/about/code-of-conduct
* **Other documentation**: There might be additional documentation, such as tutorials, walkthroughs, or governance policies, especially on bigger projects.
## Tools to organize discussion
* **Issue tracker**: Where people discuss issues related to the project.
* **Pull requests**: Where people discuss and review changes that are in progress.
* **Discussion forums or mailing lists**: Some projects may use these channels for conversational topics (for example, “How do I…“ or “What do you think about…“ instead of bug reports or feature requests). Others use the issue tracker * for all conversations.
* **Synchronous** chat channel: Some projects use chat channels (such as Slack or IRC) for casual conversation, collaboration, and quick exchanges.
> https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels

# How to submit a contribution
* **Give context**: If you’re running into an error, explain what you’re trying to do and how to reproduce it. If you’re suggesting a new idea, explain why you think it’d be useful to the project (not just to you!).
```
😇 “X doesn’t happen when I do Y”
😢 “X is broken! Please fix it.”
```
* **Do your homework beforehand**: Before asking for help, be sure to check a project’s README, documentation, issues (open or closed), mailing list, and search the internet for an answer
```
😇 “I’m not sure how to implement X. I checked the help docs and didn’t find any mentions.”
😢 “How do I X?”
```
* **Keep requests short and direct**: Much like sending an email, every contribution, no matter how simple or helpful, requires someone else’s review
```
😇 “I’d like to write an API tutorial.”
😢 “I was driving down the highway the other day and stopped for gas, and then I had this amazing idea for something we should be doing, but before I explain that, let me show you…“
```
* **Keep all communication public**: don’t reach out to maintainers privately unless you need to share sensitive information (such as a security issue or serious conduct violation). When you keep the conversation public, more people can learn and benefit from your exchange. Discussions can be, in themselves, contributions.
```
😇 (as a comment) “@-maintainer Hi there! How should we proceed on this PR?”
😢 (as an email) “Hey there, sorry to bother you over email, but I was wondering if you’ve had a chance to review my PR”
```

# Your Code of Conduct
```
Facilitate healthy and constructive community behavior by adopting and enforcing a code of conduct.
```
* What happens if someone violates the code of conduct
	* Give the person in question a public warning
	* Privately reach out to the person
	* Suspend the person
	* Permanently ban
* How someone can report violations
> [Contributor Covenant](https://www.contributor-covenant.org)
> [Django](https://www.djangoproject.com/conduct)
> [Citizen](https://web.archive.org/web/20200330154000/http://citizencodeofconduct.org)

# Leadership and Governance
Common governance structures for open source projects
* **BDFL**: BDFL stands for “Benevolent Dictator for Life”. Under this structure, one person (usually the initial author of the project) has final say on all major project decisions.
(http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* **Meritocracy**: Under a meritocracy, active project contributors (those who demonstrate “merit”) are given a formal decision making role. Decisions are usually made based on pure voting consensus.
(http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
> Note: the term “meritocracy” carries negative connotations for some communities and has a complex social and political history.
* **Liberal contribution**: Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions.
(https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)


# Best Practices for Maintainers
* Documenting your processes
* Share the workload
* Let others build the solutions they need
* Bring in the robots
> Require tests and other checks to improve the quality of your code (Required status checks)
> Use tools to automate basic maintenance tasks
>> **Semantic-release** automates your releases  
>> **Mention-bot** mentions potential reviewers for pull requests  
>> **Danger** helps automate code review  
>> **No-response** closes issues where the author hasn’t responded to a request for more information  
>> **Dependabot-preview** checks your dependency files every day for outdated requirements and opens individual pull requests for any it finds

# The Legal Side of Open Source
* [License](https://choosealicense.com)
* What does my company’s legal team need to know?
