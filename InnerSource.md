# InnerSource
## Proprietary software or Closed source software
Some software has source code that only the person, team, or organization who created it—and maintains exclusive control over it—can modify. People call this kind of software "proprietary" or "closed source" software.

## Open source software
```
Open source software is software with source code that anyone can inspect, modify, and enhance.
```
By design, open source software licenses promote collaboration and sharing because they permit other people to make modifications to source code and incorporate those changes into their own projects. They encourage computer programmers to access, view, and modify open source software whenever they like, as long as they let others do the same when they share their work.

## What is InnerSource?
```
The use of open source principles and practices for software development within the confines of an organization.
```
For companies building mostly closed source software, InnerSource can be a great tool to help break down silos, encourage and scale internal collaboration, accelerate new engineer on-boarding, and identify opportunities to contribute software back to the open source world.


## What InnerSource Is and Isn't
### We Have GitHub Enterprise, So We Must Be InnerSource!
```
InnerSource Is About Culture and Processes, Not Just Tools
```

The Big Cheese Story
* code had been developed in silos
* teams had undocumented styles, structures, and practices that outsiders couldn’t know about until they submitted code
* there was a siloed culture that encouraged people to talk only to people in their own group and to use language that outsiders couldn’t understand
It turned GitHub into a bottleneck
The code that the most people needed access to became the most difficult to contribute to.

Contributors were often inspired to write pull requests for the changes they needed in other codebases. But the codebase hosts were not accepting their pull requests, mainly because it meant extra work and responsibility for them.

cultural problems
bottlenecks

## The Most Important Role, and the First Step: Trusted Committer (TC)

External teams must learn and conform to the style and standards of the codebase to which they are contributing

developers are often unwilling to dedicate time to reviewing and accepting pull requests or mentoring developers in other areas
most people are disinclined to accept responsibility for something they have not written

But, for InnerSource to work, some developers must take on responsibilities outside of their silos, so we created a new role with defined responsibilities and called it the Trusted Committer (TC). 

### Defining the Role
* Write and maintain the rules for contributing to the codebase
* Review incoming code (pull requests)
* Mentor contributors from other areas
* Merge pull requests
* Take the lead on refactoring and modularization
* Participate in discussion lists
* Send announcements
* Watch for and suggest opportunities for collaboration

TCs are gatekeepers of the code

people in TC role depend on risk

### Refining the Role
Problem about role
* developers didn’t like the role, because they didn’t want to lose coding time
* They also struggled with prioritizing between coding and TC tasks.
* it was costly in time and attention for them to switch too frequently between those tasks
Solution: assigning them the TC role as a full-time job (rotation schedule)
	* high-risk project 30 developers -> 6 TC role
	* switch roles at the end of every two-week sprint
	* lower-risk 1 TC on 10 Repos or more

### Immediate Benefits
TCs used their mentoring time to create some wonderful documentation for the next big refactor of code
The documentation was created semi-painlessly by archiving public mentorship discussions between the TCs and contributors, and making them easily accessible in a context-relevant location in the codebase itself. (passive documentation)

### Rewarding TCs
The TC role illuminates a developer’s advanced skills in mentoring, deep knowledge of architecture, and best code-review practices. We have found the TC role to be a difficult one, and companies need to determine how to properly  those dedicated staff that take on the additional responsibilities.

## Passive Documentation and the Need for Findability
* Conversations that the TC have while mentoring a contributor 
* Conversations the product owners have when they are explaining their priorities to one another, or arranging them
* The connection between a piece of the code and the project stories about the code, and the live conversations about both
the most difficult part is persuading people to have these conversations more openly

conversations need to happen in a written format. Common written formats include comments in a pull request, a tagged conversation in a public Slack channel, a comments page in a wiki, and a tagged email in a discussion group

### Did You Read the FINE Manual?
We are working on ways to reward these public conversations internally. We are creating dashboards that highlight when someone has written especially relevant documentation. And we allow TCs to reward contributors who do their research first

### Findability
In the open source world, when you want to find out how to do something, you simply Google it. In the corporate world, finding information is much more difficult. Most information is locked away in different software and datastores hat might or might not be searchable
* new employee?
* new integrating a new acquisition
* Sometimes, those difficulties are created by the tools themselves

(tools to assist in finding and sharing information.)
RallySlack
https://github.com/paypal/rallyslack
When someone is on Slack, RallySlack automatically pulls up all of that individual’s
Rally stories to make it easier to find and tag a Slack conversation

## Summary
* Open Source + Closed Source = InnerSource
* (Issue + PR + Discussion) > Rules > Codebase
### Role: Trusted Committer (TC)
* Gatekeepers of the code
> Maintain the contribution rules, Code Review, Announcements, Suggest opportunities  
> 🎁 Rewarding TC
### Bonus: Passive Documentation
* Comments in a pull request, a tagged conversation, a comments page in a wiki
> Mentoring and capturing tribal knowledge  
> Findable & Usable  
> 🎁 Rewarding writers and consumers

## Contributing Aggreements
```
Let contributors know what is required in order for the TC to accept a code contribution
```
* TCs’ names, contact information, and schedule
* The authoring TC’s specialties
* Community guidelines
* Code conventions
* Testing conventions
* Branching conventions
* Commit-message conventions
* Steps for creating good pull requests
* How to submit feature requests
* How to submit bug reports
* How to submit security issue reports
* How to write documentation
* Definition of done
* Dependencies
* Build-process schedule
* Sprint schedule
* Road map

> Don't be complex!  
> TC can explain exactly why the code is being rejected  
> **PayPal**: `HELPWANTED.md` ( notes + levels of prioritization)

## From Internal Silos to Internal Transparency
```
Transparency
```
* Discussions on public channels (accessible company-wide)
* New roles: openly documented that explicitly communicate expectations and needs
* Let other know your team prioritization
