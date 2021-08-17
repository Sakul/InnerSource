# Speed of Code Reviews
> TLDR
> * Optimize speed of developer team to produce a product rather than speed of individual developer to write code
> * Fast response as possible (in office hours before next morning)
> * Don’t interrupt yourself to do a code review
> * Cross-Time-Zone Reviews should be in office hours
> * Large PR can be splited toserveral small PRs

**At Google, we optimize for the speed at which a team of developers can produce a product together**, as opposed to optimizing for the speed at which an individual developer can write code.

When code reviews are slow, several things happen:
* The velocity of the team as a whole is decreased - new features and bug fixes for the rest of the team are delayed by days, weeks, or months as each CL waits for review
* Developers start to protest the code review process
* Code health can be impacted
> Most complaints about the code review process are actually resolved by `making the process faster`

## How Fast Should Code Reviews Be?
* **One business day is the maximum time it should take to respond** to a code review request (i.e. first thing the next morning)

## Speed vs Interruption
* If you are in the middle of a focused task, such as writing code, don’t interrupt yourself to do a code review (It take a long time for a developer to get back into a smooth flow of development after being interrupted)

## Fast Responses
* Quick responses from the reviewer throughout the process significantly eases the frustration developers can feel with `slow` code reviews
* You can suggest other reviewers who might be able to respond more quickly

## Cross-Time-Zone Reviews
When dealing with time zone differences, try to get back to the author when they are still in the office. If they have already gone home, then try to make sure your review is done before they get back to the office the next day
> In office hours

## LGTM With Comments
Reviewer should give LGTM/Approval even though they are also leaving unresolved comments
* The reviewer is confident that the developer will appropriately address all the reviewer’s remaining comments
* The remaining changes are minor and don’t have to be done by the developer

## Large CLs
Large code review make reviwer not be able to have time to review it, reviwer can ask the developer to [Split the CL into serveral small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html)

## Code Review Improvements Over Time
* Entire code review process tends to go faster and faster over time
* Don’t compromise on the [Code review standards](https://google.github.io/eng-practices/review/reviewer/standard.html) or quality for an imagined improvement in velocity

## Emergencies
* [Emergency](https://google.github.io/eng-practices/review/emergencies.html) must pass through the whole review process very quickly, and where the quality guidelines would be relaxed
