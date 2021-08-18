# The Standard of Code Review
The primary purpose of code review is to make sure the overall code **health of your codebase is improving over time**.

* Developers must be able to make progress on their tasks.
* Reviewers have ownership and responsibility for the code they are reviewing. They should balance out the need to make forward progress compared to the importance of the changes they are suggesting. Instead of seeking perfection, what a **reviewer should seek is continuous improvement**. A CL that, as a whole, improves the maintainability, readability, and understandability of the system shouldn’t be delayed for days or weeks because it isn’t “perfect.”
> If a CL adds a feature that the reviewer doesn’t want in their system, then the reviewer can certainly deny approval **even if the code is well-designed.**

## Mentoring
Code review can have an important function of teaching developers something new about a language, a framework, or general software design principles. Sharing knowledge is part of improving the code health of a system over time.

## Principles
* **Technical facts and data** overrule opinions and personal preferences.
* On matters of style, the [style guide](http://google.github.io/styleguide) is the absolute authority. If that is not in the style guide is a matter of personal preference. The style should be consistent with what is there
* **Design must underlie principles of software design**, not simply by personal opinion
* If no other rule applies, then the reviewer may ask the author to be consistent with what is in the current codebase
