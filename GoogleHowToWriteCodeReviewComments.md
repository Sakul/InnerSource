# How to Write Code Review Comments
> TLDR
> * Be kind
> * Explain your reasoning
> * Balance giving explicit directions with just pointing out problems and letting the developer decide
> * Encourage developers to simplify code or add code comments instead of just explaining the complexity to you

## Courtesy
Always making **comments about the code** and never making comments about the developer

### Bad
Why did **you** use threads here when there’s obviously no benefit to be gained from concurrency?

### Good
The concurrency model here is adding complexity to the system without any actual performance benefit that I can see. Because there’s no performance benefit, it’s best for this code to be single-threaded instead of using multiple threads.

## Explain Why
Example from above is that it helps the developer understand why you are making your comment.

## Giving Guidance
* **In general it is the developer’s responsibility to fix a CL, not the reviewer’s.** You are not required to do detailed design of a solution or write code for the developer.
* Pointing out problems and letting the developer make a decision often helps the developer learn, and makes it easier to do code reviews. It also can result in a better solution, because the developer is closer to the code than the reviewer is.

## Accepting Explanations
**Explanations written only in the code review tool are not helpful to future code readers.** They are acceptable only in a few circumstances, such as when you are reviewing an area you are not very familiar with and the developer explains something that normal readers of the code would have already known.
