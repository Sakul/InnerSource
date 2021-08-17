# Handling Pushback in Code Reviews
> TLDR
> * According to reason
> * Always polite for your comments
> * Clean up their CL now, before the code is in the codebase
> * Improving the speed of your code reviews usually causes strictness complaints to fade away
Sometimes a developer will push back on a code review. Either they will disagree with your suggestion or they will complain that you are being too strict in general.

## Who is right?
When a developer disagrees with your suggestion, first take a moment to consider if they are correct. Often, they are closer to the code than you are, and so they might really have a better insight about certain aspects of it. Does their argument make sense? Does it make sense from a code health perspective? If so, let them know that they are right and let the issue drop.

However, developers are not always right. In this case the reviewer should further explain why they believe that their suggestion is correct. A good explanation demonstrates both an understanding of the developer’s reply, and additional information about why the change is being requested.

> Always stay polite and let the developer know that you hear what they’re saying, you just don’t agree.

## Upsetting Developers
Sometimes developers do become upset, but it is usually brief and they become very thankful later that you helped them improve the quality of their code. Usually, if you are **polite** in your comments, developers actually don’t become upset at all, and the worry is just in the reviewer’s mind. Upsets are usually more about the way comments are written than about the reviewer’s insistence on code quality.

## Cleaning It Up Later
Sometimes developers say they will clean something up in a later CL, and thus you should LGTM this CL now. Some developers are very good about this, and will immediately write a follow-up CL that fixes the issue. However, experience shows that as more time passes after a developer writes the original CL, the less likely this clean up is to happen.

## General Complaints About Strictness
If you previously had fairly lax code reviews and you switch to having strict reviews, some developers will complain very loudly. Improving the speed of your code reviews usually causes these complaints to fade away.
